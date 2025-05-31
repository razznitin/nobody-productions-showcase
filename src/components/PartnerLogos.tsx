
import React from 'react';

const PartnerLogos = () => {
  const partners = [
    { name: "StreamFlix", logo: "SF" },
    { name: "Global Entertainment", logo: "GE" },
    { name: "Digital Studios", logo: "DS" },
    { name: "Prime Content", logo: "PC" },
    { name: "Viewing Network", logo: "VN" },
    { name: "Entertainment Plus", logo: "E+" },
    { name: "Media Group", logo: "MG" },
    { name: "Content Hub", logo: "CH" },
    { name: "Stream Central", logo: "SC" },
    { name: "Watch Network", logo: "WN" }
  ];

  return (
    <section className="py-16 bg-nobody-darker border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-2xl font-cinematic font-semibold text-center text-white mb-12">
          Trusted by Industry Leaders
        </h3>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 group cursor-pointer"
                title={partner.name}
              >
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                  <span className="text-xl font-bold text-white opacity-60 group-hover:opacity-100">
                    {partner.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
