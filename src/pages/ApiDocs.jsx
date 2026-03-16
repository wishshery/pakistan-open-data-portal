import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Copy, Check, Zap } from 'lucide-react';

function CodeBlock({ code, lang = 'http' }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-200 rounded-xl p-5 text-xs overflow-x-auto leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
        className="absolute top-3 right-3 p-1.5 rounded bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-white transition-colors"
        title="Copy"
      >
        {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
      </button>
    </div>
  );
}

const endpoints = [
  {
    method: 'GET', path: '/v1/datasets', status: 200,
    desc: 'List all available datasets with metadata.',
    params: [
      { name: 'category', type: 'string', desc: 'Filter by category ID (e.g. business-economy)' },
      { name: 'format',   type: 'string', desc: 'Filter by data format (CSV, JSON, XLSX…)' },
      { name: 'q',        type: 'string', desc: 'Full-text search across title and description' },
      { name: 'page',     type: 'integer',desc: 'Page number (default: 1)' },
      { name: 'per_page', type: 'integer',desc: 'Results per page (default: 20, max: 100)' },
    ],
    example: `GET https://api.opendata.gov.pk/v1/datasets?category=health&format=CSV`,
  },
  {
    method: 'GET', path: '/v1/datasets/:id', status: 200,
    desc: 'Get metadata for a specific dataset by its ID.',
    params: [{ name: 'id', type: 'string', desc: 'Dataset ID (e.g. pbs-gdp-quarterly)' }],
    example: `GET https://api.opendata.gov.pk/v1/datasets/pbs-gdp-quarterly`,
  },
  {
    method: 'GET', path: '/v1/datasets/:id/data', status: 200,
    desc: 'Download the actual dataset in the specified format.',
    params: [
      { name: 'format', type: 'string', desc: 'Output format: json (default), csv, xlsx' },
      { name: 'limit',  type: 'integer',desc: 'Limit rows returned (default: all)' },
    ],
    example: `GET https://api.opendata.gov.pk/v1/datasets/sbp-exchange-rates/data?format=json&limit=30`,
  },
  {
    method: 'GET', path: '/v1/categories', status: 200,
    desc: 'List all data categories with dataset counts.',
    params: [],
    example: `GET https://api.opendata.gov.pk/v1/categories`,
  },
];

const sampleResponse = `{
  "success": true,
  "data": {
    "id": "sbp-exchange-rates",
    "title": "State Bank of Pakistan Daily Exchange Rates",
    "publisher": "State Bank of Pakistan",
    "category": "business-economy",
    "lastUpdated": "2025-03-14",
    "updateFrequency": "Daily",
    "formats": ["CSV", "JSON", "XML", "API"],
    "apiAvailable": true,
    "license": "Open Government Data Licence – Pakistan v1.0",
    "downloadUrl": "https://api.opendata.gov.pk/v1/datasets/sbp-exchange-rates/data"
  }
}`;

export default function ApiDocs() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <span>API Documentation</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-4 mb-10">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Zap size={24} className="text-purple-600" />
        </div>
        <div>
          <h1 className="page-title mb-2">REST API Documentation</h1>
          <p className="text-gray-600 max-w-2xl">
            Access Pakistan Open Data programmatically using our REST API. All public datasets are available
            in JSON, CSV, and XLSX formats. No authentication or API key required.
          </p>
        </div>
      </div>

      {/* Base URL */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-bold text-gray-700 mb-2">Base URL</h2>
        <CodeBlock code="https://api.opendata.gov.pk/v1" />
        <div className="mt-3 flex flex-wrap gap-3 text-xs">
          <span className="tag-green">No auth required</span>
          <span className="tag-blue">HTTPS only</span>
          <span className="tag-gray">Rate limit: 1,000 req/hr</span>
          <span className="tag-gray">CORS: enabled</span>
        </div>
      </div>

      {/* Endpoints */}
      <section className="mb-10">
        <h2 className="section-title mb-6">Endpoints</h2>
        <div className="space-y-6">
          {endpoints.map(ep => (
            <div key={ep.path} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 bg-gray-50 border-b border-gray-200 px-5 py-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded font-mono
                  ${ep.method === 'GET' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {ep.method}
                </span>
                <code className="text-sm font-mono text-gray-800 font-semibold">{ep.path}</code>
                <span className="ml-auto text-xs text-gray-500">{ep.status} OK</span>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-700">{ep.desc}</p>

                {ep.params.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Parameters</h4>
                    <table className="w-full text-xs border border-gray-100 rounded-lg overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left px-3 py-2 text-gray-500 font-semibold">Name</th>
                          <th className="text-left px-3 py-2 text-gray-500 font-semibold">Type</th>
                          <th className="text-left px-3 py-2 text-gray-500 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ep.params.map(p => (
                          <tr key={p.name} className="border-t border-gray-100">
                            <td className="px-3 py-2 font-mono text-purple-700">{p.name}</td>
                            <td className="px-3 py-2 text-gray-500">{p.type}</td>
                            <td className="px-3 py-2 text-gray-700">{p.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Example Request</h4>
                  <CodeBlock code={ep.example} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample response */}
      <section className="mb-10">
        <h2 className="section-title mb-4">Sample Response</h2>
        <CodeBlock code={sampleResponse} lang="json" />
      </section>

      {/* SDKs note */}
      <section>
        <h2 className="section-title mb-4">Client Libraries & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['Python', 'JavaScript / Node.js', 'R'].map(lang => (
            <div key={lang} className="border border-gray-200 rounded-xl p-4 text-center">
              <div className="font-bold text-pak-navy text-sm mb-1">{lang}</div>
              <p className="text-xs text-gray-500">Community-maintained wrapper available on GitHub</p>
              <a
                href="https://github.com/your-org/pakistan-open-data-portal"
                target="_blank" rel="noreferrer"
                className="text-xs text-pak-green hover:underline mt-2 inline-block"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
