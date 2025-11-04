import Header from "@/components/Header";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-[#191919] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center tracking-wider">
              EARPHONES
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  <div className={`w-full ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="bg-secondary rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                  </div>
                  <div className={`w-full text-center md:text-left ${index % 2 === 1 ? "md:order-1" : ""}`}>
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
                      <Button size="lg" className="tracking-wider">
                        SEE PRODUCT
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
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
