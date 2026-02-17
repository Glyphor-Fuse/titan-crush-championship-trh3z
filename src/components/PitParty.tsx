
import React from 'react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PitParty() {
  return (
    <section className="py-20 bg-muted relative">
       {/* Diagonal slash background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-primary/5 rotate-12 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-primary/30 group">
                <img 
                  src="/images/pit-party.png" 
                  alt="Pit Party Experience" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                   <Clock className="text-primary w-6 h-6" />
                   <span className="text-white font-display text-xl">2:30 PM - 5:30 PM</span>
                </div>
                <p className="text-sm text-muted-foreground">Early access available for VIP pass holders.</p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-display uppercase text-white mb-6">
              The <span className="text-primary decoration-wavy underline decoration-primary/30">Pit Party</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body mb-8">
              Get up close to the 12,000-pound mechanical beasts. Meet the drivers, get autographs, and walk the track where the destruction happens.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Trackside Access</h4>
                  <p className="text-muted-foreground">Walk the actual competition dirt track before the show.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Star className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Driver Meet & Greet</h4>
                  <p className="text-muted-foreground">Photos and autographs with your favorite superstar drivers.</p>
                </div>
              </div>
            </div>

            <Button className="bg-white text-black hover:bg-primary hover:text-black font-display uppercase tracking-wider text-lg px-8 py-6">
              Add Pit Pass - $15
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PitParty;
