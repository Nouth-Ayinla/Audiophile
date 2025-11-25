import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-headphones-new.jpg";

const Hero = () => {
  return (
    <section className="bg-smooth-dark text-background relative overflow-hidden">
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
          <motion.div
            className="text-center md:text-left space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-background/50 text-xs md:text-sm tracking-[0.5em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              New Product
            </motion.p>
            <motion.h1
              className="text-[2.25rem] md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              XX99 MARK II<br />HEADPHONES
            </motion.h1>
            <motion.p
              className="text-background/75 text-[15px] md:text-lg leading-relaxed max-w-[350px] mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/product/xx99-mark-ii" className="inline-block pt-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold tracking-wider px-8">
                    SEE PRODUCT
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          {/* Desktop Image */}
          <motion.div
            className="relative h-[350px] md:h-[400px] lg:h-[500px] hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt="XX99 Mark II Headphones"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
