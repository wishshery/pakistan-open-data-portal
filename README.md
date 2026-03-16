# Pakistan Open Data Portal

A modern, production-ready national open data platform for Pakistan — built to mirror the usability of data.gov.uk while using real datasets from data.gov.pk.

## Live URL
`https://your-org.github.io/pakistan-open-data-portal/`

## Overview

280+ datasets across 14 categories, full-text search, REST API, automated daily sync from data.gov.pk, and mobile-responsive government-grade design in Pakistan's national colours.

## Quick Start

```bash
git clone https://github.com/your-org/pakistan-open-data-portal.git
cd pakistan-open-data-portal
npm install
npm run dev
```

Opens at: http://localhost:5173/pakistan-open-data-portal/

## Build & Deploy

```bash
npm run build   # output in ./dist/
```

### GitHub Pages (Recommended)
1. Fork repo
2. Settings → Pages → Source: GitHub Actions
3. Update base in vite.config.js to match your repo name
4. Push to main — auto-deploys

### Vercel / Netlify
Set `base: '/'` in vite.config.js, then connect repo to Vercel or Netlify.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite 6 + React Router v6 |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Data Sync | Python 3 + CKAN API (daily) |

## Repository Structure

```
src/
  components/    Header, Footer, SearchBar, CategoryCard, DatasetCard
  pages/         Home, Categories, CategoryDetail, Datasets, DatasetDetail,
                 Search, Departments, About, ApiDocs
  data/          categories.js, datasets.js, departments.js
  App.jsx        Router + layout
  index.css      Tailwind + design tokens
scripts/
  sync_datasets.py   Daily CKAN sync
.github/workflows/
  deploy.yml         Build + deploy to GitHub Pages
  sync-data.yml      Daily automated data sync
```

## Category Structure

| Category | Status | Datasets |
|----------|--------|----------|
| Business and Economy | Available | 48 |
| Crime and Justice | Not currently available | 0 |
| Defence | Not currently available | 0 |
| Education | Available | 34 |
| Environment | Available | 21 |
| Government | Available | 29 |
| Government Spending | Available | 18 |
| Health | Available | 41 |
| Mapping and Geospatial | Not currently available | 0 |
| Society and Population | Available | 56 |
| Cities and Urban Development | Available | 12 |
| Transport | Not currently available | 0 |
| Digital Government Services | Not currently available | 0 |
| Government Reference Data | Available | 23 |

Categories without data are shown and labelled "Not currently available".

## Example Datasets

- Pakistan Quarterly GDP Growth Rate (PBS)
- SBP Daily Exchange Rates (State Bank of Pakistan)
- Consumer Price Index (PBS)
- Federal Budget 2024-25 (Ministry of Finance)
- School Enrollment and Literacy Survey (MoE)
- National Health Facilities Registry (NHSRC)
- Pakistan Demographic Health Survey (PBS)
- Population Census 2023 (PBS)
- BISP Beneficiary Data (BISP)
- PMD Climate and Rainfall Data (PMD)
- General Election Results 2024 (ECP)
- Administrative Divisions Reference (PBS)
- Punjab Urban Indicators (Punjab Urban Unit)
- PPRA Procurement Awards Register (PPRA)

## Automated Data Updates

Daily GitHub Actions workflow (02:00 UTC):
1. Calls data.gov.pk CKAN API
2. Fetches dataset metadata
3. Updates src/data/sync_meta.json
4. Commits changes and triggers redeploy

Manual run:
```bash
pip install requests python-dateutil
python scripts/sync_datasets.py
```

## REST API

Base URL: https://api.opendata.gov.pk/v1
Auth: None required | Rate: 1,000 req/hr

- GET /datasets — list all datasets
- GET /datasets/:id — dataset metadata
- GET /datasets/:id/data — download data
- GET /categories — list categories

## Colour Palette

- pak-green #006837 — Pakistan national green
- pak-greenDark #004d28 — hover states
- pak-navy #0A1628 — headings
- pak-gold #C8962B — featured badges

## Data Governance

- Licence: Open Government Data Licence – Pakistan v1.0
- Standards: 5-Star Open Data, DCAT metadata schema
- Oversight: National Information Technology Board (NITB)
- Legal basis: Right to Information Act 2017

## Licence

Code: MIT Licence
Data: Open Government Data Licence – Pakistan v1.0

---
Benchmark: data.gov.uk | Source data: data.gov.pk
