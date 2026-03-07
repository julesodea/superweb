import React from "react";

const companies = [
  { name: "OI&LAKE", subtitle: "SPIRIT" },
  { name: "Z3", subtitle: null },
  { name: "ISOLATECH", subtitle: "MAÎTRISEZ VOS DÉPENSES ÉNERGÉTIQUES" },
  { name: "LÜM HOME", subtitle: null },
  { name: "POLYURETHANE", subtitle: "SPRAY PERFORMANCE" },
  { name: "meubleprive.fr", subtitle: null },
];

const CompanyItem = ({ company }: { company: typeof companies[number] }) => (
  <div className="flex flex-col items-center justify-center mx-10 shrink-0">
    <span className="text-xl md:text-2xl font-bold text-gray-300 tracking-wide whitespace-nowrap">
      {company.name}
    </span>
    {company.subtitle && (
      <span className="text-[8px] md:text-[10px] text-gray-300 tracking-widest uppercase whitespace-nowrap">
        {company.subtitle}
      </span>
    )}
  </div>
);

const LogoBanner: React.FC = () => {
  // Duplicate items for seamless infinite loop
  const items = [...companies, ...companies];

  return (
    <div className="bg-neutral-50 py-8 overflow-hidden">
      <div className="flex animate-marquee">
        {items.map((company, index) => (
          <CompanyItem key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
