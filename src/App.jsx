import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { WatchLaterProvider } from './context/WatchLaterContext';
import Login from './pages/Login';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import WatchLater from './pages/WatchLater';
import NotFound from './pages/NotFound';
import Header from './components/Header';

// Layout wrapper to render the Header only for dashboard pages
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <WatchLaterProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/movies/:id" element={
            <ProtectedRoute>
              <Layout>
                <MovieDetails />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/watch-later" element={
            <ProtectedRoute>
              <Layout>
                <WatchLater />
              </Layout>
            </ProtectedRoute>
          } />

          {/* Not Found Routes (no Header) */}
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </WatchLaterProvider>
  );
}

export default App;
