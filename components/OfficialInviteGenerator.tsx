
import React, { useState } from 'react';
import { generateInvitationText } from '../services/geminiService';
import { InvitationData } from '../types';

const OfficialInviteGenerator: React.FC = () => {
  const [formData, setFormData] = useState<InvitationData>({
    name: '',
    date: '',
    time: '',
    location: '',
    style: 'Классический торжественный',
  });
  const [generatedText, setGeneratedText] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const text = await generateInvitationText(formData);
      setGeneratedText(text);
    } catch (error) {
      console.error(error);
      alert('Ошибка при генерации текста');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
      <h2 className="text-3xl font-serif font-bold mb-6 text-slate-800 border-b pb-4">Официальные приглашения</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Имя именинника</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2.5 border"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Дата</label>
              <input
                type="date"
                required
                className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2.5 border"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Время</label>
              <input
                type="time"
                required
                className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2.5 border"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Место проведения</label>
            <input
              type="text"
              required
              placeholder="Напр. Ресторан 'Золотой Век'"
              className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2.5 border"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Стиль текста</label>
            <select
              className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2.5 border"
              value={formData.style}
              onChange={(e) => setFormData({ ...formData, style: e.target.value })}
            >
              <option>Классический торжественный</option>
              <option>Современный лаконичный</option>
              <option>Поэтический</option>
              <option>С юмором</option>
              <option>Минимализм</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? 'Создаем текст...' : 'Сгенерировать приглашение'}
          </button>
        </form>

        <div className="bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-200 min-h-[300px] relative">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Результат</h3>
          {generatedText ? (
            <div className="prose prose-purple whitespace-pre-wrap text-slate-700 font-serif italic text-lg leading-relaxed">
              {generatedText}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400 text-center italic">
              Заполните форму, чтобы увидеть текст вашего идеального приглашения
            </div>
          )}
          {generatedText && (
            <button 
              onClick={() => navigator.clipboard.writeText(generatedText)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-slate-50 transition"
              title="Копировать"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficialInviteGenerator;
