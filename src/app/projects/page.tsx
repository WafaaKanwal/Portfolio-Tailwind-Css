import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
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
