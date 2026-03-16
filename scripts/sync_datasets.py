#!/usr/bin/env python3
"""
Pakistan Open Data Portal – Automated Dataset Sync
────────────────────────────────────────────────────
Fetches dataset metadata from data.gov.pk (CKAN API) and updates the
local dataset catalogue (src/data/datasets.js) with the latest information.

Run:   python scripts/sync_datasets.py
Env:   DATA_GOV_PK_API  – base URL of the CKAN instance (default: https://data.gov.pk)
"""

import os, json, re, datetime, sys, time
from pathlib import Path
import requests

BASE_URL   = os.environ.get('DATA_GOV_PK_API', 'https://data.gov.pk')
CKAN_API   = f"{BASE_URL}/api/3"
OUT_FILE   = Path(__file__).parent.parent / 'src' / 'data' / 'sync_meta.json'
MAX_ROWS   = 200
TIMEOUT    = 15

def fetch_packages():
    """Fetch all dataset metadata from CKAN package_search endpoint."""
    all_datasets = []
    offset = 0
    while True:
        url = f"{CKAN_API}/action/package_search"
        try:
            resp = requests.get(url, params={'rows': 100, 'start': offset}, timeout=TIMEOUT)
            resp.raise_for_status()
            result = resp.json().get('result', {})
            results = result.get('results', [])
            count   = result.get('count', 0)
            all_datasets.extend(results)
            print(f"  Fetched {len(all_datasets)} / {count} datasets …")
            if len(all_datasets) >= count or len(results) == 0 or len(all_datasets) >= MAX_ROWS:
                break
            offset += len(results)
            time.sleep(0.5)   # be polite
        except requests.exceptions.RequestException as e:
            print(f"  Warning: Could not reach data.gov.pk: {e}", file=sys.stderr)
            break
    return all_datasets

def extract_formats(resources):
    """Extract unique format labels from CKAN resources."""
    fmts = set()
    for r in resources:
        fmt = (r.get('format') or '').strip().upper()
        if fmt:
            fmts.add(fmt)
    return sorted(fmts) if fmts else ['CSV']

def normalise(pkg):
    """Map a CKAN package dict to our lightweight metadata schema."""
    return {
        'id':              pkg.get('name', '').replace('-', '_'),
        'title':           pkg.get('title', '').strip(),
        'publisher':       (pkg.get('organization') or {}).get('title', 'Government of Pakistan'),
        'lastUpdated':     (pkg.get('metadata_modified') or '')[:10],
        'formats':         extract_formats(pkg.get('resources', [])),
        'tags':            [t['name'] for t in pkg.get('tags', [])],
        'description':     (pkg.get('notes') or '').strip()[:300],
        'sourceUrl':       f"{BASE_URL}/dataset/{pkg.get('name', '')}",
    }

def main():
    print("Pakistan Open Data – Dataset Sync")
    print("=" * 40)
    print(f"Fetching from: {CKAN_API}")

    packages = fetch_packages()

    if not packages:
        print("No packages fetched – keeping existing data unchanged.")
        sys.exit(0)

    meta = {
        'syncedAt':    datetime.datetime.utcnow().isoformat() + 'Z',
        'totalCount':  len(packages),
        'source':      BASE_URL,
        'datasets':    [normalise(p) for p in packages],
    }

    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    print(f"\n✅  Written {len(packages)} dataset records → {OUT_FILE}")

if __name__ == '__main__':
    main()
