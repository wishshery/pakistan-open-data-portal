import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header      from './components/Header';
import Footer      from './components/Footer';
import Home        from './pages/Home';
import Categories  from './pages/Categories';
import CategoryDetail  from './pages/CategoryDetail';
import Datasets    from './pages/Datasets';
import DatasetDetail   from './pages/DatasetDetail';
import Search      from './pages/Search';
import Departments from './pages/Departments';
import About       from './pages/About';
import ApiDocs     from './pages/ApiDocs';

// Simple catch-all 404
function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-4">🏛️</div>
      <h1 className="text-3xl font-extrabold text-pak-navy mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="btn-primary inline-flex">Go to Homepage</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/"                          element={<Home />}         />
            <Route path="/categories"                element={<Categories />}   />
            <Route path="/categories/:slug"          element={<CategoryDetail />} />
            <Route path="/datasets"                  element={<Datasets />}     />
            <Route path="/datasets/:slug"            element={<DatasetDetail />}/>
            <Route path="/search"                    element={<Search />}       />
            <Route path="/departments"               element={<Departments />}  />
            <Route path="/departments/:id"           element={<Departments />}  />
            <Route path="/about"                     element={<About />}        />
            <Route path="/api"                       element={<ApiDocs />}      />
            <Route path="*"                          element={<NotFound />}     />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
