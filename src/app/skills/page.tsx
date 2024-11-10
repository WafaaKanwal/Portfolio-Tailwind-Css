import Image from "next/image";

export default function Skills() {
  return (
    <div>
      <section id="skills" className="skills-section py-4 bg-[#f7f9fc] text-center mt-12 mb-12">
        <div className="container mx-auto text-center px-2 lg:px-4">
          <h2 className="skills-heading text-5xl font-extrabold text-[#142e76] mb-10 uppercase tracking-wide text-shadow-md">
            My Skills
          </h2>
          <div className="skill-item-container grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-8 justify-items-center max-w-7xl mx-auto">
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
    </div>
  );
}
