import { Navigate, Route, Routes } from "react-router";
import AdminLayout from "../layouts/AdminLayout";
import BannerPage from "../pages/BannerPage";
import BinPage from "../pages/BinPage";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="banner" />} />
        <Route path="banner" element={<BannerPage />} />
        <Route path="bids" element={<BinPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
