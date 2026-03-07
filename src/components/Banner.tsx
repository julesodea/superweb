import React from "react";

const companies = [
  { name: "OI&LAKE", subtitle: "SPIRIT" },
  { name: "Z3", subtitle: null },
  { name: "ISOLATECH", subtitle: "MAÎTRISEZ VOS DÉPENSES ÉNERGÉTIQUES" },
  { name: "LÜM HOME", subtitle: null },
  { name: "POLYURETHANE", subtitle: "SPRAY PERFORMANCE" },
  { name: "meubleprive.fr", subtitle: null },
];

const LogoBanner: React.FC = () => {
  return (
    <div className="bg-neutral-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-12 flex-wrap">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-xl md:text-2xl font-bold text-gray-300 tracking-wide whitespace-nowrap">
                {company.name}
              </span>
              {company.subtitle && (
                <span className="text-[8px] md:text-[10px] text-gray-300 tracking-widest uppercase">
                  {company.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
