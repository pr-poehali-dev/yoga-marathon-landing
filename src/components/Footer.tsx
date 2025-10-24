import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">YogaFlow</div>
            <p className="text-sm text-background/70">
              Трансформируем жизни через практику йоги с 2014 года
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#hero" className="hover:text-background transition-colors">Главная</a></li>
              <li><a href="#program" className="hover:text-background transition-colors">Программа</a></li>
              <li><a href="#results" className="hover:text-background transition-colors">Результаты</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Тарифы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#reviews" className="hover:text-background transition-colors">Отзывы</a></li>
              <li><a href="#teacher" className="hover:text-background transition-colors">О преподавателе</a></li>
              <li><a href="#contacts" className="hover:text-background transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/yogaflow" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a 
                href="https://t.me/yogaflow" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a 
                href="https://youtube.com/@yogaflow" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
            <div className="mt-4 text-sm text-background/70">
              <div>+7 (900) 123-45-67</div>
              <div>info@yogaflow.ru</div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {currentYear} YogaFlow. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
