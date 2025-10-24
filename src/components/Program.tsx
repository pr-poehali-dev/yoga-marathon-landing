import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Program = () => {
  const weeks = [
    {
      week: 1,
      title: 'Основы и пробуждение',
      description: 'Знакомство с базовыми асанами, дыхательными практиками и медитацией',
      topics: ['Базовые асаны', 'Правильное дыхание', 'Утренние ритуалы', 'Основы медитации']
    },
    {
      week: 2,
      title: 'Укрепление и баланс',
      description: 'Развитие силы, гибкости и чувства баланса через усложненные практики',
      topics: ['Силовые асаны', 'Балансы', 'Растяжка', 'Пранаямы']
    },
    {
      week: 3,
      title: 'Энергия и гармония',
      description: 'Работа с энергетическими центрами и углубление внутренней практики',
      topics: ['Чакры', 'Мантры', 'Виньясы', 'Глубокая релаксация']
    },
    {
      week: 4,
      title: 'Трансформация и интеграция',
      description: 'Закрепление навыков и создание персональной практики на всю жизнь',
      topics: ['Продвинутые асаны', 'Личная практика', 'Философия йоги', 'Образ жизни']
    }
  ];

  const bonuses = [
    {
      icon: 'Video',
      title: 'Записи всех занятий',
      description: 'Доступ к видео остается навсегда'
    },
    {
      icon: 'FileText',
      title: 'Чек-листы и гайды',
      description: 'Практические материалы для самостоятельных занятий'
    },
    {
      icon: 'Utensils',
      title: 'Планы питания',
      description: 'Индивидуальные рекомендации по йогическому питанию'
    },
    {
      icon: 'BookOpen',
      title: 'Библиотека знаний',
      description: 'Статьи, медитации и дополнительные уроки'
    }
  ];

  return (
    <section id="program" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Программа марафона
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            30 дней структурированной практики для постепенной и устойчивой трансформации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {weeks.map((week) => (
            <Card key={week.week} className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {week.week}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{week.title}</h3>
                    <p className="text-muted-foreground">{week.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {week.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-secondary" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary to-secondary p-12 rounded-3xl text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Дополнительные материалы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bonuses.map((bonus, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={bonus.icon as any} size={32} />
                </div>
                <h4 className="font-bold mb-2">{bonus.title}</h4>
                <p className="text-sm text-white/80">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
