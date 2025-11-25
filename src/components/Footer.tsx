import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-smooth-dark text-background">
      <div className="container mx-auto px-6 md:px-6 py-12 md:py-12">
        {/* Top Border Accent */}
        <div className="w-24 h-1 bg-primary mb-12 mx-auto md:mx-0"></div>
        
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-8">
          <Link to="/" className="text-2xl md:text-2xl font-bold tracking-wider mb-12 md:mb-0 text-center md:text-left">
            audiophile
          </Link>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center md:items-start">
            <Link to="/" className="text-[13px] md:text-sm font-bold tracking-[0.15em] hover:text-primary transition-colors">
              HOME
            </Link>
            <Link to="/headphones" className="text-[13px] md:text-sm font-bold tracking-[0.15em] hover:text-primary transition-colors">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="text-[13px] md:text-sm font-bold tracking-[0.15em] hover:text-primary transition-colors">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="text-[13px] md:text-sm font-bold tracking-[0.15em] hover:text-primary transition-colors">
              EARPHONES
            </Link>
          </nav>
        </div>

        {/* Description */}
        <div className="mb-12 md:mb-20">
          <p className="text-background/50 text-[15px] md:text-sm leading-[25px] max-w-lg mx-auto md:mx-0 text-center md:text-left">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </p>
        </div>

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-0">
          <p className="text-background/50 text-[15px] md:text-sm font-bold text-center md:text-left order-2 md:order-1">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-4 justify-center md:justify-start order-1 md:order-2">
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
