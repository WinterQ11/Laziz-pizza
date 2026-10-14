export type PizzaSize = 'S' | 'M' | 'L';

export interface PizzaItem {
  id: string;
  name: string;
  category: 'Veg Pizza' | 'Pizza Mania' | 'Speciality & New' | 'Classic & Exotic';
  prices: {
    S: number | null;
    M: number | null;
    L: number | null;
  };
  image: string;
  sourceNote?: string;
}

// Master Pizza Menu extracted from Laziz Pizza menu images and delivery showcase:
// Each pizza image depicts the exact ingredients from the pizza's name.
export const PIZZA_MENU: PizzaItem[] = [
  // --- New Additions from Laziz Pizza Showcase ---
  {
    id: 'capsicum-paneer-pizza',
    name: 'Capsicum Paneer Pizza',
    category: 'Speciality & New',
    prices: { S: 142, M: 199, L: 269 },
    image: '/src/assets/images/capsicum_paneer_pizza_1791993015221.jpg',
    sourceNote: 'Featured special with diced cottage cheese and crisp capsicum',
  },
  {
    id: 'peppy-paneer-pizza',
    name: 'Peppy Paneer Pizza',
    category: 'Speciality & New',
    prices: { S: 129, M: 199, L: 269 },
    image: '/src/assets/images/paneer_tikka_pizza_1791992147492.jpg',
    sourceNote: 'Paneer cubes, red paprika, and crisp capsicum',
  },
  {
    id: 'paneer-makhani-pizza',
    name: 'Paneer Makhani Pizza',
    category: 'Speciality & New',
    prices: { S: 129, M: 199, L: 269 },
    image: '/src/assets/images/paneer_makhani_pizza_1791993014064.jpg',
    sourceNote: 'Paneer tossed in rich creamy butter makhani sauce',
  },
  {
    id: 'desi-makhani-pizza',
    name: 'Desi Makhani Pizza',
    category: 'Speciality & New',
    prices: { S: 129, M: 199, L: 269 },
    image: '/src/assets/images/paneer_makhani_pizza_1791993014064.jpg',
    sourceNote: 'Desi makhani gravy with onion, capsicum, and paneer',
  },
  {
    id: 'laziz-khas-italian-pizza',
    name: 'Laziz Khas Italian Pizza',
    category: 'Speciality & New',
    prices: { S: 129, M: 199, L: 269 },
    image: '/src/assets/images/four_season_pizza_1791993015631.jpg',
    sourceNote: 'House Italian pizza with olives, corn, peppers, and herbs',
  },
  {
    id: 'veg-spicy-pizza',
    name: 'Veg Spicy Pizza',
    category: 'Speciality & New',
    prices: { S: 129, M: 199, L: 269 },
    image: '/src/assets/images/spicy_fusion_pizza_1791993013185.jpg',
    sourceNote: 'Red chilies, jalapeños, sweet corn, and spicy seasoning',
  },

  // --- Newer Menu: Veg Pizza ---
  {
    id: 'margherita',
    name: 'Margherita',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/margherita_pizza_1791992148669.jpg',
  },
  {
    id: 'laziz-desi',
    name: 'Laziz Desi',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/paneer_makhani_pizza_1791993014064.jpg',
  },
  {
    id: 'schezwan',
    name: 'Schezwan',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/spicy_fusion_pizza_1791993013185.jpg',
  },
  {
    id: 'four-season',
    name: 'Four Season',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/four_season_pizza_1791993015631.jpg',
  },
  {
    id: 'laziz-khas',
    name: 'Laziz Khas',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/farmhouse_veggie_pizza_1791992148231.jpg',
  },
  {
    id: 'creamy-chees',
    name: 'Creamy Chees',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/cheese_burst_pizza_1791992149596.jpg',
  },
  {
    id: 'simple-veg',
    name: 'Simple Veg',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/capsicum_pizza_1791992952701.jpg',
  },
  {
    id: 'tomato-corn',
    name: 'Tomato & Corn',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/tomato_corn_pizza_1791993013441.jpg',
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/farmhouse_veggie_pizza_1791992148231.jpg',
  },
  {
    id: 'corn-delight',
    name: 'Corn Delight',
    category: 'Veg Pizza',
    prices: { S: 119, M: 179, L: 249 },
    image: '/src/assets/images/golden_corn_pizza_1791992950953.jpg',
  },
  {
    id: 'carnival',
    name: 'Carnival',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/spicy_fusion_pizza_1791993013185.jpg',
  },
  {
    id: 'maxican',
    name: 'Maxican',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/spicy_fusion_pizza_1791993013185.jpg',
  },
  {
    id: 'veg-spicy-fusion',
    name: 'Veg Spicy Fusion',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/spicy_fusion_pizza_1791993013185.jpg',
  },
  {
    id: 'mushroom-paprika',
    name: 'Mushroom Paprika',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/mushroom_paprika_pizza_1791992952764.jpg',
  },
  {
    id: 'tikka-paneer',
    name: 'Tikka Paneer',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/paneer_tikka_pizza_1791992147492.jpg',
  },
  {
    id: 'paneer-paprika',
    name: 'Paneer Paprika',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/paneer_tikka_pizza_1791992147492.jpg',
  },
  {
    id: 'form-house',
    name: 'Form House',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/farmhouse_veggie_pizza_1791992148231.jpg',
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/paneer_tikka_pizza_1791992147492.jpg',
  },
  {
    id: 'indian-tandoorie',
    name: 'Indian Tandoorie',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/paneer_tikka_pizza_1791992147492.jpg',
  },
  {
    id: 'veg-extra-vaganza',
    name: 'Veg Extra Vaganza',
    category: 'Veg Pizza',
    prices: { S: 129, M: 189, L: 259 },
    image: '/src/assets/images/farmhouse_veggie_pizza_1791992148231.jpg',
  },

  // --- Newer Menu: Pizza Mania ---
  {
    id: 'onion-pizza',
    name: 'Onion Pizza',
    category: 'Pizza Mania',
    prices: { S: 109, M: 169, L: 239 },
    image: '/src/assets/images/onion_pizza_1791992951199.jpg',
  },
  {
    id: 'capsicum-pizza',
    name: 'Capsicum Pizza',
    category: 'Pizza Mania',
    prices: { S: 109, M: 169, L: 239 },
    image: '/src/assets/images/capsicum_pizza_1791992952701.jpg',
  },
  {
    id: 'tomato-pizza',
    name: 'Tomato Pizza',
    category: 'Pizza Mania',
    prices: { S: 109, M: 169, L: 239 },
    image: '/src/assets/images/tomato_pizza_1791992951653.jpg',
  },
  {
    id: 'golden-corn-pizza',
    name: 'Golden Corn Pizza',
    category: 'Pizza Mania',
    prices: { S: 109, M: 169, L: 239 },
    image: '/src/assets/images/golden_corn_pizza_1791992950953.jpg',
  },
  {
    id: 'cheesy-pizza',
    name: 'Cheesy Pizza',
    category: 'Pizza Mania',
    prices: { S: 109, M: 169, L: 239 },
    image: '/src/assets/images/margherita_pizza_1791992148669.jpg',
  },

  // --- Recovered from Older Menu ---
  {
    id: 'double-cheese-pizza',
    name: 'Double Cheese Pizza',
    category: 'Classic & Exotic',
    prices: { S: 110, M: 170, L: 240 },
    image: '/src/assets/images/cheese_burst_pizza_1791992149596.jpg',
    sourceNote: 'Recovered from Classic Pizza menu',
  },
  {
    id: 'classic-pizza',
    name: 'Classic',
    category: 'Classic & Exotic',
    prices: { S: 110, M: 170, L: 240 },
    image: '/src/assets/images/margherita_pizza_1791992148669.jpg',
    sourceNote: 'Recovered from Exotic Pizza menu',
  },
  {
    id: 'veg-super',
    name: 'Veg Super',
    category: 'Classic & Exotic',
    prices: { S: 110, M: 170, L: 240 },
    image: '/src/assets/images/farmhouse_veggie_pizza_1791992148231.jpg',
    sourceNote: 'Recovered from Exotic Pizza menu',
  },
  {
    id: 'veg-paprika',
    name: 'Veg Paprika',
    category: 'Classic & Exotic',
    prices: { S: 110, M: 170, L: 240 },
    image: '/src/assets/images/mushroom_paprika_pizza_1791992952764.jpg',
    sourceNote: 'Recovered from Exotic Pizza menu',
  },
  {
    id: 'veggie-paradise',
    name: 'Veggie Paradise',
    category: 'Classic & Exotic',
    prices: { S: 110, M: 170, L: 240 },
    image: '/src/assets/images/farmhouse_veggie_pizza_1791992148231.jpg',
    sourceNote: 'Recovered from Exotic Pizza menu',
  },
  {
    id: 'veggie-delight-pizza',
    name: 'Veggie Delight Pizza',
    category: 'Classic & Exotic',
    prices: { S: 110, M: 170, L: 240 },
    image: '/src/assets/images/farmhouse_veggie_pizza_1791992148231.jpg',
    sourceNote: 'Recovered from Exotic Pizza menu',
  },
  {
    id: 'cheese-burst-pizza',
    name: 'Cheese Burst Pizza',
    category: 'Classic & Exotic',
    prices: { S: 180, M: 250, L: 320 },
    image: '/src/assets/images/cheese_burst_pizza_1791992149596.jpg',
    sourceNote: 'Recovered from Exotic Pizza menu',
  },
];
