import { Link } from 'react-router-dom';
import { Shield, BookOpen, Zap, Users, TrendingUp, Globe, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Transparency',
    color: 'bg-emerald-100 text-emerald-700',
    points: [
      'Publishing government financial data, budget allocations, and procurement records',
      'Making electoral data, public service delivery metrics, and audit reports accessible',
      'Enabling citizens to hold government accountable through open information',
      'Meeting Pakistan\'s international commitments to the Open Government Partnership',
    ],
  },
  {
    icon: BookOpen,
    title: 'Research & Academia',
    color: 'bg-blue-100 text-blue-700',
    points: [
      'Providing anonymised microdata from national surveys and censuses',
      'Supporting evidence-based policy research at HEC-recognised universities',
      'Facilitating longitudinal research using consistently updated datasets',
      'Enabling cross-sector analysis combining health, education, and economic data',
    ],
  },
  {
    icon: Zap,
    title: 'Startups & Developers',
    color: 'bg-purple-100 text-purple-700',
    points: [
      'REST APIs with JSON and CSV output for all key datasets',
      'No authentication required for public datasets',
      'Standardised schemas enabling integration with third-party applications',
      'Sandbox environment for testing data pipelines before production',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Policy Making',
    color: 'bg-amber-100 text-amber-700',
    points: [
      'Cross-departmental data integration for whole-of-government analysis',
      'Real-time economic indicators to support monetary and fiscal decisions',
      'Provincial-level data for NFC Award calculations and resource allocation',
      'SDG tracking data to monitor progress against national targets',
    ],
  },
  {
    icon: Globe,
    title: 'Digital Government',
    color: 'bg-teal-100 text-teal-700',
    points: [
      'Implementing international open data standards (DCAT, CSVW, JSON-LD)',
      'Building a national data exchange layer across government agencies',
      'Supporting Pakistan\'s Digital Pakistan Vision 2025 objectives',
      'Reducing duplication across departments through shared data services',
    ],
  },
];

const timeline = [
  { year: '2016', event: 'data.gov.pk launched as first version of Pakistan Open Data Portal' },
  { year: '2017', event: 'Pakistan\'s Right to Information Act strengthens legal basis for open data' },
  { year: '2020', event: 'National Data Infrastructure Policy approved by Cabinet' },
  { year: '2022', event: 'PDHS 2022 microdata released under open licence' },
  { year: '2023', event: 'Pakistan Population Census 2023 data published openly' },
  { year: '2024', event: 'General Election 2024 results published in machine-readable format' },
  { year: '2025', event: 'Modern Pakistan Open Data Portal launched with REST API and automated updates' },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <span>About</span>
      </nav>

      {/* Vision */}
      <div className="max-w-3xl mb-14">
        <h1 className="page-title mb-4">About Pakistan Open Data</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          The Pakistan Open Data Portal is the national single point of access for open government datasets
          published by Pakistan's federal ministries, provincial governments, regulatory authorities, and
          public institutions.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to make Pakistani government data free, accessible, and reusable by everyone — citizens,
          researchers, journalists, startups, and policymakers — to drive transparency, innovation, and
          evidence-based governance.
        </p>
      </div>

      {/* How it supports key pillars */}
      <section className="mb-14">
        <h2 className="section-title mb-8">How this platform supports Pakistan</h2>
        <div className="space-y-6">
          {pillars.map(({ icon: Icon, title, color, points }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-pak-navy text-base">{title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {points.map(p => (
                  <div key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-pak-green flex-shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-14">
        <h2 className="section-title mb-6">Open Data in Pakistan – Timeline</h2>
        <div className="relative border-l-2 border-pak-green/30 pl-6 space-y-5">
          {timeline.map(({ year, event }) => (
            <div key={year} className="relative">
              <div className="absolute -left-[1.65rem] top-1 w-4 h-4 bg-pak-green rounded-full border-2 border-white shadow-sm" />
              <div className="flex items-start gap-3">
                <span className="font-extrabold text-pak-green text-sm flex-shrink-0 w-10">{year}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical architecture */}
      <section className="mb-14">
        <h2 className="section-title mb-6">Technical Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Frontend', tech: 'React + Vite + Tailwind CSS', desc: 'Modern SPA built with React 18, Vite build toolchain, and Tailwind CSS utility framework.' },
            { title: 'Data Layer', tech: 'Static JSON + REST API', desc: 'Dataset metadata stored as JSON files. API layer using edge functions for dynamic queries.' },
            { title: 'Search', tech: 'Client-side search', desc: 'Fast client-side full-text search across titles, descriptions, tags, and publishers.' },
            { title: 'Hosting', tech: 'GitHub Pages / Vercel', desc: 'Static site deployment with CDN distribution and automatic SSL via GitHub Pages or Vercel.' },
            { title: 'CI/CD', tech: 'GitHub Actions', desc: 'Automated build, test, and deploy pipeline triggered on every push to main branch.' },
            { title: 'Data Sync', tech: 'Scheduled GitHub Actions', desc: 'Daily automated job fetches updates from data.gov.pk and rebuilds the dataset catalogue.' },
          ].map(({ title, tech, desc }) => (
            <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-pak-navy text-sm mb-1">{title}</h3>
              <div className="tag-green mb-2">{tech}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data governance */}
      <section className="mb-14">
        <h2 className="section-title mb-4">Data Governance</h2>
        <div className="prose prose-sm max-w-3xl text-gray-700 space-y-3">
          <p>
            All datasets published on this portal are subject to the <strong>Open Government Data Licence – Pakistan v1.0</strong>,
            which permits free use, adaptation, and redistribution with attribution.
          </p>
          <p>
            Publishing agencies are responsible for the accuracy and timeliness of their datasets.
            The National Information Technology Board (NITB) operates the portal infrastructure and coordinates
            with federal ministries through the Data Publishing Working Group.
          </p>
          <p>
            Quality standards follow the 5-Star Open Data model. Datasets are reviewed for completeness,
            consistency, and machine-readability before publication. Update frequencies are monitored
            and publishing agencies are notified when datasets become stale.
          </p>
        </div>
      </section>

      {/* Contact */}
      <div className="bg-pak-green rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-2">Get in touch</h2>
        <p className="text-white/80 text-sm max-w-md mx-auto mb-5">
          For dataset requests, partnership enquiries, or technical support, reach out to the Pakistan Open Data team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:opendata@pakistan.gov.pk" className="bg-white text-pak-green font-bold px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            opendata@pakistan.gov.pk
          </a>
          <a href="https://github.com/your-org/pakistan-open-data-portal" target="_blank" rel="noreferrer"
             className="border-2 border-white text-white font-bold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
