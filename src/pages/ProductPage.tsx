import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { Navigate } from "react-router-dom";

// Import product images
import xx99Mark2 from "@/assets/product-xx99-mark2.jpg";
import xx99Mark1 from "@/assets/product-xx99-mark1.png";
import xx59 from "@/assets/product-xx59.jpg";
import zx9 from "@/assets/speaker-zx9.jpg";
import zx7 from "@/assets/speaker-zx7.jpg";
import yx1 from "@/assets/earphones-yx1.jpg";

// Import gallery images
import galleryXX99Mark2_1 from "@/assets/gallery-xx99-mark2-1.jpg";
import galleryXX99Mark2_2 from "@/assets/gallery-xx99-mark2-2.jpg";
import galleryXX99Mark2_3 from "@/assets/gallery-xx99-mark2-3.jpg";
import galleryXX99Mark1_1 from "@/assets/gallery-xx99-mark1-1.png";
import galleryXX99Mark1_2 from "@/assets/gallery-xx99-mark1-2.png";
import galleryXX99Mark1_3 from "@/assets/gallery-xx99-mark1-3.png";
import galleryXX59_1 from "@/assets/gallery-xx59-1.png";
import galleryXX59_2 from "@/assets/gallery-xx59-2.png";
import galleryXX59_3 from "@/assets/gallery-xx59-3.png";
import galleryZX9_1 from "@/assets/gallery-zx9-1.png";
import galleryZX9_2 from "@/assets/gallery-zx9-2.png";
import galleryZX9_3 from "@/assets/gallery-zx9-3.png";
import galleryZX7_1 from "@/assets/gallery-zx7-1.png";
import galleryZX7_2 from "@/assets/gallery-zx7-2.png";
import galleryZX7_3 from "@/assets/gallery-zx7-3.png";
import galleryYX1_1 from "@/assets/gallery-yx1-1.png";
import galleryYX1_2 from "@/assets/gallery-yx1-2.png";
import galleryYX1_3 from "@/assets/gallery-yx1-3.png";

const products = {
  "xx99-mark-ii": {
    id: "xx99-mark-ii",
    name: "XX99 MARK II HEADPHONES",
    isNew: true,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    image: xx99Mark2,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    gallery: {
      first: galleryXX99Mark2_1,
      second: galleryXX99Mark2_2,
      third: galleryXX99Mark2_3,
    },
    others: [
      { name: "XX99 MARK I", image: xx99Mark1, slug: "xx99-mark-i" },
      { name: "XX59", image: xx59, slug: "xx59" },
      { name: "ZX9 SPEAKER", image: zx9, slug: "zx9" },
    ],
  },
  "xx99-mark-i": {
    id: "xx99-mark-i",
    name: "XX99 MARK I HEADPHONES",
    isNew: false,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    price: 1750,
    image: xx99Mark1,
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising listening experience.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    gallery: {
      first: galleryXX99Mark1_1,
      second: galleryXX99Mark1_2,
      third: galleryXX99Mark1_3,
    },
    others: [
      { name: "XX99 MARK II", image: xx99Mark2, slug: "xx99-mark-ii" },
      { name: "XX59", image: xx59, slug: "xx59" },
      { name: "ZX9 SPEAKER", image: zx9, slug: "zx9" },
    ],
  },
  xx59: {
    id: "xx59",
    name: "XX59 HEADPHONES",
    isNew: false,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    image: xx59,
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    gallery: {
      first: galleryXX59_1,
      second: galleryXX59_2,
      third: galleryXX59_3,
    },
    others: [
      { name: "XX99 MARK II", image: xx99Mark2, slug: "xx99-mark-ii" },
      { name: "XX99 MARK I", image: xx99Mark1, slug: "xx99-mark-i" },
      { name: "ZX9 SPEAKER", image: zx9, slug: "zx9" },
    ],
  },
  zx9: {
    id: "zx9",
    name: "ZX9 SPEAKER",
    isNew: true,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: 4500,
    image: zx9,
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5\" aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 10m Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" },
    ],
    gallery: {
      first: galleryZX9_1,
      second: galleryZX9_2,
      third: galleryZX9_3,
    },
    others: [
      { name: "ZX7 SPEAKER", image: zx7, slug: "zx7" },
      { name: "XX99 MARK I", image: xx99Mark1, slug: "xx99-mark-i" },
      { name: "XX59", image: xx59, slug: "xx59" },
    ],
  },
  zx7: {
    id: "zx7",
    name: "ZX7 SPEAKER",
    isNew: false,
    description:
      "Stream high fidelity sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 3500,
    image: zx7,
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 7.5m Audio Cable" },
      { quantity: 1, item: "7.5m Optical Cable" },
    ],
    gallery: {
      first: galleryZX7_1,
      second: galleryZX7_2,
      third: galleryZX7_3,
    },
    others: [
      { name: "ZX9 SPEAKER", image: zx9, slug: "zx9" },
      { name: "XX99 MARK I", image: xx99Mark1, slug: "xx99-mark-i" },
      { name: "XX59", image: xx59, slug: "xx59" },
    ],
  },
  yx1: {
    id: "yx1",
    name: "YX1 WIRELESS EARPHONES",
    isNew: true,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: 599,
    image: yx1,
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    inTheBox: [
      { quantity: 2, item: "Earphone Unit" },
      { quantity: 6, item: "Multi-size Earplugs" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel Pouch" },
    ],
    gallery: {
      first: galleryYX1_1,
      second: galleryYX1_2,
      third: galleryYX1_3,
    },
    others: [
      { name: "XX99 MARK I", image: xx99Mark1, slug: "xx99-mark-i" },
      { name: "XX59", image: xx59, slug: "xx59" },
      { name: "ZX9 SPEAKER", image: zx9, slug: "zx9" },
    ],
  },
};

const ProductPage = () => {
  const { slug } = useParams();
  const product = slug ? products[slug as keyof typeof products] : null;

  if (!product) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <ProductDetail product={product} />
          </div>
        </section>
        <Categories />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
