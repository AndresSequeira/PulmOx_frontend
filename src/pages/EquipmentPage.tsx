import { useMemo, useState } from "react";
import { EquipmentCard } from "../components/common/EquipmentCard";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { equipment } from "../data/equipment";
import { equipmentCategories } from "../data/equipmentCategories";

type Filter = "todos" | "venta" | "alquiler" | string;

export function EquipmentPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("todos");
  const filters = [
    { id: "todos", label: "Todos" },
    { id: "venta", label: "Venta" },
    { id: "alquiler", label: "Alquiler" },
    ...equipmentCategories.map((category) => ({ id: category.id, label: category.name })),
  ];

  const filteredEquipment = useMemo(() => {
    if (activeFilter === "todos") return equipment;
    if (activeFilter === "venta") return equipment.filter((item) => item.availableForSale);
    if (activeFilter === "alquiler") return equipment.filter((item) => item.availableForRent);
    return equipment.filter((item) => item.categoryId === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Seo title="Equipos medicos" description="Catalogo informativo de equipos medicos de PulmOx." />
      <section className="section-pad bg-brand-mist">
        <div className="shell">
          <SectionHeading eyebrow="Catalogo" title="Equipos medicos" description="Catalogo informativo con filtros frontend. No incluye carrito, precios ni pagos." />
          <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold transition ${
                  activeFilter === filter.id ? "bg-brand-primary text-white" : "bg-white text-slate-700"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredEquipment.map((item) => <EquipmentCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
