
import React from 'react';
import { AppSection } from '../types';

interface NavbarProps {
  currentSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { id: AppSection.Home, label: 'Главная' },
    { id: AppSection.OfficialInvites, label: 'Приглашения' },
    { id: AppSection.DigitalInvites, label: 'Цифровой Дизайн' },
    { id: AppSection.DecorDesign, label: 'Декор и Фотозоны' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate(AppSection.Home)}>
            <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-amber-500">
              BirthdayAI
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
