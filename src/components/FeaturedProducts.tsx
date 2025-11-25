import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import speakerZx9 from "@/assets/speaker-zx9.jpg";
import speakerZx7 from "@/assets/speaker-zx7.png";
import earphonesYx1 from "@/assets/earphones-yx1.jpg";

const FeaturedProducts = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 space-y-6 md:space-y-8">
        {/* ZX9 Speaker - Large Feature */}
        <motion.div
          className="bg-primary rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center p-6 sm:p-8 md:p-12 lg:p-16">
            <motion.div
              className="relative h-[240px] sm:h-[300px] md:h-[400px] flex items-end justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={speakerZx9}
                alt="ZX9 Speaker"
                className="h-full object-contain"
              />
            </motion.div>
            <motion.div
              className="text-center md:text-left space-y-4 md:space-y-6 text-primary-foreground"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 font-bold tracking-wider px-8"
                  >
                    SEE PRODUCT
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ZX7 Speaker - Medium Feature */}
        <motion.div
          className="bg-secondary rounded-lg overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-fit border-2 border-foreground hover:bg-foreground hover:text-background font-bold tracking-wider"
                  >
                    SEE PRODUCT
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* YX1 Earphones - Split Feature */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-fit border-2 border-foreground hover:bg-foreground hover:text-background font-bold tracking-wider"
                >
                  SEE PRODUCT
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
