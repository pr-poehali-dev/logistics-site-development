import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [cargoType, setCargoType] = useState('');
  const [weight, setWeight] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (fromCity && toCity && weight) {
      const basePrice = 50;
      const pricePerKg = 15;
      const distance = Math.floor(Math.random() * 1000) + 100;
      const total = basePrice + (parseFloat(weight) * pricePerKg) + (distance * 0.5);
      setCalculatedPrice(total);
    }
  };

  const services = [
    {
      icon: 'Truck',
      title: 'Автоперевозки',
      description: 'Доставка грузов по всей России и СНГ',
      features: ['Полная загрузка', 'Сборные грузы', 'Негабаритные грузы']
    },
    {
      icon: 'Package',
      title: 'Экспедирование',
      description: 'Полное сопровождение грузов',
      features: ['Таможенное оформление', 'Документооборот', 'Страхование']
    },
    {
      icon: 'Warehouse',
      title: 'Складские услуги',
      description: 'Хранение и обработка грузов',
      features: ['Температурный режим', 'Современные склады', 'Упаковка']
    }
  ];

  const fleet = [
    { type: 'Фуры', count: 45, capacity: '20 тонн' },
    { type: 'Среднетоннажные', count: 28, capacity: '10 тонн' },
    { type: 'Малотоннажные', count: 35, capacity: '3 тонны' },
    { type: 'Рефрижераторы', count: 18, capacity: '15 тонн' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-logistics-light to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-logistics-primary to-logistics-secondary rounded-lg flex items-center justify-center">
                <Icon name="Truck" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-logistics-dark font-inter">LogisticsPro</h1>
                <p className="text-sm text-gray-600">Ваш надёжный партнёр в логистике</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-logistics-dark hover:text-logistics-primary transition-colors">Услуги</a>
              <a href="#fleet" className="text-logistics-dark hover:text-logistics-primary transition-colors">Автопарк</a>
              <a href="#tracking" className="text-logistics-dark hover:text-logistics-primary transition-colors">Отслеживание</a>
              <a href="#about" className="text-logistics-dark hover:text-logistics-primary transition-colors">О нас</a>
              <a href="#contact" className="text-logistics-dark hover:text-logistics-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-logistics-primary hover:bg-logistics-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-logistics-dark mb-6 font-inter">
                Профессиональная логистика 
                <span className="block text-logistics-primary">по всей России</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Быстрая и надёжная доставка грузов с полным контролем на каждом этапе. 
                Современный автопарк и опытная команда для решения любых логистических задач.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-logistics-primary hover:bg-logistics-primary/90">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-logistics-secondary text-logistics-secondary hover:bg-logistics-secondary hover:text-white">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть видео
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="/img/21af384b-17aa-465d-92a9-0922393c0c1c.jpg" 
                alt="Логистический центр" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-logistics-dark mb-4 font-inter">Калькулятор стоимости</h3>
            <p className="text-gray-600">Узнайте примерную стоимость доставки вашего груза</p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calculator" className="mr-2 text-logistics-primary" />
                Расчёт доставки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Откуда</label>
                  <Input 
                    placeholder="Москва" 
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Куда</label>
                  <Input 
                    placeholder="Санкт-Петербург" 
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип груза</label>
                  <Select value={cargoType} onValueChange={setCargoType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Генеральные грузы</SelectItem>
                      <SelectItem value="oversized">Негабаритные</SelectItem>
                      <SelectItem value="dangerous">Опасные</SelectItem>
                      <SelectItem value="refrigerated">Рефрижераторные</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Вес (кг)</label>
                  <Input 
                    type="number" 
                    placeholder="1000" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Button 
                  onClick={calculatePrice}
                  className="bg-logistics-primary hover:bg-logistics-primary/90"
                >
                  Рассчитать стоимость
                </Button>
                
                {calculatedPrice && (
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Примерная стоимость:</p>
                    <p className="text-2xl font-bold text-logistics-primary">
                      {calculatedPrice.toLocaleString()} ₽
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-logistics-dark mb-4 font-inter">Наши услуги</h3>
            <p className="text-gray-600">Полный спектр логистических услуг для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-logistics-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={service.icon} className="text-logistics-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="Check" className="text-green-500 mr-2" size={16} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-logistics-dark mb-6 font-inter">Современный автопарк</h3>
              <p className="text-gray-600 mb-8">
                Более 126 единиц техники различной грузоподъёмности. 
                Все автомобили оснащены системами GPS-мониторинга и поддерживаются в идеальном состоянии.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {fleet.map((vehicle, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-logistics-dark">{vehicle.type}</h4>
                      <Badge variant="secondary">{vehicle.count} ед.</Badge>
                    </div>
                    <p className="text-sm text-gray-600">до {vehicle.capacity}</p>
                  </div>
                ))}
              </div>
              
              <Button className="mt-6 bg-logistics-primary hover:bg-logistics-primary/90">
                <Icon name="FileText" size={16} className="mr-2" />
                Подробнее о флоте
              </Button>
            </div>
            
            <div>
              <img 
                src="/img/dd9fc9c6-7d5a-4d35-92e9-769fbb48dd45.jpg" 
                alt="Автопарк компании" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="py-16 bg-logistics-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-inter">Отслеживание грузов</h3>
            <p className="text-gray-300">Контролируйте местоположение вашего груза в режиме реального времени</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <Input 
                    placeholder="Введите номер накладной" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Button className="bg-logistics-primary hover:bg-logistics-primary/90">
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-logistics-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-logistics-primary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">GPS-мониторинг</h4>
              <p className="text-gray-300">Точное местоположение транспорта</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-logistics-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-logistics-primary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Онлайн-уведомления</h4>
              <p className="text-gray-300">Получайте уведомления о статусе</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-logistics-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-logistics-primary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Безопасность</h4>
              <p className="text-gray-300">Полный контроль сохранности груза</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-logistics-dark mb-4 font-inter">География работы</h3>
            <p className="text-gray-600">Мы работаем по всей России и странам СНГ</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: 'Центральный ФО', cities: 18, icon: 'Building' },
              { region: 'Северо-Западный ФО', cities: 12, icon: 'Compass' },
              { region: 'Южный ФО', cities: 15, icon: 'Sun' },
              { region: 'Сибирский ФО', cities: 22, icon: 'Mountain' }
            ].map((region, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-logistics-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={region.icon} className="text-logistics-secondary" size={24} />
                  </div>
                  <h4 className="font-semibold text-logistics-dark mb-2">{region.region}</h4>
                  <p className="text-sm text-gray-600">{region.cities} городов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-logistics-dark mb-4 font-inter">Контакты</h3>
            <p className="text-gray-600">Свяжитесь с нами для получения консультации</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-logistics-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-logistics-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-sm text-gray-500">Круглосуточно</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-logistics-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-logistics-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">info@logisticspro.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-logistics-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-logistics-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Адрес</h4>
                <p className="text-gray-600">Москва, ул. Логистическая, 15</p>
                <p className="text-sm text-gray-500">Офис и склад</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-logistics-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-logistics-primary to-logistics-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Truck" className="text-white" size={20} />
                </div>
                <h4 className="text-xl font-bold">LogisticsPro</h4>
              </div>
              <p className="text-gray-400">Надёжная логистика для вашего бизнеса</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Автоперевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Экспедирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Складские услуги</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@logisticspro.ru</p>
                <p>Москва, ул. Логистическая, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LogisticsPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}