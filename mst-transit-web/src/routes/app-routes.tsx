import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, AppLayout, AuthLayout } from "../components";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout children={<Home />} />}>
          <Route path="home" element={<AppLayout children={<Home />} />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
