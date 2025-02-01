import Image from "next/image";

export default function Skills() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc]">
      <section
        id="skills"
        className="skills-section py-12 px-4 bg-white shadow-md rounded-lg max-w-5xl w-full text-center"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#142e76] mb-6 uppercase">
            My Skills
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Here are the technologies I am experienced with:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[  
            { name: "HTML", level: "90%", image: "/images/html.png" },
            { name: "CSS", level: "80%", image: "/images/css.webp" },
            { name: "JavaScript", level: "70%", image: "/images/js.png" },
            { name: "TypeScript", level: "80%", image: "/images/1ts.png" },
            { name: "Next.js", level: "20%", image: "/images/next.png" },
          ].map((skill, index) => (
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
      </section>
    </div>
  );
}
