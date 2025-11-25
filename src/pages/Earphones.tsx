import Header from "@/components/Header";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import yx1 from "@/assets/earphones-yx1.jpg";

const products = [
  {
    id: "yx1",
    name: "YX1 WIRELESS EARPHONES",
    isNew: true,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image: yx1,
  },
];

const Earphones = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (productId: string) => {
    setLoadedImages(prev => ({ ...prev, [productId]: true }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-smooth-dark py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center tracking-wider">
              EARPHONES
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
              {isLoading ? (
                <ProductCardSkeleton />
              ) : (
                products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-full ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <motion.div
                        className="bg-secondary rounded-lg overflow-hidden relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {!loadedImages[product.id] && (
                          <div className="absolute inset-0 bg-secondary animate-pulse" />
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover aspect-square"
                          onLoad={() => handleImageLoad(product.id)}
                          style={{ opacity: loadedImages[product.id] ? 1 : 0 }}
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      className={`w-full text-center md:text-left ${index % 2 === 1 ? "md:order-1" : ""}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {product.isNew && (
                        <p className="text-primary text-sm tracking-[0.5em] mb-4">
                          NEW PRODUCT
                        </p>
                      )}
                      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wider">
                        {product.name}
                      </h2>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {product.description}
                      </p>
                      <Link to={`/product/${product.id}`} className="inline-block">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="lg" className="tracking-wider">
                            SEE PRODUCT
                          </Button>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        <Categories />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Earphones;
