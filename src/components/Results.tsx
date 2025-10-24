import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Results = () => {
  const results = [
    {
      icon: 'Sparkles',
      title: 'Физическая трансформация',
      description: 'Улучшение гибкости, силы и осанки. Снижение болей в спине и суставах.',
      stats: '92% участников отметили улучшение физического состояния'
    },
    {
      icon: 'Brain',
      title: 'Ментальное здоровье',
      description: 'Снижение стресса, улучшение концентрации и качества сна.',
      stats: '87% улучшили качество сна и снизили уровень тревожности'
    },
    {
      icon: 'Heart',
      title: 'Эмоциональный баланс',
      description: 'Повышение осознанности, принятие себя и внутренняя гармония.',
      stats: '95% почувствовали прилив энергии и улучшение настроения'
    },
    {
      icon: 'TrendingUp',
      title: 'Устойчивые привычки',
      description: 'Формирование здоровых ритуалов, которые останутся с вами навсегда.',
      stats: '78% продолжили практику после окончания марафона'
    }
  ];

  const transformations = [
    {
      name: 'Анна, 32 года',
      result: '-8 кг, улучшение осанки',
      quote: 'Йога изменила мое тело и сознание. Я стала более уверенной и спокойной.',
      image: 'https://cdn.poehali.dev/projects/a739ae6c-4a72-4b3e-8900-2c96dac29ee1/files/9c8b388b-f35e-4aea-a519-b122318035fb.jpg'
    },
    {
      name: 'Мария, 28 лет',
      result: 'Избавилась от болей в спине',
      quote: 'После офисной работы спина болела постоянно. Сейчас про это забыла!',
      image: 'https://cdn.poehali.dev/projects/a739ae6c-4a72-4b3e-8900-2c96dac29ee1/files/9c8b388b-f35e-4aea-a519-b122318035fb.jpg'
    },
    {
      name: 'Елена, 45 лет',
      result: 'Гибкость как в 25',
      quote: 'Не верила что в моем возрасте смогу сесть на шпагат. Но это случилось!',
      image: 'https://cdn.poehali.dev/projects/a739ae6c-4a72-4b3e-8900-2c96dac29ee1/files/9c8b388b-f35e-4aea-a519-b122318035fb.jpg'
    }
  ];

  return (
    <section id="results" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Результаты участников
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные истории трансформации наших студентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, idx) => (
            <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={result.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{result.title}</h3>
                <p className="text-muted-foreground mb-4">{result.description}</p>
                <div className="text-sm font-semibold text-primary">{result.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((person, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <h4 className="font-bold text-lg">{person.name}</h4>
                  <div className="text-primary font-semibold">{person.result}</div>
                </div>
                <p className="text-muted-foreground italic">"{person.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
