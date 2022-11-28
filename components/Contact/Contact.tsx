export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex h-screen max-w-xl flex-col justify-center"
    >
      <h2 className="flex items-center justify-center whitespace-nowrap text-2xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['4.']">
        What's Next?
      </h2>
      <h1 className="my-8 text-center text-5xl font-bold text-yellow">
        Get in Touch
      </h1>
      <p className="text-center text-xl">
        I am always looking for new opportunities. If you ever want to chat, ask
        a question, or just want to say hello, ill try my best to get back to
        you!
      </p>
      <div className="flex justify-center">
        <a
          href="#contact"
          className="mt-8 rounded-3xl border-2 border-yellow bg-transparent px-6 py-4 text-xl transition-colors duration-150 hover:bg-yellow/5"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
