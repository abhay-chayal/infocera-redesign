import { logoData } from '../../data/logoData';

export const ClientLogoStrip = () => {
  // Combine all logos for the continuous strip
  const allLogos = [
    ...logoData.categories.clients,
    ...logoData.categories.partners,
    ...logoData.categories.compliance
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...allLogos, ...allLogos];

  return (
    <section className="py-12 bg-[#0B1120] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest">
          {logoData.headline}
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Left/Right Fade Masks for Enterprise Apple-like look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap items-center w-max">
          {duplicatedLogos.map((logo, idx) => (
            <div 
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center px-8 md:px-16 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              <span className="text-xl md:text-2xl font-bold font-['Exo',sans-serif] tracking-wider text-white select-none">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Inline styles for the specific marquee keyframes since Tailwind doesn't have it built-in without config updates */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </section>
  );
};
