import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  const plans = [
    {
      name: 'Базовый',
      price: '4 990',
      popular: false,
      features: [
        'Доступ ко всем видео урокам',
        'Общий чат участников',
        'Базовые материалы',
        'Доступ к записям 3 месяца'
      ]
    },
    {
      name: 'Оптимальный',
      price: '7 990',
      popular: true,
      features: [
        'Всё из Базового',
        'Записи остаются навсегда',
        'Чек-листы и планы питания',
        'Личная поддержка в чате',
        'Дополнительные медитации',
        'Сертификат участника'
      ]
    },
    {
      name: 'VIP',
      price: '14 990',
      popular: false,
      features: [
        'Всё из Оптимального',
        '2 личные консультации',
        'Персональный план практики',
        'Приоритетная поддержка',
        'Закрытый клуб выпускников',
        'Бонусный курс по медитации'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Тарифы и цены
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий формат участия в марафоне
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`relative ${
                plan.popular 
                  ? 'border-primary border-2 shadow-xl scale-105' 
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-bold">
                  Популярный
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">₽</span>
                </div>
                <p className="text-sm text-muted-foreground">за весь марафон</p>
              </CardHeader>

              <CardContent className="space-y-4 pb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Icon 
                      name="CheckCircle2" 
                      size={20} 
                      className={plan.popular ? 'text-primary' : 'text-secondary'} 
                    />
                    <span className="text-sm flex-1">{feature}</span>
                  </div>
                ))}

                <Button 
                  className={`w-full mt-6 rounded-full ${
                    plan.popular ? '' : 'bg-secondary hover:bg-secondary/90'
                  }`}
                  size="lg"
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-6 py-3 rounded-full">
            <Icon name="Shield" size={20} className="text-secondary" />
            <span className="text-sm font-semibold">Гарантия возврата денег в течение 7 дней</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
