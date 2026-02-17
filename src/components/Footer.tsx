
import React from 'react';
import { ShieldCheck, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-display text-white uppercase italic mb-6">
              Titan <span className="text-primary">Crush</span>
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              The world's premier monster truck championship. Experience the destruction live.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                 <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                 <Twitter size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                 <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                 <Youtube size={18} />
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Event Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Schedule & Tickets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Venue Directions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pit Party Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Championship</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Standings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Driver Profiles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hall of Fame</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase tracking-wider mb-6">Stay Updated</h4>
             <p className="text-xs text-slate-500 mb-4">Join the crush club for exclusive presales.</p>
             <div className="flex gap-2">
               <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-primary"
               />
               <button className="bg-primary text-black font-bold uppercase text-xs px-3 py-2 rounded hover:bg-white transition-colors">
                 Join
               </button>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2024 Titan Crush Championship. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
