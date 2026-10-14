import React, { useState } from 'react';
import type { PizzaItem, PizzaSize } from '../data/pizzas';

interface PizzaCardProps {
  pizza: PizzaItem;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('S');

  const currentPrice = pizza.prices[selectedSize];

  return (
    <article className="group bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-red-200 transition-all duration-200 p-5 flex flex-col justify-between gap-5 h-full">
      {/* Pizza Name */}
      <div>
        <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 leading-snug tracking-tight group-hover:text-[#DC2626] transition-colors">
          {pizza.name}
        </h3>
      </div>

      <div className="space-y-3 pt-2">
        {/* Size selector: S, M, L */}
        <div className="flex items-center justify-between p-1 bg-stone-100 rounded-xl">
          {(['S', 'M', 'L'] as PizzaSize[]).map((size) => {
            const isSelected = selectedSize === size;
            const isAvailable = pizza.prices[size] !== null;

            return (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                disabled={!isAvailable}
                aria-label={`${pizza.name} size ${size}`}
                aria-pressed={isSelected}
                className={`flex-1 py-1.5 px-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-150 whitespace-nowrap text-center cursor-pointer ${
                  isSelected
                    ? 'bg-[#DC2626] text-white shadow-xs'
                    : isAvailable
                    ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/70'
                    : 'text-stone-400 cursor-not-allowed opacity-50'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        {/* Price for currently selected size */}
        <div className="flex items-baseline justify-between pt-2 border-t border-stone-100">
          <span className="text-xs uppercase tracking-wider font-semibold text-stone-600">
            {selectedSize === 'S' ? 'Small' : selectedSize === 'M' ? 'Medium' : 'Large'}
          </span>
          <div className="text-xl sm:text-2xl font-extrabold text-stone-900 tabular-nums">
            {currentPrice !== null ? `₹${currentPrice}` : 'Unavailable'}
          </div>
        </div>
      </div>
    </article>
  );
};
