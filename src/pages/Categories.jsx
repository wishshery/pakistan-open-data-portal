import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import { categories, availableCategories, unavailableCategories } from '../data/categories';

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <span>Categories</span>
      </nav>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="page-title mb-2">Data Categories</h1>
        <p className="text-gray-600 text-sm max-w-2xl">
          Browse Pakistan's national open data catalogue organised into 14 topic areas, following the
          international open data taxonomy. Categories without published datasets are labelled accordingly.
        </p>
      </div>

      {/* Summary row */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2 bg-pak-greenPale rounded-lg px-4 py-2.5">
          <CheckCircle size={16} className="text-pak-green" />
          <span className="text-sm font-medium text-pak-greenDark">
            {availableCategories.length} categories with data
          </span>
        </div>
        <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-4 py-2.5">
          <AlertCircle size={16} className="text-orange-600" />
          <span className="text-sm font-medium text-orange-700">
            {unavailableCategories.length} categories not yet available
          </span>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-4 py-2.5">
          <span className="text-sm font-medium text-blue-700">
            {categories.reduce((sum, c) => sum + c.datasetCount, 0)}+ total datasets
          </span>
        </div>
      </div>

      {/* Available categories */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-pak-navy mb-4 flex items-center gap-2">
          <CheckCircle size={18} className="text-pak-green" />
          Available Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {availableCategories.map(cat => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Unavailable categories */}
      <section>
        <h2 className="text-lg font-bold text-pak-navy mb-2 flex items-center gap-2">
          <AlertCircle size={18} className="text-orange-500" />
          Not Currently Available
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          These categories exist in the international open data taxonomy but Pakistani datasets have not yet been
          published. The Government of Pakistan is working to make this data available in future releases.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {unavailableCategories.map(cat => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Request data box */}
      <div className="mt-12 bg-pak-greenPale border border-pak-green/20 rounded-xl p-6">
        <h3 className="font-bold text-pak-navy mb-1">Don't see the data you need?</h3>
        <p className="text-sm text-gray-600 mb-4">
          If you require a dataset that is not yet published, you can request it from the relevant government department.
          Pakistan's Right to Information Act 2017 gives citizens the right to access public records.
        </p>
        <a
          href="mailto:opendata@pakistan.gov.pk"
          className="btn-primary text-sm"
        >
          Request a Dataset
        </a>
      </div>
    </div>
  );
}
