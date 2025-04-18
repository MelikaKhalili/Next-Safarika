"use client";
import { useState } from "react";
import Accordion from "./Accordion/Accordion";
import HeaderButtons from "./Header-Buttons/HeaderButtons";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import Search from "./Search/Search";
import TelePhone from "./Telephone/TelePhone";
export default function HeaderSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCart, setIsHoveredCart] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHoveredBtn0, setIsHoveredBtn0] = useState(false);
  const [isHoveredBtn1, setIsHoveredBtn1] = useState(false);
  const [isHoveredBtn2, setIsHoveredBtn2] = useState(false);
  const [isHoverDestination, setIsHoverDestination] = useState<null | Boolean>(
    false
  );
  const [isHoverCategory, setIsHoverCategory] = useState(false);
  const [isHoverAllTours, setIsHoverAllTours] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<
    "destination" | "category" | null | boolean
  >(null);
  const [activeSection, setActiveSection] = useState<
    "destination" | "category" | null
  >(null);
  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-between  fixed z-[99999999] p-4 gap-15 shadow-md w-full">
      <Logo />
      <NavBar
        toggleAccordion={toggleAccordion}
        setIsHoveredBtn0={setIsHoveredBtn0}
        isHoveredBtn0={isHoveredBtn0}
        setIsHoveredBtn1={setIsHoveredBtn1}
        isHoveredBtn1={isHoveredBtn1}
        setIsHoveredBtn2={setIsHoveredBtn2}
        isHoveredBtn2={isHoveredBtn2}
      />

      <Accordion
        activeIndex={activeIndex}
        isHoveredBtn0={isHoveredBtn0}
        setActiveSection={setActiveSection}
        setIsHoverDestination={setIsHoverDestination}
        isHoverDestination={isHoverDestination}
        setIsHoverCategory={setIsHoverCategory}
        isHoverCategory={isHoverCategory}
        activeSection={activeSection}
        setHoveredId={setHoveredId}
        isHoveredBtn1={isHoveredBtn1}
        isHoveredBtn2={isHoveredBtn2}
        hoveredId={hoveredId}
        setActiveIndex={setActiveIndex}
      />

      <Search />
      <TelePhone />
      <HeaderButtons
        setIsHovered={setIsHovered}
        isHoveredCart={isHoveredCart}
        isHovered={isHovered}
        setIsHoveredCart={setIsHoveredCart}
      />
    </div>
  );
}
