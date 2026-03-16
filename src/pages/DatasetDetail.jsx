import { useParams, Link } from 'react-router-dom';
import { Download, Calendar, RefreshCw, Building2, Tag, Zap, ExternalLink, FileText, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { getDatasetBySlug } from '../data/datasets';

const fmtClass = (fmt) => {
  const map = { CSV:'fmt-csv', JSON:'fmt-json', XLSX:'fmt-xls', XLS:'fmt-xls',
                PDF:'fmt-pdf', API:'fmt-api', SHP:'fmt-shp', XML:'fmt-xml', SPSS:'fmt-api', STATA:'fmt-api', NETCDF:'fmt-shp' };
  return map[fmt.toUpperCase()] || 'fmt';
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
      className="p-1.5 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
      title="Copy"
    >
      {copied ? <Check size={13} className="text-pak-green" /> : <Copy size={13} />}
    </button>
  );
}

export default function DatasetDetail() {
  const { slug } = useParams();
  const dataset = getDatasetBySlug(slug);

  if (!dataset) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-pak-navy mb-2">Dataset not found</h2>
        <Link to="/datasets" className="btn-primary mt-4 inline-flex">Browse all datasets</Link>
      </div>
    );
  }

  const apiEndpoint = `https://api.opendata.gov.pk/v1/datasets/${dataset.id}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <Link to="/categories" className="breadcrumb-link">Categories</Link>
        <span>/</span>
        <Link to={`/categories/${dataset.category.replace(/([A-Z])/g, '-$1').toLowerCase()}`} className="breadcrumb-link">
          {dataset.categoryLabel}
        </Link>
        <span>/</span>
        <span className="truncate max-w-xs">{dataset.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── MAIN CONTENT ── */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div>
            {dataset.featured && <span className="tag-gold mb-2 inline-block">Featured Dataset</span>}
            <h1 className="text-2xl md:text-3xl font-extrabold text-pak-navy leading-tight mb-3">
              {dataset.title}
            </h1>
            <p className="text-gray-700 leading-relaxed">{dataset.longDescription || dataset.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {dataset.tags.map(tag => (
              <span key={tag} className="tag-gray"># {tag}</span>
            ))}
          </div>

          {/* Data preview */}
          {dataset.previewData && (
            <div>
              <h2 className="text-base font-bold text-pak-navy mb-3 flex items-center gap-2">
                <FileText size={16} className="text-pak-green" />
                Data Preview
                <span className="tag-gray font-normal">First 5 rows</span>
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="data-table">
                  <thead>
                    <tr>
                      {dataset.previewData.headers.map(h => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataset.previewData.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">Preview showing sample rows. Download full dataset for complete data.</p>
            </div>
          )}

          {/* API access */}
          {dataset.apiAvailable && (
            <div className="bg-gray-900 rounded-xl p-5">
              <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Zap size={14} className="text-purple-400" />
                API Access
              </h2>
              <div className="space-y-3">
                {[
                  { method: 'GET', label: 'Dataset metadata', path: apiEndpoint },
                  { method: 'GET', label: 'Download as JSON', path: `${apiEndpoint}/data?format=json` },
                  { method: 'GET', label: 'Download as CSV',  path: `${apiEndpoint}/data?format=csv` },
                ].map(({ method, label, path }) => (
                  <div key={path} className="flex items-center gap-2 group">
                    <span className="text-xs font-bold text-green-400 font-mono w-9">{method}</span>
                    <code className="text-xs text-gray-300 font-mono flex-1 bg-gray-800 px-3 py-1.5 rounded truncate">
                      {path}
                    </code>
                    <CopyButton text={path} />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">No authentication required. Rate limit: 1,000 requests/hour.</p>
            </div>
          )}

          {/* Licence */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h2 className="text-sm font-bold text-blue-900 mb-1">Licence</h2>
            <p className="text-sm text-blue-700">{dataset.license}</p>
            <p className="text-xs text-blue-600 mt-2">
              You are free to copy, publish, distribute, transmit, adapt, and exploit this dataset.
              Attribution to the original publisher is required.
            </p>
          </div>
        </div>

        {/* ── SIDEBAR ── */}
        <div className="space-y-5">
          {/* Download box */}
          <div className="card card-inner">
            <h3 className="font-bold text-pak-navy mb-4 text-sm">Download Dataset</h3>
            <div className="space-y-2">
              {dataset.formats.map(fmt => (
                <a
                  key={fmt}
                  href={dataset.source}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-between gap-2 border border-gray-200 hover:border-pak-green rounded-lg px-3 py-2.5 group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className={fmtClass(fmt)}>{fmt}</span>
                    <span className="text-sm text-gray-700 group-hover:text-pak-green transition-colors">
                      {fmt === 'API' ? 'REST API' : `Download as ${fmt}`}
                    </span>
                  </div>
                  <Download size={14} className="text-gray-400 group-hover:text-pak-green transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              {dataset.downloads?.toLocaleString()} total downloads
            </p>
          </div>

          {/* Metadata */}
          <div className="card card-inner">
            <h3 className="font-bold text-pak-navy mb-4 text-sm">Metadata</h3>
            <dl className="space-y-3 text-sm">
              {[
                { icon: Building2, label: 'Publisher',      value: dataset.publisher },
                { icon: Calendar,  label: 'Last updated',   value: dataset.lastUpdated },
                { icon: RefreshCw, label: 'Update frequency', value: dataset.updateFrequency },
                { icon: FileText,  label: 'Coverage',       value: dataset.coverage },
                { icon: Tag,       label: 'Category',       value: dataset.categoryLabel },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-2">
                  <Icon size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <dt className="text-xs text-gray-500">{label}</dt>
                    <dd className="text-gray-800 font-medium text-xs mt-0.5">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Source link */}
          <a
            href={dataset.source}
            target="_blank" rel="noreferrer"
            className="block card card-inner text-center group hover:border-pak-green transition-colors"
          >
            <ExternalLink size={16} className="text-pak-green mx-auto mb-2" />
            <div className="text-sm font-semibold text-pak-navy group-hover:text-pak-green transition-colors">
              View on Source Portal
            </div>
            <div className="text-xs text-gray-500 mt-0.5">{dataset.source}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
