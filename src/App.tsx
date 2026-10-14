import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ChefHat, Phone, Clock, ArrowDown } from 'lucide-react';
import { PIZZA_MENU, type PizzaItem } from './data/pizzas';
import { PizzaCard } from './components/PizzaCard';

type CategoryFilter = 'All' | 'Veg Pizza' | 'Pizza Mania' | 'Speciality & New' | 'Classic & Exotic';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPizzas = useMemo(() => {
    return PIZZA_MENU.filter((pizza) => {
      const matchesCategory =
        activeCategory === 'All' || pizza.category === activeCategory;
      const matchesSearch = pizza.name
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const scrollToMenu = () => {
    const menuEl = document.getElementById('pizza-menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-[#DC2626] selection:text-white">
      {/* =========================================================================
          A. HEADER (Top Bar Contract: 1-line brand, minimal nav, quick action)
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Zone */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#"
              className="group flex items-baseline gap-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DC2626] rounded-md px-1"
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#DC2626] group-hover:text-red-700 transition-colors">
                Laziz
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                Pizza
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] self-center ml-0.5"></span>
            </a>
          </div>

          {/* Minimal Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600"
          >
            <button
              type="button"
              onClick={scrollToMenu}
              className="hover:text-[#DC2626] transition-colors whitespace-nowrap cursor-pointer"
            >
              Our Pizzas
            </button>
            <a
              href="#about"
              className="hover:text-[#DC2626] transition-colors whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#crust-addons"
              className="hover:text-[#DC2626] transition-colors whitespace-nowrap"
            >
              Crust & Add-ons
            </a>
          </nav>

          {/* Contact / Info (Digital Menu, phone call for inquiries only) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href="tel:9026727522"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors whitespace-nowrap"
              title="Call for inquiries"
            >
              <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="hidden sm:inline">Inquiries:</span>
              <span className="font-mono tabular-nums">9026727522</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* =========================================================================
            B. HERO SECTION
            ========================================================================= */}
        <section className="relative overflow-hidden bg-stone-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/hero_pizza_banner_1791992144821.jpg"
              alt="Artisanal freshly baked Laziz Pizza with stretching mozzarella"
              className="w-full h-full object-cover object-center opacity-45 transform scale-102"
              loading="eager"
            />
            {/* Ambient gradients for high contrast reading */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
                <ChefHat className="w-4 h-4" />
                <span>Authentic Wood-Fired & Stone-Baked Recipes</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-balance">
                Explore Our Pizzas
              </h1>

              <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed max-w-xl text-pretty">
                Choose your favourite pizza and size.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToMenu}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#DC2626] hover:bg-red-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <span>View Menu</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </button>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 font-medium bg-white/10 backdrop-blur-xs px-4 py-3 rounded-xl border border-white/10">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Freshly Baked in 20 Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            C. PIZZA MENU SECTION
            ========================================================================= */}
        <section id="pizza-menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                Digital Menu
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
                Our Pizza Collection
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1.5">
                Tap on <span className="font-semibold text-stone-900">S</span>,{' '}
                <span className="font-semibold text-stone-900">M</span>, or{' '}
                <span className="font-semibold text-stone-900">L</span> on any pizza card to view its price.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72 relative">
              <label htmlFor="pizza-search" className="sr-only">
                Search pizzas by name
              </label>
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                id="pizza-search"
                type="text"
                placeholder="Search pizzas by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm placeholder:text-stone-400 text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Controls */}
          <div className="py-6 flex items-center justify-between flex-wrap gap-3">
            <div
              role="tablist"
              aria-label="Filter pizzas by category"
              className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto max-w-full"
            >
              {(['All', 'Veg Pizza', 'Pizza Mania', 'Speciality & New', 'Classic & Exotic'] as CategoryFilter[]).map(
                (category) => {
                  const isActive = activeCategory === category;
                  const count =
                    category === 'All'
                      ? PIZZA_MENU.length
                      : PIZZA_MENU.filter((p) => p.category === category).length;

                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-white text-stone-900 shadow-xs'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                      }`}
                    >
                      {category}
                      <span
                        className={`ml-1.5 text-xs font-semibold tabular-nums ${
                          isActive ? 'text-[#DC2626]' : 'text-stone-400'
                        }`}
                      >
                        ({count})
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            <div className="text-xs text-stone-500 font-medium">
              Showing <span className="font-bold text-stone-800 tabular-nums">{filteredPizzas.length}</span> of{' '}
              <span className="font-bold text-stone-800 tabular-nums">{PIZZA_MENU.length}</span> pizzas
            </div>
          </div>

          {/* Pizza Grid */}
          {filteredPizzas.length > 0 ? (
            <div className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredPizzas.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-2xl border border-stone-200/70 p-8">
              <p className="text-base font-semibold text-stone-700">
                No pizzas match your search for "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-bold hover:bg-stone-800 transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Crust & Extra Cheese Reference from physical menu */}
          <div
            id="crust-addons"
            className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-stone-200/90 shadow-xs"
          >
            <div className="flex items-center gap-2 text-[#DC2626] font-bold text-sm uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Official Menu Add-on Pricing</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
              Extra Cheese & Crust Options
            </h3>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Customize any pizza order at the counter with our authentic cheese and crust add-ons.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Extra Cheese</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Additional layer of melted mozzarella</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs sm:text-sm font-bold text-stone-800">
                  <span>S: ₹20</span>
                  <span className="text-stone-300">|</span>
                  <span>M: ₹30</span>
                  <span className="text-stone-300">|</span>
                  <span>L: ₹40</span>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Cheese Burst & Thin Crust</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Molten cheese center or hand-stretched crust</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs sm:text-sm font-bold text-stone-800">
                  <span>S: ₹80</span>
                  <span className="text-stone-300">|</span>
                  <span>M: ₹100</span>
                  <span className="text-stone-300">|</span>
                  <span>L: ₹150</span>
                </div>
              </div>
            </div>
          </div>

          {/* About / Brand Story */}
          <div
            id="about"
            className="mt-8 p-6 sm:p-8 bg-amber-50/60 rounded-2xl border border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                Pure Vegetarian & Quality Crafted
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                Fresh Ingredients, Made Daily
              </h3>
              <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
                At Laziz Pizza, every dough is kneaded fresh, layered with rich Italian tomato herbs, topped with
                farm-fresh vegetables, golden corn, spiced cottage paneer, and premium melted mozzarella.
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <span className="text-xs text-stone-500 font-semibold block">Preparation Time</span>
              <span className="text-base font-bold text-stone-900 font-display">Allow 20 Mins to Serve</span>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          D. FOOTER
          ========================================================================= */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
            {/* Laziz Pizza branding */}
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-extrabold tracking-tight text-[#DC2626]">
                Laziz
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Pizza
              </span>
            </div>

            <p className="text-xs text-stone-400 text-center sm:text-right">
              Digital Menu Only · Prices in Indian Rupees (₹)
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
            <div>
              © {new Date().getFullYear()} Laziz Pizza. All rights reserved.
            </div>
            <div>
              For takeaway inquiries & advance notice: <a href="tel:9026727522" className="text-stone-300 font-mono hover:underline">9026727522</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
