import EmailIcon from "@/components/icons/EmailIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import PlayIcon from "@/components/icons/PlayIcon";

export default function Contact() {
  return (
    <section className="flex h-full w-full flex-col gap-5 pt-16" id="contact">
      <div>
        <span>Get in touch</span>
        <h2>Contact Me</h2>
      </div>
      <div className="flex flex-col gap-4 pb-4">
        <div className="flex flex-col items-center gap-2 rounded-xl bg-[#e9e9e9] p-4 shadow-lg dark:bg-[#151c28]">
          <EmailIcon />
          <span>E-mail</span>
          <span>handrespatrick@gmail.com</span>
          <a
            href="mailto:handrespatrick@gmail.com"
            target="blank"
            className="flex text-[#646cff]"
          >
            Write me
            <PlayIcon />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl bg-[#e9e9e9] p-4 shadow-lg dark:bg-[#151c28]">
          <LinkedinIcon color="currentColor" />
          <span>Linkedin</span>
          <span>Patrick Handres</span>
          <a
            href="https://www.linkedin.com/in/patrickhandres/"
            target="blank"
            className="flex text-[#646cff]"
          >
            Write me
            <PlayIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
