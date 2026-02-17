
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function SafetyFAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display uppercase text-white mb-4">
            Safety & <span className="text-slate-500">Intel</span>
          </h2>
          <p className="text-muted-foreground">Everything you need to know before you enter the crash zone.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-border bg-card px-6 rounded-lg data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline">
              Is ear protection required?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Highly recommended. Titan Crush events are extremely loud (100+ dB). We sell branded ear protection at the venue, or you can bring your own.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-border bg-card px-6 rounded-lg data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline">
              What creates the smoke?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              The smoke is a mix of exhaust from our 1,500 HP methanol-fueled engines and dirt dust. It's part of the show! If you have respiratory sensitivity, please take precautions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-border bg-card px-6 rounded-lg data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline">
              Can I bring a camera?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes! Personal cameras are allowed. However, professional equipment (detachable lenses over 6 inches) and tripods are not permitted without a media pass.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-border bg-card px-6 rounded-lg data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline">
              Age limits for tickets?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              All ages are welcome! Children under 2 years old are admitted free provided they sit on a parent's lap. All children 2 and older require a ticket.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default SafetyFAQ;
