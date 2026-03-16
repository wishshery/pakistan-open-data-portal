import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const suggestions = [
  'GDP growth rate', 'Exchange rates', 'Population census', 'Health facilities',
  'Election results', 'Federal budget', 'School enrollment', 'Climate data',
];

export default function SearchBar({ large = false, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`relative flex items-stretch rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white ${large ? 'text-base' : 'text-sm'}`}>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search size={large ? 22 : 18} className="text-gray-400" />
        </div>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search 280+ datasets across all categories…"
          className={`flex-1 pl-12 pr-4 focus:outline-none ${large ? 'py-4 text-base' : 'py-2.5 text-sm'}`}
        />
        <button
          type="submit"
          className={`bg-pak-green hover:bg-pak-greenDark text-white font-semibold px-6 transition-colors duration-200 ${large ? 'text-base' : 'text-sm'}`}
        >
          Search
        </button>
      </div>

      {/* Quick suggestion chips */}
      {large && (
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs text-white/80">Popular:</span>
          {suggestions.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => { setQuery(s); navigate(`/search?q=${encodeURIComponent(s)}`); }}
              className="text-xs bg-white/20 hover:bg-white/30 text-white border border-white/30 px-3 py-1 rounded-full transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
