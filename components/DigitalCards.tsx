
import React from 'react';

const DigitalCards: React.FC = () => {
  const templates = [
    { name: 'Minimal Gold', color: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200' },
    { name: 'Night party', color: 'bg-slate-900', text: 'text-purple-300', border: 'border-purple-900' },
    { name: 'Pastel Dream', color: 'bg-pink-50', text: 'text-pink-800', border: 'border-pink-200' },
    { name: 'Modern Sage', color: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Шаблоны электронных приглашений</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Выберите стиль для ваших цифровых приглашений, которые можно отправить в мессенджерах или социальных сетях.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {templates.map((tpl, i) => (
          <div key={i} className={`group cursor-pointer aspect-[3/4] rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border ${tpl.border} ${tpl.color} p-6 flex flex-col items-center justify-center text-center`}>
            <div className={`text-3xl font-serif mb-4 ${tpl.text} italic`}>Birthday</div>
            <div className={`w-12 h-0.5 mb-4 ${tpl.text.replace('text', 'bg')} opacity-30`}></div>
            <p className={`text-sm tracking-widest uppercase ${tpl.text} opacity-70`}>You are invited</p>
            <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="bg-white/90 px-4 py-2 rounded-full text-sm font-bold shadow-sm text-slate-800">Использовать шаблон</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Персональный QR-код</h3>
          <p className="text-slate-600 mb-6">
            Мы создаем уникальный QR-код для вашего праздника. Гости смогут отсканировать его, чтобы увидеть местоположение, меню и подтвердить свое присутствие (RSVP).
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition">Сгенерировать QR</button>
        </div>
        <div className="w-48 h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DigitalCards;
