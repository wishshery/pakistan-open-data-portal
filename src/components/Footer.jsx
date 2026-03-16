import { Link } from 'react-router-dom';
import { Github, ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pak-navy text-gray-300 mt-20">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-pak-green rounded flex items-center justify-center text-white text-sm">☪</div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm">Pakistan Open Data</div>
              <div className="text-pak-greenLight text-xs">data.gov.pk</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed">
            An official initiative to publish and promote open government data for transparency,
            research, and digital government modernisation.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://github.com/your-org/pakistan-open-data-portal" target="_blank" rel="noreferrer"
               className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="mailto:opendata@pakistan.gov.pk"
               className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-xs">
            {[
              ['Home',        '/'],
              ['Categories',  '/categories'],
              ['All Datasets','/datasets'],
              ['Departments', '/departments'],
              ['API Access',  '/api'],
              ['About',       '/about'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-pak-greenLight transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Data sources */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Key Publishers</h4>
          <ul className="space-y-2 text-xs">
            {[
              ['Pakistan Bureau of Statistics', 'https://pbs.gov.pk'],
              ['State Bank of Pakistan',        'https://sbp.org.pk'],
              ['Ministry of Finance',           'https://finance.gov.pk'],
              ['Election Commission',           'https://ecp.gov.pk'],
              ['NHSRC Health Services',         'https://nhsrc.gov.pk'],
              ['Higher Education Commission',   'https://hec.gov.pk'],
            ].map(([name, url]) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer"
                   className="hover:text-pak-greenLight transition-colors flex items-center gap-1">
                  {name} <ExternalLink size={10} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Legal & Policy</h4>
          <ul className="space-y-2 text-xs">
            {[
              ['Open Data Licence',     '/licence'],
              ['Privacy Policy',        '/privacy'],
              ['Accessibility',         '/accessibility'],
              ['Data Quality Policy',   '/data-quality'],
              ['Terms of Use',          '/terms'],
              ['API Documentation',     '/api'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-pak-greenLight transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 text-xs bg-pak-greenDark/50 rounded-lg p-3 leading-relaxed">
            All datasets published under the<br />
            <span className="text-pak-greenLight font-medium">Open Government Data Licence – Pakistan v1.0</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Government of Pakistan · Ministry of IT &amp; Telecom · National Information Technology Board</span>
          <span className="flex items-center gap-1">
            Built on&nbsp;
            <a href="https://github.com/your-org/pakistan-open-data-portal" target="_blank" rel="noreferrer"
               className="text-gray-400 hover:text-white">open source</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
