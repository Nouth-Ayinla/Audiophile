import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import speakerZx9 from "@/assets/speaker-zx9.jpg";
import speakerZx7 from "@/assets/speaker-zx7.png";
import earphonesYx1 from "@/assets/earphones-yx1.jpg";

const FeaturedProducts = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 space-y-6 md:space-y-8">
        {/* ZX9 Speaker - Large Feature */}
        <div className="bg-primary rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="relative h-[240px] sm:h-[300px] md:h-[400px] flex items-end justify-center">
              <img
                src={speakerZx9}
                alt="ZX9 Speaker"
                className="h-full object-contain"
              />
            </div>
            <div className="text-center md:text-left space-y-4 md:space-y-6 text-primary-foreground">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-primary-foreground/90 text-sm md:text-base max-w-md mx-auto md:mx-0">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/product/zx9">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 font-bold tracking-wider"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ZX7 Speaker - Medium Feature */}
        <div className="bg-secondary rounded-lg overflow-hidden relative">
          <div className="h-[320px] md:h-[320px]">
            <img
              src={speakerZx7}
              alt="ZX7 Speaker"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 md:relative md:grid md:grid-cols-2 md:gap-0 md:items-center md:h-auto">
            <div className="md:col-start-1 md:col-end-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">ZX7 SPEAKER</h2>
              <Link to="/product/zx7">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-fit border-2 border-foreground hover:bg-foreground hover:text-background font-bold tracking-wider"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* YX1 Earphones - Split Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-lg overflow-hidden h-[200px] md:h-[320px]">
            <img
              src={earphonesYx1}
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-secondary rounded-lg flex flex-col justify-center p-6 md:p-12 lg:p-16">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">YX1 EARPHONES</h2>
            <Link to="/product/yx1">
              <Button
                variant="outline"
                size="lg"
                className="w-fit border-2 border-foreground hover:bg-foreground hover:text-background font-bold tracking-wider"
              >
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
