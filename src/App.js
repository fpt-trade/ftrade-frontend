import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RouteGuard from './components/RouteGuard/RouteGuard';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/slices/user';

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      {/* Loading indicator */}
      <div
        className={`app-wrapper flex flex-column h-screen primary-background ${
          user.isLogin && 'p-3'
        }`}
      >
        <>{user.isLogin && <Header />}</>

        <div
          className={`main-background border-round-lg flex flex-grow-1 ${
            user.isLogin && 'p-4 my-3'
          }`}
        >
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <React.Suspense>
                      {route.guard ? (
                        <RouteGuard>{<route.element />}</RouteGuard>
                      ) : (
                        <route.element />
                      )}
                    </React.Suspense>
                  }
                />
              );
            })}
          </Routes>
        </div>

        <>{user.isLogin && <Footer />}</>
      </div>
    </>
  );
}

export default App;
