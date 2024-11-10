import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="flex items-center justify-center min-h-[88vh] bg-gradient-to-r from-[#6b21a8] to-[#4f46e5] bg-cover bg-center text-right"
      >
        <div className="bg-black bg-opacity-50 p-12 rounded-xl shadow-lg max-w-4xl w-full mx-auto flex">
          <div className="home-text text-white text-left flex-1">
            <h1 className="text-4xl font-extrabold mb-4">
              I&apos;m <span className="text-pink-500">Wafa</span>, <br />a
              Web Developer
            </h1>
            <p className="text-lg mb-8 max-w-xl">
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

            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-transform duration-200">
                Hire Me
              </button>
              <button className="px-6 py-2 rounded-full border-2 border-white text-white hover:scale-105 transition-transform duration-200">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="home-image flex items-center justify-center flex-1">
            <Image
              src="/images/dp.jpg"
              alt="Wafa Kanwal"
              width={320}
              height={320}
              className="rounded-full border-4 border-pink-500 shadow-lg"
            />
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
          development began as a personal project and evolved into a career driven
          by a love for creating user-centric, high-quality web experiences.
        </p>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
          Over the years, I have worked on a variety of projects, building
          responsive, scalable, and visually engaging websites. Currently, I am
          diving deep into modern frameworks like{" "}
          <strong className="font-bold">Next.js</strong>, exploring Cloud AI, and
          expanding my knowledge in <strong className="font-bold">Web 3.0</strong>{" "}
          technologies to stay ahead of the curve. I believe in continuous
          learning and am constantly looking for ways to improve my skills and
          contribute to exciting projects.
        </p>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
          Outside of coding, I am passionate about collaborating with like-minded
          individuals to solve real-world problems through technology. Whether
          working on a personal project, collaborating with a team, or
          contributing to open-source, I am always eager to build something
          meaningful and impactful.
        </p>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 text-cyan-100 italic">
          Let&apos;s work together to bring innovative ideas to life and create the
          future of the web. I am always open to new opportunities, so feel free
          to reach out and connect with me!
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section py-4 bg-[#f7f9fc] text-center mt-12 mb-12">
        <div className="container mx-auto text-center px-4 lg:px-8">
          <h2 className="skills-heading text-5xl font-extrabold text-[#142e76] mb-8 uppercase tracking-wide text-shadow-md">
            My Skills
          </h2>
          <div className="skill-item-container grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center max-w-7xl mx-auto">
            <div className="skill-item bg-gradient-to-br from-[#65e6f7] to-[#423072] p-6 rounded-lg shadow-xl text-center text-white hover:translate-y-[-6px] hover:scale-105 transition-all duration-300 w-[250px] h-[auto]">
              <Image
                src="/images/html.png"
                alt="HTML"
                width={96}
                height={96}
                className="skill-icon rounded-full mb-4 shadow-lg p-2 bg-white"
              />
              <h3 className="text-2xl font-semibold mb-2">HTML</h3>
              <p className="text-lg">90%</p>
            </div>
            <div className="skill-item bg-gradient-to-br from-[#65e6f7] to-[#423072] p-6 rounded-lg shadow-xl text-center text-white hover:translate-y-[-6px] hover:scale-105 transition-all duration-300 w-[250px] h-[auto]">
              <Image
                src="/images/css.webp"
                alt="CSS"
                width={96}
                height={96}
                className="skill-icon rounded-full mb-4 shadow-lg p-2 bg-white"
              />
              <h3 className="text-2xl font-semibold mb-2">CSS</h3>
              <p className="text-lg">80%</p>
            </div>
            <div className="skill-item bg-gradient-to-br from-[#65e6f7] to-[#423072] p-6 rounded-lg shadow-xl text-center text-white hover:translate-y-[-6px] hover:scale-105 transition-all duration-300 w-[250px] h-[auto]">
              <Image
                src="/images/js.png"
                alt="JavaScript"
                width={96}
                height={96}
                className="skill-icon rounded-full mb-4 shadow-lg p-2 bg-white"
              />
              <h3 className="text-2xl font-semibold mb-2">JavaScript</h3>
              <p className="text-lg">70%</p>
            </div>
            <div className="skill-item bg-gradient-to-br from-[#65e6f7] to-[#423072] p-6 rounded-lg shadow-xl text-center text-white hover:translate-y-[-6px] hover:scale-105 transition-all duration-300 w-[250px] h-[auto]">
              <Image
                src="/images/1ts.png"
                alt="TypeScript"
                width={96}
                height={96}
                className="skill-icon rounded-full mb-4 shadow-lg p-2 bg-white"
              />
              <h3 className="text-2xl font-semibold mb-2">TypeScript</h3>
              <p className="text-lg">80%</p>
            </div>
            <div className="skill-item bg-gradient-to-br from-[#65e6f7] to-[#423072] p-6 rounded-lg shadow-xl text-center text-white hover:translate-y-[-6px] hover:scale-105 transition-all duration-300 w-[250px] h-[auto]">
              <Image
                src="/images/next.png"
                alt="Next.js"
                width={96}
                height={96}
                className="skill-icon rounded-full mb-4 shadow-lg p-2 bg-white"
              />
              <h3 className="text-2xl font-semibold mb-2">Next.js</h3>
              <p className="text-lg">20%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white text-center">
        <h2 className="text-5xl font-bold mb-12">MY PROJECTS</h2>
        <div className="project-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mx-auto max-w-screen-xl">
          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/simple-calculator.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/cal.jpg"
                  alt="Calculator"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Calculator
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A simple calculator project built with HTML, CSS, and
                    JavaScript.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Atm.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/atm.jpg"
                  alt="ATM Machine"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    ATM Machine
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    An ATM machine simulation built with HTML, CSS, and
                    JavaScript.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/To-Do-App.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/todo.jpg"
                  alt="ToDo App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    ToDo App
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A ToDo app to manage tasks and keep track of daily
                    activities.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Count-Down-Timer.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/ct.jpg"
                  alt="Countdown Timer"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Countdown Timer
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A countdown timer built with HTML, CSS, and JavaScript that
                    lets you set a timer for a specific event or goal.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Next.js-Assignment1.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/web.png"
                  alt="Web App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Web App
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A modern web application built using Next.js, React, and
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/WafaaKanwal/Next.js-Assignment2.git"
              target="_blank"
              className="block"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/figma.png"
                  alt="Figma Next.js"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="content p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">
                    Figma Next.js
                  </h3>
                  <p className="text-gray-100 hover:text-gray-300">
                    A Figma design converted into a responsive Next.js web
                    application.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
