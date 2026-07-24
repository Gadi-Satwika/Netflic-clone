import React, { createContext, useState, useEffect, useContext } from 'react';

const WatchLaterContext = createContext(null);

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState(() => {
    try {
      const stored = localStorage.getItem('nxtflix_watch_later');
      if (stored) {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('nxtflix_watch_later', JSON.stringify(watchLater));
  }, [watchLater]);

  const isInWatchLater = (id) => {
    if (id === undefined || id === null) return false;
    return watchLater.some(movie => movie.id === Number(id));
  };

  const toggleWatchLater = (movie) => {
    if (!movie || !movie.id) return;
    setWatchLater(prev => {
      const isAlreadyIn = prev.some(item => item.id === movie.id);
      if (isAlreadyIn) {
        return prev.filter(item => item.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  return (
    <WatchLaterContext.Provider value={{ watchLater, isInWatchLater, toggleWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => {
  const context = useContext(WatchLaterContext);
  if (!context) {
    throw new Error('useWatchLater must be used within a WatchLaterProvider');
  }
  return context;
};
