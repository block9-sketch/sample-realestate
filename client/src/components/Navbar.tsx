import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ホーム", href: "/" },
    { name: "強み", href: "/#strengths" },
    { name: "サービス", href: "/#services" },
    { name: "会社概要", href: "/#about" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-1.5 rounded-sm">
            <span className="font-serif font-bold text-xl">サ</span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold text-lg leading-none transition-colors",
              scrolled ? "text-primary" : "text-white"
            )}>
              サンプル不動産
            </span>
            <span className={cn(
              "text-[10px] tracking-widest uppercase transition-colors",
              scrolled ? "text-muted-foreground" : "text-white/80"
            )}>
              Sample Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button 
              variant={scrolled ? "default" : "secondary"} 
              size="sm" 
              className={cn(
                "font-bold gap-2",
                !scrolled && "bg-white text-primary hover:bg-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              お問い合わせ
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top-5">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="block py-2 text-foreground hover:text-primary font-medium border-b border-border/50"
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-2 gap-2" onClick={handleNavClick}>
                <Phone className="w-4 h-4" />
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
