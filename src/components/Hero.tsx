import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-headphones-new.jpg";

const Hero = () => {
  return (
    <section className="bg-foreground text-background relative overflow-hidden">
      {/* Background Image - Mobile Only */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden">
        <img
          src={heroImage}
          alt="XX99 Mark II Headphones"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 py-32 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <p className="text-background/50 text-xs md:text-sm tracking-[0.5em] uppercase">
              New Product
            </p>
            <h1 className="text-[2.25rem] md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider">
              XX99 MARK II<br />HEADPHONES
            </h1>
            <p className="text-background/75 text-[15px] md:text-lg leading-relaxed max-w-[350px] mx-auto md:mx-0">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link to="/product/xx99-mark-ii" className="inline-block pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold tracking-wider px-8">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
          {/* Desktop Image */}
          <div className="relative h-[350px] md:h-[400px] lg:h-[500px] hidden md:block">
            <img
              src={heroImage}
              alt="XX99 Mark II Headphones"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
