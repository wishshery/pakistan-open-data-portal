import { useSearchParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import DatasetCard from '../components/DatasetCard';
import SearchBar from '../components/SearchBar';
import { datasets } from '../data/datasets';
import { categories } from '../data/categories';

export default function Search() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return datasets;
    const q = query.toLowerCase();
    return datasets.filter(d =>
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.publisher.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q)) ||
      d.categoryLabel.toLowerCase().includes(q)
    );
  }, [query]);

  const catMatches = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return categories.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8 max-w-2xl">
        <SearchBar initialQuery={query} />
      </div>

      {query && (
        <div className="mb-6">
          <h1 className="text-xl font-bold text-pak-navy">
            {results.length} result{results.length !== 1 ? 's' : ''} for <span className="text-pak-green">"{query}"</span>
          </h1>
        </div>
      )}

      {/* Category matches */}
      {catMatches.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">Matching Categories</h2>
          <div className="flex flex-wrap gap-2">
            {catMatches.map(c => (
              <Link
                key={c.id}
                to={`/categories/${c.slug}`}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-pak-green rounded-lg px-3 py-2 text-sm transition-colors"
              >
                <span>{c.icon}</span>
                <span className="font-medium text-pak-navy">{c.title}</span>
                {c.available && <span className="tag-green text-[10px]">{c.datasetCount}</span>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Dataset results */}
      {results.length > 0 ? (
        <>
          <h2 className="text-sm font-bold text-gray-600 mb-4 uppercase tracking-wide">Datasets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map(ds => <DatasetCard key={ds.id} dataset={ds} />)}
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">No results found</h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Try different keywords or browse categories to find what you're looking for.
          </p>
          <Link to="/categories" className="btn-primary mt-5 inline-flex">
            Browse categories
          </Link>
        </div>
      )}
    </div>
  );
}
