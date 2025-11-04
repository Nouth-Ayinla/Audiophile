import aboutImage from "@/assets/about-person.jpg";

const About = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              Bringing you the{" "}
              <span className="text-primary">best</span> audio gear
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-center md:text-left">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden h-[300px] md:h-[350px] lg:h-[400px]">
            <img
              src={aboutImage}
              alt="Person enjoying audiophile equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
