import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">YogaFlow</div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('program')} className="text-foreground hover:text-primary transition-colors">
              Программа
            </button>
            <button onClick={() => scrollToSection('results')} className="text-foreground hover:text-primary transition-colors">
              Результаты
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('teacher')} className="text-foreground hover:text-primary transition-colors">
              О преподавателе
            </button>
            <Button onClick={() => scrollToSection('contacts')} className="rounded-full">
              Записаться
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-6 pb-4">
            <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('program')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Программа
            </button>
            <button onClick={() => scrollToSection('results')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Результаты
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('teacher')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              О преподавателе
            </button>
            <Button onClick={() => scrollToSection('contacts')} className="rounded-full w-full">
              Записаться
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
