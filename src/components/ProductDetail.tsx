import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    isNew: boolean;
    description: string;
    price: number;
    image: string;
    features: string;
    inTheBox: Array<{ quantity: number; item: string }>;
    gallery: {
      first: string;
      second: string;
      third: string;
    };
    others: Array<{
      name: string;
      image: string;
      slug: string;
    }>;
  };
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name}`,
    });
    setQuantity(1);
  };

  return (
    <div className="space-y-24">
      {/* Back Button */}
      <Link
        to="/headphones"
        className="inline-block text-muted-foreground hover:text-primary transition-colors"
      >
        Go Back
      </Link>

      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="bg-secondary rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          {product.isNew && (
            <p className="text-primary text-xs md:text-sm tracking-[0.5em]">
              NEW PRODUCT
            </p>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            {product.name}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {product.description}
          </p>
          <p className="text-xl md:text-2xl font-bold">$ {product.price.toLocaleString()}</p>
          <div className="flex gap-4">
            <div className="flex items-center bg-secondary">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseQuantity}
                className="hover:text-primary"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-bold">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQuantity}
                className="hover:text-primary"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" className="tracking-wider" onClick={handleAddToCart}>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>

      {/* Features & In The Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-wider">
            FEATURES
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
            {product.features}
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-wider">
            IN THE BOX
          </h2>
          <ul className="space-y-2">
            {product.inTheBox.map((item, index) => (
              <li key={index} className="flex gap-4 text-sm md:text-base">
                <span className="text-primary font-bold">{item.quantity}x</span>
                <span className="text-muted-foreground">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-4 md:space-y-8">
          <div className="bg-secondary rounded-lg overflow-hidden">
            <img
              src={product.gallery.first}
              alt="Product"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="bg-secondary rounded-lg overflow-hidden">
            <img
              src={product.gallery.second}
              alt="Product"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        </div>
        <div className="bg-secondary rounded-lg overflow-hidden h-full">
          <img
            src={product.gallery.third}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* You May Also Like */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center tracking-wider">
          YOU MAY ALSO LIKE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {product.others.map((item) => (
            <div key={item.slug} className="text-center">
              <div className="bg-secondary rounded-lg overflow-hidden mb-4 md:mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6 tracking-wider">
                {item.name}
              </h3>
              <Link to={`/product/${item.slug}`}>
                <Button size="lg" className="tracking-wider">
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
