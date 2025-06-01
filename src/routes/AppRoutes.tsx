import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ExplorePage from '../pages/ExplorePage';
import CreatePage from '../pages/CreatePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="*" element={<Navigate to="/\" replace />} />
    </Routes>
  );
};

export default AppRoutes;