export default function Contact() {
  return (
    <section className="contact-section flex justify-center items-center text-center py-16 bg-gradient-to-br from-teal-300 to-blue-500 text-white min-h-[80vh]">
      <div className="contact-content max-w-3xl w-full p-8 bg-black bg-opacity-60 rounded-lg">
        <h2 className="text-5xl font-bold mb-12 text-teal-300">Contact Me</h2>
        <p className="text-lg mb-4 text-gray-100">
          I&apos;m always excited to connect with new people, whether it&apos;s for
          collaborations, networking, or just to chat about cool projects. If
          you have any inquiries or would like to discuss a potential
          partnership, feel free to reach out!
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
          I&apos;m currently open to freelance opportunities and collaborations.
          Let&apos;s create something amazing together!
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
            <img
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
            <img
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
  );
}
