import { useParams, Link } from 'react-router-dom';
import { AlertCircle, Building2, ArrowRight } from 'lucide-react';
import DatasetCard from '../components/DatasetCard';
import { getCategoryBySlug } from '../data/categories';
import { getDatasetsByCategory } from '../data/datasets';

export default function CategoryDetail() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-pak-navy mb-2">Category not found</h2>
        <Link to="/categories" className="btn-primary mt-4">Back to Categories</Link>
      </div>
    );
  }

  const categoryDatasets = getDatasetsByCategory(category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <Link to="/categories" className="breadcrumb-link">Categories</Link>
        <span>/</span>
        <span>{category.title}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-5 mb-8">
        <div className="text-5xl flex-shrink-0">{category.icon}</div>
        <div>
          <h1 className="page-title mb-2">{category.title}</h1>
          <p className="text-gray-600 max-w-2xl">{category.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {category.available ? (
              <span className="tag-green">{category.datasetCount} datasets available</span>
            ) : (
              <span className="tag-unavail flex items-center gap-1">
                <AlertCircle size={11} /> Not currently available
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Unavailable notice */}
      {!category.available && (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-orange-900 mb-1">No datasets currently available</h3>
              <p className="text-sm text-orange-800">{category.unavailableNote}</p>
              <a href="mailto:opendata@pakistan.gov.pk" className="btn-outline mt-4 text-sm border-orange-400 text-orange-700 hover:bg-orange-100">
                Request this data
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Publishers */}
      {category.available && category.publishers.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Building2 size={15} />
            Publishing Departments
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.publishers.map(p => (
              <span key={p} className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full shadow-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Datasets */}
      {category.available && (
        <>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-pak-navy">
              {categoryDatasets.length} dataset{categoryDatasets.length !== 1 ? 's' : ''} in this category
            </h2>
          </div>

          {categoryDatasets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {categoryDatasets.map(ds => (
                <DatasetCard key={ds.id} dataset={ds} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl mb-10">
              <div className="text-4xl mb-3">📂</div>
              <p className="text-gray-500 text-sm">No datasets indexed yet for this category.</p>
              <p className="text-gray-400 text-xs mt-1">Check <a href="https://data.gov.pk" className="text-pak-green hover:underline">data.gov.pk</a> for the latest additions.</p>
            </div>
          )}

          {/* More datasets notice */}
          <div className="bg-pak-greenPale border border-pak-green/20 rounded-xl p-5 flex items-center justify-between gap-4">
            <p className="text-sm text-pak-greenDark">
              More datasets are available on the source portal. This catalogue is refreshed automatically.
            </p>
            <a
              href="https://data.gov.pk"
              target="_blank" rel="noreferrer"
              className="btn-primary text-xs flex-shrink-0"
            >
              Browse source <ArrowRight size={13} />
            </a>
          </div>
        </>
      )}
    </div>
  );
}
