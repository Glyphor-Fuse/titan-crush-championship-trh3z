
import React from 'react';

const sponsors = [
  "NITRO SHOCK", "MUD KING", "GEARHEAD", "TURBO ENERGY", "IRON CLAD", "APEX TIRES", "V-TWIN"
];

export function Sponsors() {
  return (
    <section className="py-12 bg-black border-y border-white/10 overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Double the list for infinite scroll */}
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
            <span key={idx} className="text-3xl md:text-5xl font-display text-white/20 uppercase tracking-widest hover:text-primary/80 transition-colors cursor-default select-none">
              {sponsor}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center" aria-hidden="true">
           {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
            <span key={idx} className="text-3xl md:text-5xl font-display text-white/20 uppercase tracking-widest hover:text-primary/80 transition-colors cursor-default select-none">
              {sponsor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
