import { Link } from 'react-router-dom';
import { Calendar, Building2, Download, Zap } from 'lucide-react';

const fmtClass = (fmt) => {
  const map = { CSV:'fmt-csv', JSON:'fmt-json', XLSX:'fmt-xls', XLS:'fmt-xls',
                PDF:'fmt-pdf', API:'fmt-api', SHP:'fmt-shp', XML:'fmt-xml' };
  return map[fmt.toUpperCase()] || 'fmt';
};

export default function DatasetCard({ dataset, compact = false }) {
  return (
    <Link
      to={`/datasets/${dataset.slug}`}
      className="block group"
    >
      <div className="card card-inner h-full flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-semibold text-pak-navy group-hover:text-pak-green transition-colors leading-snug
            ${compact ? 'text-sm' : 'text-base'}`}>
            {dataset.title}
          </h3>
          {dataset.featured && (
            <span className="tag-gold flex-shrink-0 text-[10px]">Featured</span>
          )}
        </div>

        {/* Description */}
        {!compact && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
            {dataset.description}
          </p>
        )}

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Building2 size={12} className="text-gray-400" />
            {dataset.publisher}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} className="text-gray-400" />
            Updated {dataset.lastUpdated}
          </span>
          {dataset.apiAvailable && (
            <span className="flex items-center gap-1 text-purple-600">
              <Zap size={12} />
              API
            </span>
          )}
          {dataset.downloads && (
            <span className="flex items-center gap-1">
              <Download size={12} className="text-gray-400" />
              {dataset.downloads.toLocaleString()}
            </span>
          )}
        </div>

        {/* Formats + category */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex gap-1 flex-wrap">
            {dataset.formats.slice(0, 4).map(f => (
              <span key={f} className={fmtClass(f)}>{f}</span>
            ))}
          </div>
          <span className="tag-green text-[10px]">{dataset.categoryLabel}</span>
        </div>
      </div>
    </Link>
  );
}
