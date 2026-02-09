'use client';

import { useMemo, useState } from 'react';

const JUNK_FOODS = [
  'chips',
  'fries',
  'soda',
  'candy',
  'donut',
  'burger',
  'pizza',
  'hot dog',
  'ice cream',
  'milkshake',
  'cookie',
  'cake',
];

function normalizeFoodName(food) {
  return food.trim().toLowerCase();
}

export default function FoodChecker() {
  const [food, setFood] = useState('');
  const [submittedFood, setSubmittedFood] = useState('');

  const result = useMemo(() => {
    if (!submittedFood) return null;

    const normalizedFood = normalizeFoodName(submittedFood);
    const isJunk = JUNK_FOODS.includes(normalizedFood);

    return {
      normalizedFood,
      isJunk,
    };
  }, [submittedFood]);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedFood(food);
  }

  return (
    <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur-sm md:p-8">
      <h1 className="text-3xl font-extrabold text-slate-900">Junk or No</h1>
      <p className="mt-3 text-slate-600">
        Type a food name and the app will tell you if it&apos;s junk food.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label htmlFor="food" className="block text-sm font-semibold text-slate-700">
          Food item
        </label>
        <input
          id="food"
          type="text"
          placeholder="Try: apple, chips, soda..."
          value={food}
          onChange={(event) => setFood(event.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-lg shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
        />
        <button
          type="submit"
          className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Check Food
        </button>
      </form>

      {result && (
        <div
          className={`mt-6 rounded-xl border p-4 text-lg font-medium ${
            result.isJunk
              ? 'border-red-200 bg-red-50 text-red-700'
              : 'border-emerald-200 bg-emerald-50 text-emerald-700'
          }`}
        >
          <p>
            <span className="font-bold capitalize">{result.normalizedFood}</span>{' '}
            {result.isJunk ? 'is considered junk food.' : 'is not considered junk food.'}
          </p>
          <p className="mt-2 text-sm font-normal text-slate-600">
            Tip: this is a simple starter example using a small built-in list.
          </p>
        </div>
      )}

      <details className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
        <summary className="cursor-pointer font-semibold">See what foods are in the junk list</summary>
        <p className="mt-2">{JUNK_FOODS.join(', ')}</p>
      </details>
    </section>
  );
}
