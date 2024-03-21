import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, AppLayout, AuthLayout, Partners } from "../components";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout children={<Home />} />}>
          <Route path="home" element={<AppLayout children={<Home />} />} />
        </Route>
        <Route path="partner" element={<AppLayout children={<Partners />} />} />
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
