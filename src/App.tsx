
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { BeastRoster } from "@/components/BeastRoster";
import { PitParty } from "@/components/PitParty";
import { Sponsors } from "@/components/Sponsors";
import { Highlights } from "@/components/Highlights";
import { SafetyFAQ } from "@/components/SafetyFAQ";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
          <Hero />
          <Sponsors />
          <BeastRoster />
          <PitParty />
          <Highlights />
          <SafetyFAQ />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
