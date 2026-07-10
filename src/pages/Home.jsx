import { Link } from 'react-router-dom';
import { ArrowRight, Database, Building2, RefreshCw, Zap, TrendingUp, Users, BookOpen } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import DatasetCard from '../components/DatasetCard';
import { categories } from '../data/categories';
import { featuredDatasets, recentDatasets, datasets } from '../data/datasets';
import { departments } from '../data/departments';

const stats = [
  { value: '280+', label: 'Datasets',     icon: Database,   color: 'text-pak-green' },
  { value: '11',   label: 'Departments',  icon: Building2,  color: 'text-blue-600'  },
  { value: '14',   label: 'Categories',   icon: TrendingUp, color: 'text-violet-600' },
  { value: '6',    label: 'API Endpoints', icon: Zap,       color: 'text-amber-600' },
];

const pillars = [
  {
    icon: BookOpen,
    title: 'Research & Academia',
    desc: 'Enabling evidence-based research with Pakistan\'s official microdata, surveys, and longitudinal datasets.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Startups & Developers',
    desc: 'Build data-driven applications using REST APIs and standardised open data formats.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Policy & Government',
    desc: 'Support evidence-based policy making with cross-departmental data integration and analytics.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Users,
    title: 'Civil Society',
    desc: 'Empowering journalists, NGOs, and citizens with transparent public sector information.',
    color: 'bg-rose-50 text-rose-600',
  },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #003d20 0%, #006837 42%, #007a41 72%, #005c30 100%)' }}
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        {/* Glow orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,200,66,0.18) 0%, transparent 65%)' }} />
        <div className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,138,73,0.5) 0%, transparent 65%)' }} />
        {/* Crescent & star watermark */}
        <svg className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-10 pointer-events-none hidden lg:block" viewBox="0 0 100 100" fill="white" aria-hidden="true">
          <path d="M62 10a40 40 0 1 0 0 80 44 44 0 0 1-18-80 40 40 0 0 1 18 0Z"/>
          <path d="M74 32l3.6 9.2 9.9.5-7.7 6.2 2.6 9.6-8.4-5.4-8.4 5.4 2.6-9.6-7.7-6.2 9.9-.5Z"/>
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20 mb-7">
              <span className="w-2 h-2 bg-pak-goldLight rounded-full animate-pulse" />
              Official Pakistan Open Data Portal
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-5">
              Find and use open data<br />
              <span className="text-pak-goldLight">from Pakistan’s public bodies</span>
            </h1>
            <p className="text-white/85 text-base md:text-lg mb-9 max-w-xl leading-relaxed">
              Access hundreds of datasets from federal ministries, provincial governments, regulatory authorities,
              and public institutions — free for use by everyone.
            </p>

            <SearchBar large />
          </div>
        </div>

        {/* Bottom fade into stats */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
      </section>

      {/* ── STATS (overlapping hero) ────────────────────────────── */}
      <section className="relative z-10 -mt-14 md:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className="bg-white/95 backdrop-blur rounded-xl p-6 border border-gray-100 shadow-cardHover text-center">
                <Icon size={22} className={`${color} mx-auto mb-2`} aria-hidden="true" />
                <div className="font-display text-2xl md:text-3xl font-bold text-pak-navy tabular-nums">{value}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle">14 topics covering Pakistan's national open data catalogue</p>
          </div>
          <Link to="/categories" className="btn-ghost text-sm hidden sm:flex">
            View all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map(cat => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
        <Link to="/categories" className="btn-ghost text-sm flex sm:hidden mt-4 justify-center">
          View all categories <ArrowRight size={15} />
        </Link>
      </section>

      {/* ── FEATURED DATASETS ──────────────────────────────────────────────── */}
      <section className="bg-pak-lightGray py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="section-title">Featured Datasets</h2>
              <p className="section-subtitle">High-value datasets most used by researchers and developers</p>
            </div>
            <Link to="/datasets" className="btn-ghost text-sm hidden sm:flex">
              All datasets <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredDatasets.slice(0, 6).map(ds => (
              <DatasetCard key={ds.id} dataset={ds} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENTLY UPDATED ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="section-title flex items-center gap-2">
              <RefreshCw size={20} className="text-pak-green" />
              Recently Updated
            </h2>
            <p className="section-subtitle">Datasets with the most recent data additions or revisions</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentDatasets.map(ds => (
            <DatasetCard key={ds.id} dataset={ds} compact />
          ))}
        </div>
      </section>

      {/* ── WHY OPEN DATA ──────────────────────────────────────────────────── */}
      <section className="bg-pak-greenPale py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title text-center">Who uses Pakistan Open Data?</h2>
            <p className="section-subtitle text-center">
              Open data drives transparency, innovation, and evidence-based decision making
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-pak-navy mb-2 text-sm">{title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="section-title">Publishing Departments</h2>
            <p className="section-subtitle">Federal and provincial bodies contributing to the open data catalogue</p>
          </div>
          <Link to="/departments" className="btn-ghost text-sm hidden sm:flex">
            All departments <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {departments.slice(0, 6).map(dept => (
            <Link key={dept.id} to={`/departments/${dept.id}`}
              className="card card-inner flex items-center gap-3 group">
              <div className="w-10 h-10 bg-pak-greenPale rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 size={18} className="text-pak-green" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm text-pak-navy group-hover:text-pak-green transition-colors truncate">
                  {dept.name}
                </div>
                <div className="text-xs text-gray-500">{dept.datasetCount} datasets · {dept.type}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── API CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-pak-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Access data programmatically
            </h2>
            <p className="text-gray-400 text-sm max-w-lg">
              Query any dataset via our REST API. Get real-time exchange rates, census data, and health
              statistics in JSON format. No authentication required for public datasets.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link to="/api" className="btn-primary">
              <Zap size={16} /> View API Docs
            </Link>
            <a
              href="https://github.com/wishshery/pakistan-open-data-portal"
              target="_blank" rel="noreferrer"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
