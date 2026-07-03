import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import { EquipmentDetailPage } from "./pages/EquipmentDetailPage";
import { EquipmentPage } from "./pages/EquipmentPage";
import { HomePage } from "./pages/HomePage";
import { HyperbaricPage } from "./pages/HyperbaricPage";
import { LocationDetailPage } from "./pages/LocationDetailPage";
import { LocationsPage } from "./pages/LocationsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicesPage } from "./pages/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="servicios/:slug" element={<ServiceDetailPage />} />
        <Route path="camara-hiperbarica" element={<HyperbaricPage />} />
        <Route path="equipos" element={<EquipmentPage />} />
        <Route path="equipos/:slug" element={<EquipmentDetailPage />} />
        <Route path="sedes" element={<LocationsPage />} />
        <Route path="sedes/:slug" element={<LocationDetailPage />} />
        <Route path="doctores" element={<DoctorsPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
