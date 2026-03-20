import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import PublicSite from "./components/PublicSite";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardHome from "./pages/admin/DashboardHome";
import HeroEditor from "./pages/admin/HeroEditor";
import AboutEditor from "./pages/admin/AboutEditor";
import ProfileEditor from "./pages/admin/ProfileEditor";
import ServicesEditor from "./pages/admin/ServicesEditor";
import GalleryEditor from "./pages/admin/GalleryEditor";
import FaqEditor from "./pages/admin/FaqEditor";
import InstagramEditor from "./pages/admin/InstagramEditor";
import ContactEditor from "./pages/admin/ContactEditor";
import InquiriesPage from "./pages/admin/InquiriesPage";

function AuthGuard({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf8]">
        <div className="text-center">
          <div className="font-script text-4xl text-[#e7a8bb]">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicSite />} />

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <AuthGuard>
            <AdminDashboard />
          </AuthGuard>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="hero" element={<HeroEditor />} />
        <Route path="about" element={<AboutEditor />} />
        <Route path="profile" element={<ProfileEditor />} />
        <Route path="services/:category" element={<ServicesEditor />} />
        <Route path="gallery" element={<GalleryEditor />} />
        <Route path="faqs" element={<FaqEditor />} />
        <Route path="instagram" element={<InstagramEditor />} />
        <Route path="contact" element={<ContactEditor />} />
        <Route path="inquiries" element={<InquiriesPage />} />
      </Route>
    </Routes>
  );
}
