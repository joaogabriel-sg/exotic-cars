import { Routes, Route, Navigate } from 'react-router-dom';

import { CarDetails, CarsOverview } from '../pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CarsOverview />} />
      <Route path="car/:carId" element={<CarDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
