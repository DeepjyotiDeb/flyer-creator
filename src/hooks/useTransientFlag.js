import { useEffect, useRef, useState } from "react";

/**
 * Tracks a transient "copied" flag that auto-resets after a delay.
 */
export function useTransientFlag(resetMs = 2000) {
  const [flag, setFlag] = useState(false);
  const timerRef = useRef(null);

  const trigger = () => {
    setFlag(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setFlag(false), resetMs);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return [flag, trigger];
}
