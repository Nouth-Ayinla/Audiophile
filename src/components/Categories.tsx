import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import headphonesImg from "@/assets/category-headphones.png";
import speakersImg from "@/assets/category-speakers.png";
import earphonesImg from "@/assets/category-earphones.png";

const categories = [
  {
    name: "HEADPHONES",
    image: headphonesImg,
    link: "/headphones",
  },
  {
    name: "SPEAKERS",
    image: speakersImg,
    link: "/speakers",
  },
  {
    name: "EARPHONES",
    image: earphonesImg,
    link: "/earphones",
  },
];

const Categories = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="pt-6 md:pt-12 pb-4 px-4 md:px-8">
                <div className="relative h-24 md:h-40 mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm md:text-lg font-bold mb-3 md:mb-4 tracking-wider text-center">
                  {category.name}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-muted-foreground hover:text-primary group-hover:text-primary text-xs md:text-sm font-bold tracking-wider flex items-center transition-colors cursor-pointer">
                    SHOP
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
