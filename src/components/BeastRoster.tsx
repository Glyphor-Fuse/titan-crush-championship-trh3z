
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, Trophy, ShieldAlert, Crosshair } from 'lucide-react';

interface Beast {
  id: string;
  name: string;
  driver: string;
  hp: string;
  weight: string;
  image: string;
  desc: string;
}

const beasts: Beast[] = [
  {
    id: "1",
    name: "GRAVE DIGGER",
    driver: "Tyler Menninga",
    hp: "1,500 HP",
    weight: "12,000 LBS",
    image: "/images/truck-1.png",
    desc: " The legend. The icon. A graveyard smash."
  },
  {
    id: "2",
    name: "MAX-D",
    driver: "Tom Meents",
    hp: "1,475 HP",
    weight: "11,500 LBS",
    image: "/images/truck-2.png",
    desc: "Maximum destruction, minimum mercy."
  },
  {
    id: "3",
    name: "EL TORO LOCO",
    driver: "Armando Castro",
    hp: "1,600 HP",
    weight: "12,200 LBS",
    image: "/images/truck-3.png",
    desc: "The raging bull that takes no prisoners."
  },
  {
    id: "4",
    name: "MEGALODON",
    driver: "Cory Rummell",
    hp: "1,550 HP",
    weight: "11,800 LBS",
    image: "/images/truck-4.png",
    desc: "The apex predator of the dirt track."
  }
];

export function BeastRoster() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Background textural elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ccff00 0, #ccff00 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-display uppercase tracking-tighter text-white mb-4">
            Meet the <span className="text-primary">Beasts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            12,000 pounds of steel, fury, and adrenaline. Hover to inspect the specs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beasts.map((beast) => (
            <motion.div
              key={beast.id}
              className="relative group h-[400px] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-card border border-border/50 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_-5px_rgba(204,255,0,0.3)]">
                {/* Image Background */}
                <div className="absolute inset-0">
                   <img 
                    src={beast.image} 
                    alt={beast.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-3xl font-display text-white italic -skew-x-12 mb-1 group-hover:text-primary transition-colors">
                    {beast.name}
                  </h3>
                  <p className="text-white/80 font-bold mb-4 flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-primary" /> {beast.driver}
                  </p>

                  {/* Hidden Specs revealing on hover */}
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-4 mb-4 border-t border-white/10 pt-4">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider block">Power</span>
                        <span className="text-lg font-display text-white">{beast.hp}</span>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider block">Weight</span>
                        <span className="text-lg font-display text-white">{beast.weight}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {beast.desc}
                    </p>
                  </div>
                  
                  <button className="mt-4 w-full py-2 bg-primary/10 border border-primary/50 text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-black transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeastRoster;
