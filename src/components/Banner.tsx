import React from "react";

const companies = [
  { name: "OI&LAKE", subtitle: "SPIRIT" },
  { name: "Z3", subtitle: null },
  { name: "ISOLATECH", subtitle: "MAÎTRISEZ VOS DÉPENSES ÉNERGÉTIQUES" },
  { name: "LÜM HOME", subtitle: null },
  { name: "POLYURETHANE", subtitle: "SPRAY PERFORMANCE" },
  { name: "meubleprive.fr", subtitle: null },
];

const CompanyItem = ({ company, isDarkMode }: { company: typeof companies[number]; isDarkMode?: boolean }) => (
  <div className="flex flex-col items-center justify-center mx-10 shrink-0">
    <span className={`text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap ${
      isDarkMode ? "text-slate-700" : "text-gray-300"
    }`}>
      {company.name}
    </span>
    {company.subtitle && (
      <span className={`text-[8px] md:text-[10px] tracking-widest uppercase whitespace-nowrap ${
        isDarkMode ? "text-slate-700" : "text-gray-300"
      }`}>
        {company.subtitle}
      </span>
    )}
  </div>
);

const LogoBanner: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode }) => {
  // Duplicate items for seamless infinite loop
  const items = [...companies, ...companies];

  return (
    <div className={`py-8 overflow-hidden transition-colors duration-300 ${
      isDarkMode ? "bg-neutral-950" : "bg-neutral-50"
    }`}>
      <div className="flex animate-marquee">
        {items.map((company, index) => (
          <CompanyItem key={index} company={company} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
