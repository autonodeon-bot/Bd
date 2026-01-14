
import React, { useState } from 'react';
import { generateDecorIdeas, generatePreviewImage } from '../services/geminiService';
import { DecorIdea } from '../types';

const DecorPlanner: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [ideas, setIdeas] = useState<DecorIdea | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme) return;
    setLoading(true);
    try {
      const result = await generateDecorIdeas(theme);
      setIdeas(result);
      
      const img = await generatePreviewImage(`Party decor theme ${theme}: ${result.photoZone}`);
      setPreviewImage(img);
    } catch (error) {
      console.error(error);
      alert('Не удалось сгенерировать идеи декора');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-4">Дизайн Оформления</h2>
          <p className="text-purple-100 mb-6 text-lg">
            Опишите тему вашего праздника, и наш ИИ предложит концепцию фотозоны и декора зала.
          </p>
          <form onSubmit={handleGenerate} className="flex gap-4">
            <input
              type="text"
              placeholder="Напр. Звездная ночь, Гэтсби, Тропики..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-amber-500 hover:bg-amber-400 text-purple-900 font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:scale-105 disabled:opacity-50"
            >
              {loading ? 'Планируем...' : 'Создать Концепт'}
            </button>
          </form>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path fill="#FBBF24" d="M47.1,-58.5C61.4,-47.1,73.6,-32.1,77.5,-15.5C81.4,1.1,77,19.3,68,34.7C59.1,50.1,45.5,62.8,29.8,69C14.1,75.1,-3.7,74.7,-20.9,68.9C-38.1,63.1,-54.7,51.8,-64.1,36.5C-73.6,21.1,-75.8,1.7,-71.4,-15.8C-67.1,-33.2,-56.1,-48.7,-41.8,-60.1C-27.5,-71.5,-9.8,-78.9,3.9,-84.3C17.6,-89.6,32.7,-70,47.1,-58.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      {ideas && (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">Дизайн Фотозоны</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                {ideas.photoZone}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">Оформление Зала</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                {ideas.hallDecor}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Цветовая Палитра</h3>
              <div className="flex flex-wrap gap-4">
                {ideas.colors.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border">
                    <div className="w-6 h-6 rounded-full border shadow-sm" style={{ backgroundColor: color.toLowerCase() }}></div>
                    <span className="text-sm font-medium text-slate-700 uppercase">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-24">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
                <span className="font-semibold text-slate-700">ИИ-Визуализация Концепта</span>
                {loading && <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-600 border-t-transparent"></div>}
              </div>
              <div className="aspect-[16/9] relative bg-slate-200 flex items-center justify-center">
                {previewImage ? (
                  <img src={previewImage} alt="Decor visualization" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-500">Визуализация появится здесь после генерации</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DecorPlanner;
