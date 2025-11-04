import Header from "@/components/Header";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import xx99Mark2 from "@/assets/product-xx99-mark2.jpg";
import xx99Mark1 from "@/assets/product-xx99-mark1.png";
import xx59 from "@/assets/product-xx59.jpg";

const products = [
  {
    id: "xx99-mark-ii",
    name: "XX99 MARK II HEADPHONES",
    isNew: true,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: xx99Mark2,
  },
  {
    id: "xx99-mark-i",
    name: "XX99 MARK I HEADPHONES",
    isNew: false,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: xx99Mark1,
  },
  {
    id: "xx59",
    name: "XX59 HEADPHONES",
    isNew: false,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: xx59,
  },
];

const Headphones = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-[#191919] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center tracking-wider">
              HEADPHONES
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
                        className="w-full h-full object-contain aspect-square"
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

export default Headphones;
