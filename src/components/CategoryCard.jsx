import { Link } from 'react-router-dom';
import { AlertCircle, ChevronRight } from 'lucide-react';

const colorMap = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
  red:     { bg: 'bg-red-50',     text: 'text-red-700',     border: 'border-red-200',     dot: 'bg-red-400' },
  slate:   { bg: 'bg-slate-50',   text: 'text-slate-700',   border: 'border-slate-200',   dot: 'bg-slate-400' },
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',     dot: 'bg-blue-500' },
  green:   { bg: 'bg-green-50',   text: 'text-green-700',   border: 'border-green-200',    dot: 'bg-green-500' },
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-700',  border: 'border-indigo-200',   dot: 'bg-indigo-500' },
  yellow:  { bg: 'bg-yellow-50',  text: 'text-yellow-700',  border: 'border-yellow-200',   dot: 'bg-yellow-500' },
  rose:    { bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-200',     dot: 'bg-rose-500' },
  teal:    { bg: 'bg-teal-50',    text: 'text-teal-700',    border: 'border-teal-200',     dot: 'bg-teal-500' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-700',  border: 'border-violet-200',   dot: 'bg-violet-500' },
  orange:  { bg: 'bg-orange-50',  text: 'text-orange-700',  border: 'border-orange-200',   dot: 'bg-orange-500' },
  amber:   { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',    dot: 'bg-amber-500' },
  cyan:    { bg: 'bg-cyan-50',    text: 'text-cyan-700',    border: 'border-cyan-200',     dot: 'bg-cyan-500' },
  gray:    { bg: 'bg-gray-50',    text: 'text-gray-700',    border: 'border-gray-200',     dot: 'bg-gray-400' },
};

export default function CategoryCard({ category, compact = false }) {
  const c = colorMap[category.color] || colorMap.gray;

  const inner = (
    <div className={`card cursor-pointer group h-full ${!category.available ? 'opacity-75' : ''}`}>
      <div className={`card-inner flex ${compact ? 'gap-3 items-start' : 'flex-col gap-3'}`}>
        {/* Icon */}
        <div className={`${compact ? 'text-2xl mt-0.5 flex-shrink-0' : 'text-3xl'}`}>
          {category.icon}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className={`font-semibold text-pak-navy group-hover:text-pak-green transition-colors leading-snug
              ${compact ? 'text-sm' : 'text-base'}`}>
              {category.title}
            </h3>
            {category.available && (
              <ChevronRight size={15} className="text-gray-400 group-hover:text-pak-green flex-shrink-0 transition-colors" />
            )}
          </div>

          {/* Description */}
          {!compact && (
            <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
              {category.description}
            </p>
          )}

          {/* Status */}
          {category.available ? (
            <div className={`${c.bg} ${c.text} ${c.border} inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full border`}>
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
              {category.datasetCount} datasets
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
              <AlertCircle size={11} />
              Not currently available
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (!category.available) {
    return <div title={category.unavailableNote}>{inner}</div>;
  }

  return (
    <Link to={`/categories/${category.slug}`} className="block h-full">
      {inner}
    </Link>
  );
}
