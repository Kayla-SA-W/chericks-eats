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
  | 'catering_redirect';

export interface MealPrepSelections {
  path: 'standard' | 'bundle' | 'catering' | null;
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

export function getBundlePrice(bundleType: string): string {
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

// === Chat Steps State Machine ===

export const chatSteps: Record<ChatStepId, ChatStep> = {
  welcome: {
    id: 'welcome',
    botMessage: "Welcome to Cherick's Eats Modern Meal Prep! How can I help you today?",
    options: [
      { label: 'Standard Meal Prep', value: 'standard' },
      { label: 'Meal Prep Bundles', value: 'bundle' },
      { label: 'Catering', value: 'catering' },
    ],
    getNextStep: (value) => {
      if (value === 'standard') return 'standard_days';
      if (value === 'bundle') return 'bundle_select';
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
