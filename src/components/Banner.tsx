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
  <div className="mx-10 flex shrink-0 flex-col items-center justify-center">
    <span className={`whitespace-nowrap text-xl font-black tracking-normal md:text-2xl ${
      isDarkMode ? "text-[#f6f3ec]/18" : "text-[#101113]/18"
    }`}>
      {company.name}
    </span>
    {company.subtitle && (
      <span className={`text-[8px] md:text-[10px] tracking-widest uppercase whitespace-nowrap ${
        isDarkMode ? "text-[#f6f3ec]/16" : "text-[#101113]/16"
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
    <div className={`overflow-hidden py-8 transition-colors duration-300 ${
      isDarkMode ? "bg-[#101113]" : "bg-[#f6f3ec]"
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
