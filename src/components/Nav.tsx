import { Button } from "@/components/ui/button";
import logo from "/lovable-uploads/75c3651a-8841-4499-a0d1-21386ed685d3.png";
import { memo } from "react";

const Nav = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
          <img 
            src={logo} 
            alt="localdocs 3D 문서 스택 로고" 
            width={40} 
            height={40} 
            className="logo-interactive" 
            loading="eager"
            decoding="async"
          />
          <div className="text-xl font-bold text-primary">Localdocs</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="story-link">제품 특징</a>
          <a href="#scenarios" className="story-link">사용 시나리오</a>
          <a href="#security" className="story-link">보안</a>
          <a href="#pricing" className="story-link">요금제</a>
          <a href="#faq" className="story-link">FAQ</a>
          <a href="#cta" className="story-link">Waitlist 등록</a>
        </nav>
        <div className="hidden md:block">
          <a href="#cta">
            <Button variant="hero" size="lg">Waitlist 등록하기</Button>
          </a>
        </div>
      </div>
    </header>
  );
});

Nav.displayName = "Nav";
export default Nav;