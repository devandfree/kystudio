import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface CustomCursorProps {
  theme: "dark" | "light";
}

export default function CustomCursor({ theme }: CustomCursorProps) {
  const [mounted, setMounted] = useState(false);
  const [hoverState, setHoverState] = useState<"none" | "interactive" | "text">("none");
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw position coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for elastic outer ring delay
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only apply on devices with a fine pointer (mouse/stylus)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setMounted(true);
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Detect if hover is inside a text input or text-editing area
      const isTextInput = target.closest(
        'input[type="text"], input[type="email"], input[type="search"], input[type="tel"], textarea, [contenteditable="true"]'
      );
      if (isTextInput) {
        setHoverState("text");
        return;
      }

      // Detect interactive elements (links, buttons, custom portfolio cards, estimators, header toggles)
      const isInteractive = target.closest(
        'a, button, select, input[type="submit"], input[type="button"], [role="button"], .cursor-pointer, [data-interactive="true"]'
      );
      if (isInteractive) {
        setHoverState("interactive");
      } else {
        setHoverState("none");
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer Ring Wrapper (with dynamic spring physics for the elite catch-up lag effect) */}
      <motion.div
        className="fixed pointer-events-none z-[9999] left-0 top-0"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <motion.div
          className="absolute rounded-full border pointer-events-none"
          animate={{
            width: hoverState === "interactive" ? 68 : hoverState === "text" ? 0 : 36,
            height: hoverState === "interactive" ? 68 : hoverState === "text" ? 0 : 36,
            left: hoverState === "interactive" ? -34 : hoverState === "text" ? 0 : -18,
            top: hoverState === "interactive" ? -34 : hoverState === "text" ? 0 : -18,
            backgroundColor: hoverState === "interactive" ? "rgba(220, 38, 38, 0.08)" : "rgba(220, 38, 38, 0)",
            borderColor: hoverState === "interactive" 
              ? "rgba(220, 38, 38, 0.8)" 
              : theme === "light" 
                ? "rgba(220, 38, 38, 0.35)" 
                : "rgba(220, 38, 38, 0.45)",
            scale: isClicked ? 0.85 : 1,
            opacity: isVisible && hoverState !== "text" ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      </motion.div>

      {/* Inner Dot / Caret Wrapper (follows mouse instantly for zero input-latency feel) */}
      <motion.div
        className="fixed pointer-events-none z-[10000] left-0 top-0"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            width: hoverState === "text" ? 2 : hoverState === "interactive" ? 0 : 8,
            height: hoverState === "text" ? 18 : hoverState === "interactive" ? 0 : 8,
            borderRadius: hoverState === "text" ? "1px" : "9999px",
            left: hoverState === "text" ? -1 : hoverState === "interactive" ? 0 : -4,
            top: hoverState === "text" ? -9 : hoverState === "interactive" ? 0 : -4,
            backgroundColor: hoverState === "text"
              ? (theme === "light" ? "#171717" : "#f5f5f5")
              : "#dc2626",
            scale: isClicked && hoverState !== "text" ? 1.3 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
      </motion.div>
    </>
  );
}
