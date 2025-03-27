"use client";

import { useEffect, forwardRef, useImperativeHandle } from "react";
import confetti, { Options as ConfettiOptions } from "canvas-confetti";

export type ConfettiClientOnlyProps = {
  triggerOnMount?: boolean;
  config?: ConfettiOptions;
  repeat?: boolean;
  interval?: number; // ms
};

export type ConfettiHandle = {
  fire: (customConfig?: ConfettiOptions) => void;
};

export const ConfettiClientOnly = forwardRef<
  ConfettiHandle,
  ConfettiClientOnlyProps
>(
  (
    { triggerOnMount = true, config = {}, repeat = false, interval = 3000 },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      fire: (customConfig?: ConfettiOptions) => {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          ...config,
          ...customConfig,
        });
      },
    }));

    useEffect(() => {
      if (triggerOnMount) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          ...config,
        });
      }

      if (repeat) {
        const timer = setInterval(() => {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            ...config,
          });
        }, interval);
        return () => clearInterval(timer);
      }
    }, [triggerOnMount, repeat, interval, config]);

    return null;
  }
);
