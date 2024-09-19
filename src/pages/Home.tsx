import GithubIcon from "@/components/icons/GithubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MouseIcon from "@/components/icons/MouseIcon";

export default function Home() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/patrickhandres/",
      icon: <LinkedinIcon color="#646cff" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/handrespatrick",
      icon: <GithubIcon />,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/patrickhandres/",
      icon: <InstagramIcon />,
      label: "Instagram",
    },
  ];

  return (
    <section className="flex h-full w-full flex-col gap-10 pt-16" id="home">
      <div className="flex flex-col">
        <span>Hello, I'm</span>
        <strong>Patrick Handres</strong>
        <h2>Full Stack Developer</h2>
        <div className="mt-10 flex justify-center gap-1">
          <button className="border-[#646cff] bg-transparent">
            <a href="#contact">Work with Me</a>
          </button>
          <button>
            <a href="#about-me">About</a>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex w-6 flex-col justify-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex w-[220px] flex-col">
          <img
            className="rounded-3xl"
            src="https://avatars.githubusercontent.com/u/64557056?v=4"
            alt="placeholder"
          />
        </div>
        <div className="flex w-6 flex-col justify-center gap-4">
          <MouseIcon />
          <div className="flex flex-col items-center gap-5">
            <p className="rotate-90 text-xs">Scroll</p>
            <p className="rotate-90 text-xs">down</p>
          </div>
        </div>
      </div>
    </section>
  );
}
