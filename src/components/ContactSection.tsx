import BlurText from "./BlurText";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

const ContactSection = () => {
  return (
    <>
      <div className="mt-12 px-4">
        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center text-animated-gradient">
          Contact Me
        </h2> */}

        <div className="flex justify-center">
          <BlurText
            text="Contact Me"
            delay={500}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          />
        </div>

        <p className="text-lg lg:text-xl text-center text-gray-400  w-full lg:w-3/4 mx-auto leading-relaxed">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />

          <ContactInfoCard />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
