import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "@/components/contact-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative">
      <div className="absolute inset-0 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 2px, transparent 0)`,
             backgroundSize: '24px 24px',
             zIndex: 0
           }} 
      />
      <motion.div
        className="text-center px-4 max-w-3xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-center items-center gap-3 mb-12">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <rect x="2" y="2" width="36" height="36" rx="8" fill="currentColor"/>
              <circle cx="20" cy="20" r="8" fill="white"/>
            </svg>
            <span className="text-4xl font-black">boola</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold mb-6 tracking-tight leading-tight"
        >
          AI-Powered Market Intelligence
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl text-muted-foreground mb-12"
        >
          Insights at the Speed of Thought. Launching Soon.
        </motion.p>

        <div className="space-y-4">
          <Button
            size="lg"
            className="text-base font-medium px-8 py-6 transition-all duration-300 hover:scale-105 bg-foreground text-background hover:bg-foreground/90"
            onClick={() => setIsModalOpen(true)}
          >
            Sign up for waitlist
          </Button>

          <div>
            <a
              href="mailto:jaryd.raizon@yale.edu"
              className="inline-block mt-4 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              or get in touch
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="fixed bottom-0 left-0 right-0 text-center text-sm text-muted-foreground py-6"
      >
        built with love by{" "}
        <a 
          href="https://www.linkedin.com/in/jarydraizon/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground hover:underline"
        >
          Jaryd Raizon
        </a>
      </motion.div>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}