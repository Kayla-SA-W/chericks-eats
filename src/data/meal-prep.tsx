// === Types ===

export interface MealPrepOption {
  name: string;
  extraCost?: number;
}

export interface PastaAddOnProtein {
  name: string;
  price: number;
}

export interface ChatOption {
  label: string;
  value: string;
  extraInfo?: string;
}

export type ChatStepId =
  | 'welcome'
  | 'standard_days'
  | 'standard_plate_type'
  | 'standard_protein'
  | 'standard_pasta'
  | 'standard_pasta_protein'
  | 'standard_base'
  | 'standard_veggie'
  | 'standard_sauce'
  | 'standard_summary'
  | 'standard_confirm'
  | 'bundle_select'
  | 'bundle_summary'
  | 'crew_pack_select'
  | 'crew_pack_details'
  | 'crew_pack_breakfast'
  | 'crew_pack_lunch'
  | 'crew_pack_dinner'
  | 'crew_pack_snack'
  | 'crew_pack_oat_flavor'
  | 'crew_pack_greens_protein'
  | 'crew_pack_no_heat'
  | 'crew_pack_summary'
  | 'crew_pack_confirm'
  | 'dessert_select'
  | 'dessert_count'
  | 'dessert_summary'
  | 'dessert_confirm'
  | 'catering_redirect';

export interface MealPrepSelections {
  path: 'standard' | 'bundle' | 'catering' | 'crew_pack' | 'desserts' | null;
  // Standard
  days?: number;
  plateType?: 'protein' | 'pasta';
  protein?: string;
  pasta?: string;
  pastaProtein?: string;
  base?: string;
  veggie?: string;
  sauce?: string;
  // Bundle
  bundleType?: string;
  // Crew Pack
  crewPack?: string;
  crewBreakfast?: string;
  crewLunch?: string;
  crewDinner?: string;
  crewSnack?: string;
  crewOatFlavor?: string;
  crewGreensProtein?: string;
  crewNoHeatMeal?: string;
  // Desserts
  dessert?: string;
  dessertCount?: string;
}

export interface ChatStep {
  id: ChatStepId;
  botMessage: string | ((selections: MealPrepSelections) => string);
  options: ChatOption[] | 'day_counter' | null;
  getNextStep: (value: string, selections: MealPrepSelections) => ChatStepId;
}

// === Data Arrays ===

export const proteins: MealPrepOption[] = [
  { name: 'Lemon-Herb Roasted Chicken' },
  { name: 'Honey-Harissa Chicken' },
  { name: 'Teriyaki Chicken' },
  { name: 'Chimichurri Steak', extraCost: 2 },
  { name: 'Braised Beef Tips', extraCost: 2 },
  { name: 'Miso-Maple Salmon', extraCost: 3 },
];

export const bases: MealPrepOption[] = [
  { name: 'Jasmine Rice' },
  { name: 'Brown Rice' },
  { name: 'Quinoa' },
  { name: 'Roasted Sweet Potatoes' },
  { name: 'Cilantro-Lime Rice' },
];

export const veggies: MealPrepOption[] = [
  { name: 'Charred Broccoli' },
  { name: 'Honey-Roasted Carrots' },
  { name: 'Garlic Green Beans' },
  { name: 'Sauteed Spinach' },
  { name: 'Roasted Brussels Sprouts' },
];

export const sauces: MealPrepOption[] = [
  { name: 'Chimichurri' },
  { name: 'Sesame Tahini' },
  { name: 'Garlic Herb Oil' },
  { name: 'Honey Mustard' },
  { name: 'Teriyaki Glaze' },
  { name: 'Lemon Vinaigrette' },
];

export const pastas: MealPrepOption[] = [
  { name: 'Vodka Sauce Rigatoni' },
  { name: 'Spinach and Mushroom Cream Pasta' },
  { name: 'Four-Cheese Baked Ziti' },
  { name: 'Lemon Ricotta Pasta' },
];

export const pastaProteinAddOns: PastaAddOnProtein[] = [
  { name: 'Chicken', price: 5 },
  { name: 'Steak', price: 7 },
  { name: 'Salmon', price: 8 },
];

export interface CrewPack {
  name: string;
  description: string;
  price: number;
}

export const crewPacks: CrewPack[] = [
  { name: '3-Day Turnaround Pack', description: 'Includes 3 breakfasts, 3 lunches, 3 dinners, and 2 snacks', price: 90 },
  { name: '5-Day Reserve Crew Pack', description: 'Includes 5 breakfasts, 5 lunches, 5 dinners, and 5 snacks', price: 145 },
  { name: 'Layover Essentials Pack', description: 'Includes 1 breakfast, 2 no-heat meals, and 2 snacks', price: 55 },
];

export function getCrewPackPrice(packName: string): number {
  return crewPacks.find(p => p.name === packName)?.price ?? 0;
}

// === Crew Pack Menu Options ===

const crewPackBreakfasts = [
  'First Class Egg Bites',
  'Red-Eye Overnight Oats',
  'Morning Departure Protein Box',
  'Golden Hour Breakfast Bake',
];

const crewPackLunches = [
  'Cruise Control Citrus Chicken Bowl',
  'Mediterranean Turnaround Box',
  'Steady Flight Protein Bowl',
  'Clean Cabin Salmon Plate',
  'Flight Level Greens + Protein',
];

const crewPackDinners = [
  'Smooth Landing Herb Chicken',
  'Night Flight Bolognese',
  'Low-Sodium Teriyaki Touchdown',
  'Plant-Based Altitude Bowl',
];

const crewPackSnacks = [
  'Altitude Energy Box',
  'Clear Skies Yogurt Cup',
  'Runway Bites',
  'Flight Path Trail Mix',
];

const overnightOatFlavors = [
  'Vanilla Berry Cheesecake',
  'Peaches & Cream',
  'Strawberries & Cream',
  'Mango Coconut',
  'Maple Brown Sugar',
];

interface CrewPackRequirements {
  breakfasts: number;
  lunches: number;
  dinners: number;
  snacks: number;
  noHeatMeals: number;
}

function getCrewPackRequirements(packName: string): CrewPackRequirements {
  switch (packName) {
    case '3-Day Turnaround Pack':
      return { breakfasts: 1, lunches: 1, dinners: 1, snacks: 1, noHeatMeals: 0 };
    case '5-Day Reserve Crew Pack':
      return { breakfasts: 1, lunches: 1, dinners: 1, snacks: 1, noHeatMeals: 0 };
    case 'Layover Essentials Pack':
      return { breakfasts: 1, lunches: 0, dinners: 0, snacks: 1, noHeatMeals: 1 };
    default:
      return { breakfasts: 0, lunches: 0, dinners: 0, snacks: 0, noHeatMeals: 0 };
  }
}

type CrewCategory = 'crew_pack_breakfast' | 'crew_pack_lunch' | 'crew_pack_dinner' | 'crew_pack_no_heat' | 'crew_pack_snack';

function getNextCrewCategory(packName: string, currentCategory: CrewCategory): ChatStepId {
  const reqs = getCrewPackRequirements(packName);
  const order: { step: CrewCategory; count: number }[] = [
    { step: 'crew_pack_breakfast', count: reqs.breakfasts },
    { step: 'crew_pack_lunch', count: reqs.lunches },
    { step: 'crew_pack_dinner', count: reqs.dinners },
    { step: 'crew_pack_no_heat', count: reqs.noHeatMeals },
    { step: 'crew_pack_snack', count: reqs.snacks },
  ];
  const currentIndex = order.findIndex(c => c.step === currentCategory);
  for (let i = currentIndex + 1; i < order.length; i++) {
    if (order[i].count > 0) return order[i].step;
  }
  return 'crew_pack_summary';
}

// === Price Calculation ===

const BASE_PRICE_PER_DAY = 22;

export function calculateStandardTotal(selections: MealPrepSelections): number {
  const days = selections.days ?? 3;
  let pricePerDay = BASE_PRICE_PER_DAY;

  if (selections.plateType === 'protein' && selections.protein) {
    const protein = proteins.find(p => p.name === selections.protein);
    pricePerDay += protein?.extraCost ?? 0;
  }

  if (selections.plateType === 'pasta' && selections.pastaProtein && selections.pastaProtein !== 'none') {
    const addOn = pastaProteinAddOns.find(p => p.name === selections.pastaProtein);
    pricePerDay += addOn?.price ?? 0;
  }

  return pricePerDay * days;
}

function getBundlePrice(bundleType: string): string {
  switch (bundleType) {
    case 'Lifestyle Week - Option 1': return '$115';
    case 'Lifestyle Week - Option 2': return '$215';
    case 'Family Meal Prep': return '$275';
    default: return 'Contact for pricing';
  }
}

// === Summary Builders ===

function buildStandardSummary(s: MealPrepSelections): string {
  const lines = [
    `Here's your meal prep summary:`,
    ``,
    `Days: ${s.days}`,
    s.plateType === 'protein'
      ? `Protein: ${s.protein}`
      : `Pasta: ${s.pasta}${s.pastaProtein && s.pastaProtein !== 'none' ? ` + ${s.pastaProtein}` : ''}`,
    `Base: ${s.base}`,
    `Veggie: ${s.veggie}`,
    `Sauce: ${s.sauce}`,
    ``,
    `Estimated Total: $${calculateStandardTotal(s)}`,
  ];
  return lines.join('\n');
}

function buildBundleSummary(s: MealPrepSelections): string {
  const price = getBundlePrice(s.bundleType ?? '');
  const lines = [
    `Here's your bundle summary:`,
    ``,
    `Bundle: ${s.bundleType}`,
    `Price: ${price}`,
  ];

  if (s.bundleType === 'Small Gatherings') {
    lines.push('', 'Includes 2 pans of protein and 2 pans of bases.', 'Feeds 10-15 people.');
  } else if (s.bundleType === 'Lifestyle Week - Option 1') {
    lines.push('', 'Includes 5 protein plates and 2 pasta plates.');
  } else if (s.bundleType === 'Lifestyle Week - Option 2') {
    lines.push('', 'Includes 10 protein plates and 4 pasta plates.');
  } else if (s.bundleType === 'Family Meal Prep') {
    lines.push('', 'Includes 4 large entrees and 4 sides.');
  }

  lines.push('', 'Please email cherickseats@gmail.com to confirm your bundle order and schedule your prep date.');
  return lines.join('\n');
}

function buildCrewPackSummary(s: MealPrepSelections): string {
  const pack = crewPacks.find(p => p.name === s.crewPack);
  if (!pack) return '';
  const lines = [
    `Here's your crew pack summary:`,
    ``,
    `Pack: ${pack.name}`,
  ];
  if (s.crewBreakfast) lines.push(`Breakfast: ${s.crewBreakfast}${s.crewBreakfast === 'Red-Eye Overnight Oats' && s.crewOatFlavor ? ` - ${s.crewOatFlavor}` : ''}`);
  if (s.crewLunch) lines.push(`Lunch: ${s.crewLunch}${s.crewGreensProtein ? ` (${s.crewGreensProtein})` : ''}`);
  if (s.crewDinner) lines.push(`Dinner: ${s.crewDinner}`);
  if (s.crewNoHeatMeal) lines.push(`No-Heat Meal: ${s.crewNoHeatMeal}`);
  if (s.crewSnack) lines.push(`Snack: ${s.crewSnack}`);
  lines.push(``, `Total: $${pack.price}`);
  return lines.join('\n');
}

interface DessertType {
  name: string;
  counts: string[];
}

const dessertTypes: DessertType[] = [
  { name: 'Brownies', counts: ['12ct'] },
  { name: 'Cheesecake Cupcakes', counts: ['12ct'] },
  { name: 'Cake Batter Chocolate Chip Cookies', counts: ['12ct'] },
  { name: 'Gourmet Cupcakes', counts: ['12ct'] },
  { name: 'Truffles', counts: ['6ct', '12ct', '24ct'] },
  { name: 'Bon Bons', counts: ['6ct', '12ct', '24ct'] },
  { name: 'Cake Pop Shooters', counts: ['6ct', '12ct'] },
  { name: '6oz Jar Cakes', counts: ['6ct'] },
  { name: 'Chocolate Covered Strawberries', counts: ['6ct', '12ct'] },
  { name: 'Infused Chocolate Covered Strawberries', counts: ['6ct', '12ct'] },
];

export function getDessertCounts(dessertName: string): string[] {
  return dessertTypes.find(d => d.name === dessertName)?.counts ?? [];
}

function buildDessertSummary(s: MealPrepSelections): string {
  const lines = [
    `Here's your dessert order summary:`,
    ``,
    `Item: ${s.dessert} - ${s.dessertCount}`,
    ``,
    `Please email cherickseats@gmail.com to confirm your dessert order, including any flavor or customization preferences.`,
  ];
  return lines.join('\n');
}

// === Chat Steps State Machine ===

export const chatSteps: Record<ChatStepId, ChatStep> = {
  welcome: {
    id: 'welcome',
    botMessage: "Welcome to Cherick's Eats! How can I help you today?",
    options: [
      { label: 'Standard Meal Prep', value: 'standard' },
      { label: 'Meal Prep Bundles', value: 'bundle' },
      { label: 'Crew Packs', value: 'crew_pack' },
      { label: 'Desserts', value: 'desserts' },
      { label: 'Catering', value: 'catering' },
    ],
    getNextStep: (value) => {
      if (value === 'standard') return 'standard_days';
      if (value === 'bundle') return 'bundle_select';
      if (value === 'crew_pack') return 'crew_pack_select';
      if (value === 'desserts') return 'dessert_select';
      return 'catering_redirect';
    },
  },

  // --- Standard Meal Prep Flow ---

  standard_days: {
    id: 'standard_days',
    botMessage: 'How many days of meal prep would you like? (3-14 days)',
    options: 'day_counter',
    getNextStep: () => 'standard_plate_type',
  },

  standard_plate_type: {
    id: 'standard_plate_type',
    botMessage: 'Would you like a protein plate or a pasta plate?',
    options: [
      { label: 'Protein Plate', value: 'protein' },
      { label: 'Pasta Plate', value: 'pasta' },
    ],
    getNextStep: (value) => value === 'protein' ? 'standard_protein' : 'standard_pasta',
  },

  standard_protein: {
    id: 'standard_protein',
    botMessage: 'Choose your protein:',
    options: proteins.map(p => ({
      label: p.name,
      value: p.name,
      extraInfo: p.extraCost ? `+$${p.extraCost}/day` : undefined,
    })),
    getNextStep: () => 'standard_base',
  },

  standard_pasta: {
    id: 'standard_pasta',
    botMessage: 'Choose your pasta:',
    options: pastas.map(p => ({ label: p.name, value: p.name })),
    getNextStep: () => 'standard_pasta_protein',
  },

  standard_pasta_protein: {
    id: 'standard_pasta_protein',
    botMessage: 'Would you like to add a protein to your pasta?',
    options: [
      { label: 'No protein', value: 'none' },
      ...pastaProteinAddOns.map(p => ({
        label: p.name,
        value: p.name,
        extraInfo: `+$${p.price}/day`,
      })),
    ],
    getNextStep: () => 'standard_base',
  },

  standard_base: {
    id: 'standard_base',
    botMessage: 'Choose your base:',
    options: bases.map(b => ({ label: b.name, value: b.name })),
    getNextStep: () => 'standard_veggie',
  },

  standard_veggie: {
    id: 'standard_veggie',
    botMessage: 'Choose your veggie:',
    options: veggies.map(v => ({ label: v.name, value: v.name })),
    getNextStep: () => 'standard_sauce',
  },

  standard_sauce: {
    id: 'standard_sauce',
    botMessage: 'Choose your sauce:',
    options: sauces.map(s => ({ label: s.name, value: s.name })),
    getNextStep: () => 'standard_summary',
  },

  standard_summary: {
    id: 'standard_summary',
    botMessage: (selections) => buildStandardSummary(selections),
    options: [
      { label: 'Add to Cart', value: 'yes' },
      { label: 'Start Over', value: 'no' },
    ],
    getNextStep: (value) => value === 'yes' ? 'standard_confirm' : 'welcome',
  },

  standard_confirm: {
    id: 'standard_confirm',
    botMessage: "Your meal prep has been added to your cart!",
    options: [
      { label: 'View Cart', value: 'view_cart' },
      { label: 'Add Another', value: 'add_another' },
    ],
    getNextStep: () => 'welcome',
  },

  // --- Bundle Flow ---

  bundle_select: {
    id: 'bundle_select',
    botMessage: 'Which meal prep bundle are you interested in?',
    options: [
      { label: 'Small Gatherings', value: 'Small Gatherings', extraInfo: 'Feeds 10-15' },
      { label: 'Lifestyle Week - Option 1', value: 'Lifestyle Week - Option 1', extraInfo: '$115' },
      { label: 'Lifestyle Week - Option 2', value: 'Lifestyle Week - Option 2', extraInfo: '$215' },
      { label: 'Family Meal Prep', value: 'Family Meal Prep', extraInfo: '$275' },
    ],
    getNextStep: () => 'bundle_summary',
  },

  bundle_summary: {
    id: 'bundle_summary',
    botMessage: (selections) => buildBundleSummary(selections),
    options: null,
    getNextStep: () => 'welcome',
  },

  // --- Crew Packs ---

  crew_pack_select: {
    id: 'crew_pack_select',
    botMessage: 'Which crew pack would you like?',
    options: crewPacks.map(p => ({
      label: p.name,
      value: p.name,
      extraInfo: `$${p.price}`,
    })),
    getNextStep: () => 'crew_pack_details',
  },

  crew_pack_details: {
    id: 'crew_pack_details',
    botMessage: (selections) => {
      const pack = crewPacks.find(p => p.name === selections.crewPack);
      if (!pack) return '';
      return `Great choice! The ${pack.name} includes:\n\n${pack.description}\n\nLet's pick your meals!`;
    },
    options: [
      { label: "Let's Go", value: 'start' },
      { label: 'Choose Different Pack', value: 'back' },
    ],
    getNextStep: (value) => value === 'back' ? 'crew_pack_select' : 'crew_pack_breakfast',
  },

  crew_pack_breakfast: {
    id: 'crew_pack_breakfast',
    botMessage: 'Choose your breakfast:',
    options: crewPackBreakfasts.map(b => ({ label: b, value: b })),
    getNextStep: (value, selections) => {
      if (value === 'Red-Eye Overnight Oats') return 'crew_pack_oat_flavor';
      return getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_breakfast');
    },
  },

  crew_pack_lunch: {
    id: 'crew_pack_lunch',
    botMessage: 'Choose your lunch:',
    options: crewPackLunches.map(l => ({ label: l, value: l })),
    getNextStep: (value, selections) => {
      if (value === 'Flight Level Greens + Protein') return 'crew_pack_greens_protein';
      return getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_lunch');
    },
  },

  crew_pack_greens_protein: {
    id: 'crew_pack_greens_protein',
    botMessage: 'Which protein would you like with your Flight Level Greens?',
    options: [
      { label: 'Lemon Chicken', value: 'Lemon Chicken' },
      { label: 'Falafel', value: 'Falafel' },
    ],
    getNextStep: (value, selections) => getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_lunch'),
  },

  crew_pack_dinner: {
    id: 'crew_pack_dinner',
    botMessage: 'Choose your dinner:',
    options: crewPackDinners.map(d => ({ label: d, value: d })),
    getNextStep: (value, selections) => getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_dinner'),
  },

  crew_pack_no_heat: {
    id: 'crew_pack_no_heat',
    botMessage: 'Choose your no-heat meal:',
    options: [
      { label: 'Red-Eye Overnight Oats', value: 'Red-Eye Overnight Oats' },
      { label: 'Flight Level Greens + Falafel', value: 'Flight Level Greens + Falafel' },
    ],
    getNextStep: (value, selections) => {
      if (value === 'Red-Eye Overnight Oats') return 'crew_pack_oat_flavor';
      return getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_no_heat');
    },
  },

  crew_pack_oat_flavor: {
    id: 'crew_pack_oat_flavor',
    botMessage: 'What flavor would you like for your Red-Eye Overnight Oats?',
    options: overnightOatFlavors.map(f => ({ label: f, value: f })),
    getNextStep: (value, selections) => {
      // If breakfast is already set, we came from the no-heat step (breakfast was a prior step)
      if (selections.crewBreakfast) {
        return getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_no_heat');
      }
      // Otherwise came from breakfast (breakfast not yet saved in old selections)
      return getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_breakfast');
    },
  },

  crew_pack_snack: {
    id: 'crew_pack_snack',
    botMessage: 'Choose your snack:',
    options: crewPackSnacks.map(s => ({ label: s, value: s })),
    getNextStep: (value, selections) => getNextCrewCategory(selections.crewPack ?? '', 'crew_pack_snack'),
  },

  crew_pack_summary: {
    id: 'crew_pack_summary',
    botMessage: (selections) => buildCrewPackSummary(selections),
    options: [
      { label: 'Add to Cart', value: 'yes' },
      { label: 'Start Over', value: 'no' },
    ],
    getNextStep: (value) => value === 'yes' ? 'crew_pack_confirm' : 'welcome',
  },

  crew_pack_confirm: {
    id: 'crew_pack_confirm',
    botMessage: "Your crew pack has been added to your cart!",
    options: [
      { label: 'View Cart', value: 'view_cart' },
      { label: 'Add Another', value: 'add_another' },
    ],
    getNextStep: () => 'welcome',
  },

  // --- Desserts ---

  dessert_select: {
    id: 'dessert_select',
    botMessage: 'Which dessert would you like to order?',
    options: dessertTypes.map(d => ({ label: d.name, value: d.name })),
    getNextStep: (value) => {
      const counts = getDessertCounts(value);
      if (counts.length === 1) return 'dessert_summary';
      return 'dessert_count';
    },
  },

  dessert_count: {
    id: 'dessert_count',
    botMessage: (selections) => `How many ${selections.dessert} would you like?`,
    options: [],
    getNextStep: () => 'dessert_summary',
  },

  dessert_summary: {
    id: 'dessert_summary',
    botMessage: (selections) => buildDessertSummary(selections),
    options: [
      { label: 'Sounds Good', value: 'yes' },
      { label: 'Start Over', value: 'no' },
    ],
    getNextStep: (value) => value === 'yes' ? 'dessert_confirm' : 'welcome',
  },

  dessert_confirm: {
    id: 'dessert_confirm',
    botMessage: "Your dessert order has been noted! Please email cherickseats@gmail.com to finalize your order.",
    options: [
      { label: 'Add Another', value: 'add_another' },
    ],
    getNextStep: () => 'welcome',
  },

  // --- Catering ---

  catering_redirect: {
    id: 'catering_redirect',
    botMessage: [
      "We'd love to cater your event! Please email us at cherickseats@gmail.com with the following details:",
      '',
      '- Event date and time',
      '- Number of guests',
      '- Any dietary restrictions or preferences',
      '',
      'Our catering options:',
      '- Small Gatherings (10-15 people): 4 pans - 2 protein, 2 bases',
      '- Medium Events (20-35 people): 6 pans - 3 protein, 3 bases',
      '- Large Events (40-60 people): 8 pans - 4 protein, 4 bases',
      '',
      "We'll get back to you with a custom quote!",
    ].join('\n'),
    options: null,
    getNextStep: () => 'welcome',
  },
};
