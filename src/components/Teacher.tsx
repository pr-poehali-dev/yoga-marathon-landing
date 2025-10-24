import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Teacher = () => {
  const credentials = [
    {
      icon: 'Award',
      title: 'Сертифицированный преподаватель',
      description: 'RYT-500, Yoga Alliance'
    },
    {
      icon: 'Users',
      title: '5000+ учеников',
      description: 'По всему миру'
    },
    {
      icon: 'Calendar',
      title: '10 лет опыта',
      description: 'Преподавания йоги'
    },
    {
      icon: 'BookOpen',
      title: 'Автор методик',
      description: 'Для начинающих и продвинутых'
    }
  ];

  const expertise = [
    'Хатха-йога',
    'Виньяса-флоу',
    'Инь-йога',
    'Медитация и пранаяма',
    'Йога-терапия',
    'Философия йоги'
  ];

  return (
    <section id="teacher" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            О преподавателе
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с вашим проводником в мир йоги
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform -rotate-6"></div>
            <img 
              src="https://cdn.poehali.dev/projects/a739ae6c-4a72-4b3e-8900-2c96dac29ee1/files/845f03a9-7710-42e5-8fe4-71588ed80bc4.jpg" 
              alt="Юлия Светлова"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Юлия Светлова</h3>
              <p className="text-xl text-primary font-semibold mb-6">
                Основатель YogaFlow
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Привет! Я Юлия, и йога изменила мою жизнь 10 лет назад. Тогда я была 
                уставшим офисным работником с постоянными болями в спине и стрессом. 
                Йога стала моим спасением и новым призванием.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                За эти годы я помогла более 5000 людям открыть для себя силу йоги. 
                Моя миссия - сделать практику доступной, понятной и эффективной для 
                каждого, независимо от уровня подготовки и возраста.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={cred.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-1">{cred.title}</div>
                        <div className="text-xs text-muted-foreground">{cred.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="font-bold mb-4">Специализация:</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl">
              <p className="italic text-muted-foreground">
                "Йога - это не о том, чтобы коснуться пальцев ног. Это о том, что вы 
                узнаете на пути вниз."
              </p>
              <p className="mt-2 font-semibold">- Джигар Гор</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
