"use client";

import {
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Tooltip,
} from "@/components/ui/tooltip";
import { ReactNode, useState } from "react";
import { AnimatePresence } from "motion/react";

import { usePresence } from "motion/react";

const TooltipDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <button>Hover!</button>
        </TooltipTrigger>
        <AnimatePresence>
          {isOpen && (
            <SuspendingTooltipContent>
              {isOpen ? <p>OPEN</p> : <p>CLOSED</p>}
            </SuspendingTooltipContent>
          )}
        </AnimatePresence>
      </Tooltip>
    </TooltipProvider>
  );
};

function SuspendingTooltipContent({ children }: { children: ReactNode }) {
  const [isPresent, safeToRemove] = usePresence();

  return (
    <TooltipContent
      key={"key"}
      onAnimationEnd={(e) => {
        if (e.currentTarget.dataset["state"] === "closed" && !isPresent)
          safeToRemove();
      }}
    >
      {children}
    </TooltipContent>
  );
}

export default function Page() {
  return <TooltipDemo />;
}
