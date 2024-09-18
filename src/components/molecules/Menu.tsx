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

  return (
    <footer className="fixed bottom-4 left-0 z-50 w-full opacity-95 lg:flex lg:justify-center">
      <div className="flex justify-center lg:w-80">
        <ul className="flex h-16 w-11/12 items-center justify-around rounded-[4rem] bg-gray-100 backdrop-blur-md dark:bg-slate-800">
          <li
            className={`cursor-pointer ${
              activeSection === "#home"
                ? "scale-110 rounded-full bg-gradient-to-t from-slate-600 to-[#646cff] shadow-lg"
                : ""
            } p-0.5`}
          >
            <a href="#home">
              <HomeIcon />
            </a>
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "#about-me"
                ? "scale-110 rounded-full bg-gradient-to-t from-slate-600 to-[#646cff] shadow-lg"
                : ""
            } p-0.5`}
          >
            <a href="#about-me">
              <AboutMeIcon />
            </a>
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "#skills"
                ? "scale-110 rounded-full bg-gradient-to-t from-slate-600 to-[#646cff] shadow-lg"
                : ""
            } p-0.5`}
          >
            <a href="#skills">
              <SkillsIcon />
            </a>
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "#contact"
                ? "scale-110 rounded-full bg-gradient-to-t from-slate-600 to-[#646cff] shadow-lg"
                : ""
            } p-0.5`}
          >
            <a href="#contact">
              <ContactIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
