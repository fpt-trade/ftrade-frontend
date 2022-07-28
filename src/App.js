import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper flex flex-column h-screen primary-background p-3">
      {/* Loading indicator */}
      <Header />
      <div className="main-background border-round-lg p-4 my-3 flex flex-grow-1">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
