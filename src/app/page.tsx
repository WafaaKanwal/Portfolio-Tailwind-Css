import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-[88vh] bg-gradient-to-r from-[#6b21a8] to-[#4f46e5] bg-cover bg-center text-right md:text-center"
      >
        <div className="bg-black bg-opacity-50 p-12 rounded-xl shadow-lg max-w-4xl w-full mx-auto flex flex-col md:flex-row">
          <div className="home-image flex items-center justify-center flex-1 order-1 md:order-1">
            <Image
              src="/images/dp.jpg"
              alt="Wafa Kanwal"
              width={320}
              height={320}
              className="rounded-full border-4 border-pink-500 shadow-lg"
            />
          </div>
          <div className="home-text text-white text-left flex-1 order-2 md:order-2 mt-4 md:mt-8">
            <h1 className="text-4xl font-extrabold mb-4">
              I&apos;m <span className="text-pink-500">Wafa</span>, <br />a Web
              Developer
            </h1>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Over the years, I have worked on a variety of projects, building
              responsive, scalable, and visually engaging websites.
              <br />
              Currently, I am diving deep into modern frameworks like{" "}
              <strong>Next.js</strong>, exploring Cloud AI, and expanding my
              knowledge in <strong>Autonomous AI Agents</strong> technologies to
              stay ahead of the curve. I believe in continuous learning and am
              constantly looking for ways to improve my skills and contribute to
              exciting projects.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-transform duration-200">
                Hire Me
              </button>
              <a
                href="/images/wk-cv.png"
                download="Wafa_CV.png"
                className="px-6 py-2 rounded-full border-2 border-white text-white hover:scale-105 transition-transform duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="p-12 bg-gradient-to-r from-purple-800 to-indigo-600 text-white text-center"
      >
        <h2 className="text-5xl font-bold mb-12 uppercase tracking-widest text-white">
          About Me
        </h2>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
          I am a passionate and dedicated Web Developer with a strong foundation
          in front-end and back-end technologies, including{" "}
          <strong className="font-bold">HTML</strong>,{" "}
          <strong className="font-bold">CSS</strong>,{" "}
          <strong className="font-bold">JavaScript</strong>, and{" "}
          <strong className="font-bold">TypeScript</strong>. My journey in web
          development began as a personal project and evolved into a career
          driven by a love for creating user-centric, high-quality web
          experiences.
        </p>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
          Over the years, I have worked on a variety of projects, building
          responsive, scalable, and visually engaging websites. Currently, I am
          diving deep into modern frameworks like{" "}
          <strong className="font-bold">Next.js</strong>, exploring Cloud AI,
          and expanding my knowledge in{" "}
          <strong className="font-bold">Web 3.0</strong> technologies to stay
          ahead of the curve. I believe in continuous learning and am constantly
          looking for ways to improve my skills and contribute to exciting
          projects.
        </p>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
          Outside of coding, I am passionate about collaborating with
          like-minded individuals to solve real-world problems through
          technology. Whether working on a personal project, collaborating with
          a team, or contributing to open-source, I am always eager to build
          something meaningful and impactful.
        </p>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
          Let&apos;s work together to bring innovative ideas to life and create
          the future of the web. I am always open to new opportunities, so feel
          free to reach out and connect with me!
        </p>
      </section>
{/* Skills Section */}
<section
  id="skills"
  className="skills-section py-12 px-4 bg-white shadow-md rounded-lg max-w-5xl w-full mx-auto text-center"
>
  <div>
    <h2 className="text-5xl font-bold text-[#142e76] mb-6 uppercase">
      My Skills
    </h2>
    <p className="text-sm text-gray-600 mb-8">
      Here are the technologies I am experienced with:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[{ name: "HTML", level: "90%", image: "/images/html.png" }, { name: "CSS", level: "80%", image: "/images/css.webp" }, { name: "JavaScript", level: "70%", image: "/images/js.png" }, { name: "TypeScript", level: "80%", image: "/images/1ts.png" }, { name: "Next.js", level: "20%", image: "/images/next.png" }].map((skill, index) => (
        <div
          key={index}
          className="bg-[#f7f9fc] shadow-sm rounded-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            src={skill.image}
            alt={skill.name}
            width={64}
            height={64}
            className="mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-[#142e76] mb-1">
            {skill.name}
          </h3>
          <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="absolute top-0 left-0 h-2 bg-[#65e6f7] rounded-full"
              style={{ width: skill.level }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white text-center">
        <h2 className="text-5xl font-bold mb-12">MY PROJECTS</h2>
        <div className="project-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mx-auto max-w-screen-xl">
          {[
            {
              href: "https://github.com/WafaaKanwal/simple-calculator.git",
              src: "/images/cal.jpg",
              alt: "Calculator",
              title: "Calculator",
              description:
                "A simple calculator project built with HTML, CSS, and JavaScript.",
            },
            {
              href: "https://github.com/WafaaKanwal/Atm.git",
              src: "/images/atm.jpg",
              alt: "ATM Machine",
              title: "ATM Machine",
              description:
                "An ATM machine simulation built with HTML, CSS, and JavaScript.",
            },
            {
              href: "https://github.com/WafaaKanwal/To-Do-App.git",
              src: "/images/todo.jpg",
              alt: "ToDo App",
              title: "ToDo App",
              description:
                "A ToDo app to manage tasks and keep track of daily activities.",
            },
            {
              href: "https://github.com/WafaaKanwal/Count-Down-Timer.git",
              src: "/images/ct.jpg",
              alt: "Countdown Timer",
              title: "Countdown Timer",
              description:
                "A countdown timer built with HTML, CSS, and JavaScript that lets you set a timer for a specific event or goal.",
            },
            {
              href: "https://github.com/WafaaKanwal/Next.js-Assignment1.git",
              src: "/images/web.png",
              alt: "Web App",
              title: "Web App",
              description:
                "A modern web application built using Next.js, React, and Tailwind CSS.",
            },
            {
              href: "https://github.com/WafaaKanwal/Next.js-Assignment2.git",
              src: "/images/figma.png",
              alt: "Figma Next.js",
              title: "Figma Next.js",
              description:
                "A Figma design converted into a responsive Next.js web application.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <Link href={project.href} target="_blank" className="block">
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="content p-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-100 hover:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section flex justify-center items-center text-center py-16 bg-gradient-to-br from-teal-300 to-blue-500 text-white min-h-[80vh]">
        <div className="contact-content max-w-3xl w-full p-8 bg-black bg-opacity-60 rounded-lg">
          <h2 className="text-5xl font-bold mb-12 text-teal-300">Contact Me</h2>
          <p className="text-lg mb-4 text-gray-100">
            I&apos;m always excited to connect with new people, whether
            it&apos;s for collaborations, networking, or just to chat about cool
            projects. If you have any inquiries or would like to discuss a
            potential partnership, feel free to reach out!
          </p>
          <p className="text-lg mb-4 text-gray-100">
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:wafakanwal@email.com"
              className="text-blue-400 hover:text-blue-600"
            >
              wafa.kanwal.khi@gmail.com
            </a>
          </p>
          <p className="text-lg mb-4 text-gray-100">
            I&apos;m currently open to freelance opportunities and
            collaborations. Let&apos;s create something amazing together!
          </p>

          <div className="social-icons flex justify-center gap-6 mt-6">
            <p className="text-lg mb-2 text-gray-100">
              You can also connect with me on these platforms:
            </p>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/wafa-kanwal-467376279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/WafaaKanwal?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                width={40}
                height={40}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
