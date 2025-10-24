import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Начни трансформацию сегодня
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Измени свою жизнь за{' '}
              <span className="text-primary">30 дней</span> йоги
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Марафон для тех, кто готов открыть новую версию себя через практику йоги. 
              Баланс тела, ясность ума и внутренняя гармония уже ждут тебя.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full text-lg px-8"
                onClick={() => scrollToSection('pricing')}
              >
                Начать сейчас
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg px-8"
                onClick={() => scrollToSection('program')}
              >
                Узнать программу
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">30</div>
                <div className="text-sm text-muted-foreground">дней практики</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">участников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">довольных</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
            <img 
              src="https://cdn.poehali.dev/projects/a739ae6c-4a72-4b3e-8900-2c96dac29ee1/files/3a8bd1e0-3e37-46b7-9867-9d636f927d51.jpg" 
              alt="Йога практика"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold">Старт 1 ноября</div>
                  <div className="text-sm text-muted-foreground">Осталось 15 мест</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
