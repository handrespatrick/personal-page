export default function AboutMe() {
  return (
    <div className="flex h-full w-full flex-col gap-5 pt-16" id="about-me">
      <div>
        <span>My intro</span>
        <h2>About Me</h2>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex w-[220px] lg:w-[350px]">
          <img
            className="rounded-full"
            src="../../public/images/patrick.png"
            alt="placeholder"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-2">
            <button className="border-[#646cff] bg-transparent">
              Work with Me
            </button>
            <button className="border-[#646cff] bg-transparent">
              Work with Me
            </button>
            <button className="border-[#646cff] bg-transparent">
              Work with Me
            </button>
          </div>
          <div>
            <p>
              My name is Patrick Handres, I am a Full Stack Developer with 3
              years of experience. I have worked with various companies and have
              developed a wide range of applications. I am passionate about
              coding and I am always looking for new challenges.
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
    </div>
  );
}
