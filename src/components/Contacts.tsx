import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacts" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:info@yogaflow.ru" 
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Email</div>
                      <div className="font-semibold">info@yogaflow.ru</div>
                    </div>
                  </a>

                  <a 
                    href="tel:+79001234567" 
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Телефон</div>
                      <div className="font-semibold">+7 (900) 123-45-67</div>
                    </div>
                  </a>

                  <a 
                    href="https://t.me/yogaflow" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Telegram</div>
                      <div className="font-semibold">@yogaflow</div>
                    </div>
                  </a>

                  <a 
                    href="https://instagram.com/yogaflow" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="Instagram" size={24} />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Instagram</div>
                      <div className="font-semibold">@yogaflow</div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-sm opacity-80 mb-2">Режим работы:</div>
                  <div className="font-semibold">Пн-Вс: 9:00 - 21:00 (МСК)</div>
                </div>
              </div>

              <div className="bg-accent/50 p-8 rounded-3xl">
                <h4 className="font-bold mb-4">Часто задаваемые вопросы:</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Нужна ли физическая подготовка?</div>
                    <div className="text-muted-foreground">Нет, марафон подходит для любого уровня</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Что нужно для занятий?</div>
                    <div className="text-muted-foreground">Коврик для йоги и удобная одежда</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Можно ли вернуть деньги?</div>
                    <div className="text-muted-foreground">Да, в течение первых 7 дней</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Записаться на марафон</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Ваше имя *</label>
                  <Input 
                    required
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">Email *</label>
                  <Input 
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">Телефон *</label>
                  <Input 
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем опыте в йоге и целях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
