import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white text-center">
        <h2 className="text-5xl font-bold mb-12">MY PROJECTS</h2>
        <div className="project-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mx-auto max-w-screen-xl">
          {[
            {
              href: "https://github.com/WafaaKanwal/simple-calculator.git",
              src: "/images/cal.jpg",
              alt: "Calculator",
              title: "Calculator",
              description: "A simple calculator project built with HTML, CSS, and JavaScript."
            },
            {
              href: "https://github.com/WafaaKanwal/Atm.git",
              src: "/images/atm.jpg",
              alt: "ATM Machine",
              title: "ATM Machine",
              description: "An ATM machine simulation built with HTML, CSS, and JavaScript."
            },
            {
              href: "https://github.com/WafaaKanwal/To-Do-App.git",
              src: "/images/todo.jpg",
              alt: "ToDo App",
              title: "ToDo App",
              description: "A ToDo app to manage tasks and keep track of daily activities."
            },
            {
              href: "https://github.com/WafaaKanwal/Count-Down-Timer.git",
              src: "/images/ct.jpg",
              alt: "Countdown Timer",
              title: "Countdown Timer",
              description: "A countdown timer built with HTML, CSS, and JavaScript that lets you set a timer for a specific event or goal."
            },
            {
              href: "https://github.com/WafaaKanwal/Next.js-Assignment1.git",
              src: "/images/web.png",
              alt: "Web App",
              title: "Web App",
              description: "A modern web application built using Next.js, React, and Tailwind CSS."
            },
            {
              href: "https://github.com/WafaaKanwal/Next.js-Assignment2.git",
              src: "/images/figma.png",
              alt: "Figma Next.js",
              title: "Figma Next.js",
              description: "A Figma design converted into a responsive Next.js web application."
            }
          ].map((project, index) => (
            <div key={index} className="project-card bg-[#ad2864] text-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Link href={project.href} target="_blank" className="block">
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image src={project.src} alt={project.alt} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="content p-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2 hover:text-gray-300">{project.title}</h3>
                    <p className="text-gray-100 hover:text-gray-300">{project.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
