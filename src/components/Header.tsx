import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="bg-smooth-dark text-background border-b border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-bold hover:text-primary transition-colors">
                  HOME
                </Link>
                <Link to="/headphones" className="text-lg font-bold hover:text-primary transition-colors">
                  HEADPHONES
                </Link>
                <Link to="/speakers" className="text-lg font-bold hover:text-primary transition-colors">
                  SPEAKERS
                </Link>
                <Link to="/earphones" className="text-lg font-bold hover:text-primary transition-colors">
                  EARPHONES
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider">
            audiophile
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-bold tracking-wider hover:text-primary transition-colors">
              HOME
            </Link>
            <Link to="/headphones" className="text-sm font-bold tracking-wider hover:text-primary transition-colors">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="text-sm font-bold tracking-wider hover:text-primary transition-colors">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="text-sm font-bold tracking-wider hover:text-primary transition-colors">
              EARPHONES
            </Link>
          </nav>

          {/* Cart */}
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
