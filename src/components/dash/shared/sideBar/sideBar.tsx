"use client";
import "@/components/styles/sideBar.css";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu } from "./menu/Menu";
function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default function SideBar({
  onToggle,
}: {
  onToggle?: (open: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const scope = useMenuAnimation(isOpen);

  useEffect(() => {
    // Check if the device is desktop or mobile
    const checkDeviceSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // or whatever breakpoint you need for desktop
    };

    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    onToggle?.(isOpen);
  }, [isOpen, isDesktop]);

  return (
    <div ref={scope} className={`sidebar ${isOpen ? "open" : ""} `}>
      <Menu />
    </div>
  );
}
