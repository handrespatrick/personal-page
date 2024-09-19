import VerifiedIcon from "@/components/icons/VerifiedIcon";

export default function Skills() {
  const skills = {
    backend: [
      {
        name: "Node",
        level: "Advanced",
      },
      {
        name: "NestJS",
        level: "Advanced",
      },
      {
        name: "Fastify",
        level: "Advanced",
      },
      {
        name: "Express",
        level: "Advanced",
      },
      {
        name: "Jest",
        level: "Advanced",
      },
      {
        name: "AWS SQS",
        level: "Medium",
      },
      {
        name: "AWS Lambda",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        level: "Medium",
      },
    ],
    frontend: [
      {
        name: "React",
        level: "Advanced",
      },
      {
        name: "Tailwind",
        level: "Advanced",
      },
      {
        name: "Material UI",
        level: "Advanced",
      },
      {
        name: "ShadCN",
        level: "Advanced",
      },
    ],
  };

  return (
    <section className="flex h-full w-full flex-col gap-5 pt-16" id="skills">
      <div>
        <span>My Abilities</span>
        <h2>My Skills</h2>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5 rounded-xl bg-[#e9e9e9] p-5 shadow-lg dark:bg-[#151c28]">
          <h3>Backend</h3>
          <ul className="flex flex-wrap justify-between gap-5">
            {skills.backend.map((skill) => (
              <li key={skill.name} className="flex gap-1">
                <div>
                  <VerifiedIcon />
                </div>
                <div className="flex flex-col items-start">
                  <span>
                    <strong>{skill.name}</strong>
                  </span>
                  <span>{skill.level}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 rounded-xl bg-[#e9e9e9] p-5 shadow-lg dark:bg-[#151c28]">
          <h3>Frontend</h3>
          <ul className="flex flex-wrap justify-between gap-5">
            {skills.frontend.map((skill) => (
              <li key={skill.name} className="flex gap-1">
                <div>
                  <VerifiedIcon />
                </div>
                <div className="flex flex-col items-start">
                  <span>
                    <strong>{skill.name}</strong>
                  </span>
                  <span>{skill.level}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
