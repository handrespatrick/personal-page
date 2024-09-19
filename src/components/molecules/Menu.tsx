import { useState, useEffect } from "react";
import HomeIcon from "../icons/HomeIcon";
import AboutMeIcon from "../icons/AboutMeIcon";
import SkillsIcon from "../icons/SkillsIcon";
import ContactIcon from "../icons/ContactIcon";

export default function Menu() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about-me", "#skills", "#contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element: HTMLElement | null = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", icon: <HomeIcon /> },
    { id: "about-me", icon: <AboutMeIcon /> },
    { id: "skills", icon: <SkillsIcon /> },
    { id: "contact", icon: <ContactIcon /> },
  ];

  return (
    <menu className="fixed bottom-4 left-0 z-50 w-full opacity-95 lg:flex lg:justify-center">
      <nav className="flex justify-center lg:w-80">
        <ul className="flex h-16 w-11/12 items-center justify-around rounded-[4rem] bg-[#dde3eecc] backdrop-blur-md dark:bg-[#1c2536cc]">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer p-0.5 ${activeSection === `#${item.id}` ? "scale-110 rounded-full bg-gradient-to-t from-slate-600 to-[#646cff] shadow-lg" : ""} `}
            >
              <a href={`#${item.id}`} aria-label={item.id}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </menu>
  );
}
