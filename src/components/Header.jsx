import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const navLinks = [
    { label: 'Categories', to: '/categories' },
    { label: 'Datasets',   to: '/datasets'   },
    { label: 'Departments', to: '/departments' },
    { label: 'API',        to: '/api'         },
    { label: 'About',      to: '/about'       },
  ];

  const isActive = (to) => pathname === to || pathname.startsWith(to + '/');

  return (
    <>
      {/* Top government banner */}
      <div className="bg-pak-navy text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Globe size={11} />
            An official open data service of the Government of Pakistan
          </span>
          <a
            href="https://data.gov.pk"
            target="_blank"
            rel="noreferrer"
            className="hover:underline opacity-75 hover:opacity-100 transition-opacity"
          >
            Source: data.gov.pk ↗
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              {/* Pakistan crescent & star emblem */}
              <div className="w-9 h-9 bg-pak-green rounded-lg flex items-center justify-center text-white font-bold text-lg leading-none select-none">
                ☪
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-pak-navy text-base tracking-tight">Pakistan</div>
                <div className="text-xs text-pak-green font-semibold tracking-widest uppercase">Open Data</div>
              </div>
            </Link>

            {/* Desktop search */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="search"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search datasets, departments, topics…"
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-pak-green focus:ring-1 focus:ring-pak-green"
                />
              </div>
            </form>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link px-3 py-1.5 rounded-md ${isActive(l.to) ? 'nav-link-active bg-pak-greenPale' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://github.com/your-org/pakistan-open-data-portal"
                target="_blank"
                rel="noreferrer"
                className="ml-2 btn-primary text-xs py-1.5 px-3"
              >
                GitHub
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-3 space-y-1">
            <form onSubmit={handleSearch} className="mb-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="search"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search datasets…"
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-pak-green"
                />
              </div>
            </form>
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive(l.to) ? 'bg-pak-greenPale text-pak-green' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
