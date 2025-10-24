import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'Ольга Петрова',
      role: 'Маркетолог',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Лучший марафон, в котором я участвовала! Юля - потрясающий преподаватель, которая умеет мотивировать и поддерживать. За месяц я не только освоила базовые асаны, но и научилась медитировать.',
      date: 'Октябрь 2024'
    },
    {
      name: 'Екатерина Смирнова',
      role: 'Предприниматель',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Благодаря марафону я наконец-то избавилась от хронических болей в спине. Программа построена грамотно, нагрузка увеличивается постепенно. Планы питания - отдельная любовь!',
      date: 'Сентябрь 2024'
    },
    {
      name: 'Анастасия Волкова',
      role: 'Дизайнер',
      avatar: '🎨',
      rating: 5,
      text: 'Йога полностью изменила мою жизнь. Я стала спокойнее, увереннее в себе, улучшился сон. Записи уроков смотрю до сих пор, когда нужно расслабиться после тяжелого дня.',
      date: 'Август 2024'
    },
    {
      name: 'Мария Иванова',
      role: 'Учитель',
      avatar: '📚',
      rating: 5,
      text: 'Никогда не думала, что в 45 лет смогу так изменить свое тело. Гибкость вернулась, появилась легкость в движениях. Очень благодарна за поддержку и индивидуальный подход!',
      date: 'Июль 2024'
    },
    {
      name: 'Светлана Новикова',
      role: 'Врач',
      avatar: '⚕️',
      rating: 5,
      text: 'Как врач могу сказать - программа составлена профессионально и безопасно. Рекомендую всем своим пациентам для улучшения общего самочувствия и профилактики заболеваний.',
      date: 'Июнь 2024'
    },
    {
      name: 'Дарья Козлова',
      role: 'Фотограф',
      avatar: '📸',
      rating: 5,
      text: 'Марафон превзошел все ожидания! Материалы очень качественные, видео снято профессионально. За месяц похудела на 6 кг и обрела внутреннюю гармонию.',
      date: 'Май 2024'
    }
  ];

  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Отзывы участников
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 5000 человек уже прошли марафон и изменили свою жизнь
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div className="flex-1">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>

                <div className="text-xs text-muted-foreground">{review.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Присоединяйся к нашему сообществу!</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Более 5000 участников уже достигли своих целей. Стань частью нашей йога-семьи!
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Участников</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Средняя оценка</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Рекомендуют</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
