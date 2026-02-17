
import React from 'react';
import { Play } from 'lucide-react';

// Reusing assets from roster to save on image generation budget
const highlights = [
  { id: 1, type: "video", src: "/images/truck-1.png", title: "Freestyle Frenzy" },
  { id: 2, type: "image", src: "/images/truck-2.png", title: "Donut Competition" },
  { id: 3, type: "image", src: "/images/truck-3.png", title: "Big Air Champ" },
  { id: 4, type: "video", src: "/images/truck-4.png", title: "Two-Wheel Challenge" },
];

export function Highlights() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="text-4xl md:text-5xl font-display uppercase text-white mb-2">
                Action <span className="text-primary">Highlights</span>
              </h2>
              <p className="text-muted-foreground">Witness the impossible.</p>
           </div>
           <a href="#" className="hidden md:block text-primary hover:text-white font-bold uppercase tracking-wider transition-colors">
             View Full Gallery →
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[400px]">
          {highlights.map((item, i) => (
            <div 
              key={item.id}
              className={`relative group rounded-xl overflow-hidden cursor-pointer border border-border/50 ${i === 0 ? 'md:col-span-2 md:row-span-2 h-full' : 'h-full'}`}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <Play className="ml-1 w-8 h-8 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold uppercase tracking-wider text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
