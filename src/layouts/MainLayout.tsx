import { Outlet } from "react-router-dom";
import { FloatingWhatsApp } from "../components/layout/FloatingWhatsApp";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
