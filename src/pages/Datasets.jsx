import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import DatasetCard from '../components/DatasetCard';
import { datasets } from '../data/datasets';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';

export default function Datasets() {
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedFmt, setSelectedFmt] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);

  const allFormats = ['CSV', 'JSON', 'XLSX', 'PDF', 'API', 'XML'];

  const filtered = useMemo(() => {
    let list = [...datasets];
    if (selectedCat) list = list.filter(d => d.category === selectedCat);
    if (selectedFmt) list = list.filter(d => d.formats.includes(selectedFmt));
    if (sortBy === 'recent')  list.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    if (sortBy === 'popular') list.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
    if (sortBy === 'alpha')   list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [selectedCat, selectedFmt, sortBy]);

  const activeFilters = [
    selectedCat && categories.find(c => c.id === selectedCat)?.title,
    selectedFmt,
  ].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <span>All Datasets</span>
      </nav>

      <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="page-title mb-1">All Datasets</h1>
          <p className="text-gray-500 text-sm">{filtered.length} of {datasets.length} datasets</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-pak-green"
          >
            <option value="recent">Most recent</option>
            <option value="popular">Most popular</option>
            <option value="alpha">A–Z</option>
          </select>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 text-sm border rounded-lg px-3 py-2 transition-colors
              ${showFilters ? 'border-pak-green bg-pak-greenPale text-pak-green' : 'border-gray-300 hover:border-gray-400'}`}
          >
            <SlidersHorizontal size={15} /> Filters
            {activeFilters.length > 0 && (
              <span className="bg-pak-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {activeFilters.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filter panel */}
      {showFilters && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-2 block">Category</label>
              <select
                value={selectedCat}
                onChange={e => setSelectedCat(e.target.value)}
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-pak-green"
              >
                <option value="">All categories</option>
                {categories.filter(c => c.available).map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-2 block">Format</label>
              <div className="flex flex-wrap gap-2">
                {allFormats.map(f => (
                  <button
                    key={f}
                    onClick={() => setSelectedFmt(selectedFmt === f ? '' : f)}
                    className={`text-xs font-bold px-3 py-1 rounded-full border transition-colors
                      ${selectedFmt === f ? 'bg-pak-green text-white border-pak-green' : 'border-gray-300 hover:border-pak-green text-gray-600'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-xs text-gray-500">Active filters:</span>
              {activeFilters.map(f => (
                <span key={f} className="flex items-center gap-1 text-xs bg-pak-greenPale text-pak-green px-2 py-0.5 rounded-full border border-pak-green/20">
                  {f}
                </span>
              ))}
              <button
                onClick={() => { setSelectedCat(''); setSelectedFmt(''); }}
                className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 ml-1"
              >
                <X size={12} /> Clear all
              </button>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(ds => <DatasetCard key={ds.id} dataset={ds} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-bold text-gray-700 mb-1">No datasets match your filters</h3>
          <p className="text-gray-500 text-sm">Try adjusting or clearing your filter selections.</p>
          <button onClick={() => { setSelectedCat(''); setSelectedFmt(''); }} className="btn-primary mt-4">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
