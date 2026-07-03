import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contactConfig } from "../../config/contact";
import { navigationItems } from "../../data/navigation";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { ButtonLink } from "../common/ButtonLink";
import { siteImages } from "../../config/images";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const whatsappUrl = createWhatsAppUrl(contactConfig.whatsappNumber, "Hola, deseo recibir mas informacion de PulmOx.");

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/92 backdrop-blur">
      <nav className="shell flex min-h-16 items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navegacion principal">
        <Link to="/" className="flex min-h-11 items-center gap-2 font-semibold">
          <img src={siteImages.logo} alt="PulmOx" className="h-9" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-brand-mist text-brand-primary" : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappUrl}>
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-full border border-brand-line bg-white lg:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-brand-line bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="grid gap-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `min-h-11 rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive ? "bg-brand-mist text-brand-primary" : "text-slate-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <ButtonLink href={whatsappUrl} className="mt-3 w-full">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}
