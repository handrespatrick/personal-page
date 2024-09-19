import BadgeIcon from "@/components/icons/BadgeIcon";
import CheckIcon from "@/components/icons/CheckIcon";

export default function AboutMe() {
  const achievements = [
    { icon: <BadgeIcon />, title: "Experience", value: "+3 years" },
    { icon: <CheckIcon />, title: "Completed", value: "+50 Projects" },
  ];

  return (
    <section className="flex h-full w-full flex-col gap-5 pt-16" id="about-me">
      <div className="text-center">
        <span>My intro</span>
        <h2>About Me</h2>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex w-[220px] lg:w-[350px]">
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/64557056?v=4"
            alt="placeholder"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center gap-5">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="flex flex-col items-center gap-2 rounded-xl bg-[#e9e9e9] p-5 shadow-lg dark:bg-[#151c28]"
              >
                {achievement.icon}
                <span className="text-sm font-semibold">
                  {achievement.title}
                </span>
                <span className="text-xs font-semibold">
                  {achievement.value}
                </span>
              </div>
            ))}
          </div>
          <div>
            <p>
              I'm Patrick, christian, husband and full stack developer. With a
              diverse professional background, I have the ability to navigate
              across a wide spectrum of knowledge domains.
            </p>
          </div>
          <div className="flex justify-center gap-1">
            <button className="border-[#646cff] bg-transparent">
              <a href="https://github.com/handrespatrick" target="_blank">
                GitHub
              </a>
            </button>
            <button>
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
