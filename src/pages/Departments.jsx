import { Link } from 'react-router-dom';
import { Building2, ExternalLink, Database } from 'lucide-react';
import { departments } from '../data/departments';

const typeColors = {
  'Federal Agency':          'bg-blue-50 text-blue-700',
  'Central Bank':            'bg-emerald-50 text-emerald-700',
  'Federal Ministry':        'bg-indigo-50 text-indigo-700',
  'Regulatory Authority':    'bg-purple-50 text-purple-700',
  'Constitutional Body':     'bg-amber-50 text-amber-700',
  'Federal Programme':       'bg-rose-50 text-rose-700',
  'Provincial Agency':       'bg-teal-50 text-teal-700',
};

export default function Departments() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <span>Departments</span>
      </nav>

      <div className="mb-8">
        <h1 className="page-title mb-2">Publishing Departments</h1>
        <p className="text-gray-600 text-sm max-w-2xl">
          Federal ministries, regulatory authorities, provincial agencies, and other public bodies contributing
          to the Pakistan Open Data catalogue.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { n: departments.length, label: 'Publishers' },
          { n: departments.reduce((s, d) => s + d.datasetCount, 0), label: 'Datasets' },
          { n: 4, label: 'Provinces' },
          { n: 1, label: 'Federal Capital' },
        ].map(({ n, label }) => (
          <div key={label} className="stat-card">
            <div className="text-2xl font-extrabold text-pak-navy">{n}+</div>
            <div className="text-xs text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Department grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {departments.map(dept => (
          <div key={dept.id} className="card card-inner flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 bg-pak-greenPale rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 size={20} className="text-pak-green" />
              </div>
              <div className="min-w-0">
                <h2 className="font-bold text-pak-navy text-sm leading-snug">{dept.name}</h2>
                <span className={`tag mt-1 ${typeColors[dept.type] || 'bg-gray-100 text-gray-600'}`}>
                  {dept.type}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed flex-1">{dept.description}</p>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-pak-green">
                <Database size={14} />
                {dept.datasetCount} datasets
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={dept.website}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-pak-green transition-colors"
                >
                  Website <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contribute box */}
      <div className="mt-12 bg-pak-navy rounded-2xl p-8 text-center">
        <Building2 size={32} className="text-pak-greenLight mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white mb-2">Is your agency missing?</h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-5">
          If your department publishes open data and is not listed here, please contact us to be included
          in the Pakistan Open Data catalogue.
        </p>
        <a href="mailto:opendata@pakistan.gov.pk" className="btn-primary">
          Contact Us
        </a>
      </div>
    </div>
  );
}
