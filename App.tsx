
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import OfficialInviteGenerator from './components/OfficialInviteGenerator';
import DecorPlanner from './components/DecorPlanner';
import DigitalCards from './components/DigitalCards';
import { AppSection } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.Home);

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.Home:
        return (
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <div className="mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-wider uppercase mb-6">
                Создано для ваших особенных моментов
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                Идеальная вечеринка <br /> начинается <span className="text-purple-600">с ИИ</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                Генерируйте профессиональные приглашения, планируйте дизайн фотозон и оформление зала с помощью нашего интеллектуального сервиса.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setCurrentSection(AppSection.OfficialInvites)}
                  className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all shadow-xl hover:shadow-purple-200"
                >
                  Создать приглашение
                </button>
                <button 
                  onClick={() => setCurrentSection(AppSection.DecorDesign)}
                  className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all"
                >
                  Идеи оформления
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Официальные тексты</h3>
                <p className="text-slate-500">Безупречный тон и стиль для печатных приглашений гостям.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Визуализация декора</h3>
                <p className="text-slate-500">Идеи для фотозон и ресторанов, которые удивят ваших гостей.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Digital-приглашения</h3>
                <p className="text-slate-500">Удобные электронные карточки для моментальной рассылки.</p>
              </div>
            </div>
          </div>
        );
      case AppSection.OfficialInvites:
        return <div className="py-12"><OfficialInviteGenerator /></div>;
      case AppSection.DigitalInvites:
        return <div className="py-12"><DigitalCards /></div>;
      case AppSection.DecorDesign:
        return <div className="py-12"><DecorPlanner /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentSection={currentSection} onNavigate={setCurrentSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <span className="text-2xl font-serif font-bold text-white mb-4 block">BirthdayAI</span>
            <p className="max-w-xs">
              Ваш персональный помощник в мире ивент-дизайна. Мы объединяем технологии и творчество для создания незабываемых праздников.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Разделы</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer" onClick={() => setCurrentSection(AppSection.OfficialInvites)}>Приглашения</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setCurrentSection(AppSection.DecorDesign)}>Декор</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setCurrentSection(AppSection.DigitalInvites)}>Digital</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Связь</h4>
            <ul className="space-y-2">
              <li>info@birthdayai.com</li>
              <li>+7 (999) 123-45-67</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} BirthdayAI. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default App;
