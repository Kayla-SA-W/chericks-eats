export const meatLessItems = [
    {
        name: 'Veggie Stir Fry with Lo Mein or Rice'

    },
    {
        name: 'Curry Chickpeas with Rice'

    },
    {
        name: 'Black Bean and Rice Bowl'
    }
]

export const proteinItems = [
    {
        name: 'Oven-Roasted Chicken'
    },
    {
        name: 'Salmon (5-7 Oz)'
    },
    {
        name: 'Pepper Steak'
    },
    {
        name: 'Sweet and Sour Meatballs'
    }
]

export const pastaItems = [
    {
        name: 'Chicken Alfredo'
    },
    {
        name: 'Chicken Piccata'
    },
    {
        name: 'Chicken Rasta Pasta'
    }
]

export const sideItems = [
    {
        name: 'Mashed Potatoes'
    },
    {
        name: 'Brussel Sprouts' 
    },
    {
        name: 'Couscous with Cranberry'
    },
    {
        name: 'Mac & Cheese'
    },
    {
        name: 'Garlic Butter Green Beans'
    },
    {
        name: 'Broccoli'
    },
    {
        name: 'Rice'
    },
    {
        name: 'Garden Salad' 
    },
    {
        name: 'Sauteed Spinach'
    },
    {
        name: 'Glazed Carrots'
    },
]

// Dessert Bar Classics
export const dessertBarClassics = [
    { name: 'Brownies', count: '12ct', price: 30 },
    { name: 'Cheesecake Cupcakes', count: '12ct', price: 45 },
    { name: 'Cake Batter Chocolate Chip Cookies', count: '12ct', price: 35 },
    { name: 'Gourmet Cupcakes', count: '12ct', price: 35 },
];

// Chocolate Wasted
export const chocolateWastedItems = [
    { name: 'Truffles', counts: [{ count: '6ct', price: 20 }, { count: '12ct', price: 38 }, { count: '24ct', price: 65 }] },
    { name: 'Bon Bons', counts: [{ count: '6ct', price: 22 }, { count: '12ct', price: 35 }, { count: '24ct', price: 65 }] },
];

export const infusedLiquorOptions = [
    'Captain Morgan', 'Bacardi', 'Vodka', 'Remy', 'Hennessy', 'Tequila',
    'Crown Royal', 'Brandy VSOP', 'Amaretto', 'Grand Marnier',
    'Banana Liqueur', "Meyer's", "Bailey's", 'Kahlua',
];

// Cake Pop Shooters & Jar Cakes
export const cakePopShooters = [
    { count: '6ct', price: 25 },
    { count: '12ct', price: 45 },
];

export const jarCakes = [
    { count: '6ct', price: 30 },
];

export const cakeFlavors = ['Chocolate', 'Vanilla', 'Funfetti'];
export const chocolateMousseFlavors = ['White', 'Milk', 'Dark', 'Caramel'];

// Chocolate Covered Strawberries
export const chocolateCoveredStrawberries = [
    { name: 'Chocolate Covered Strawberries', counts: [{ count: '6ct', price: 25 }, { count: '12ct', price: 45 }] },
    { name: 'Infused Chocolate Covered Strawberries', counts: [{ count: '6ct', price: 30 }, { count: '12ct', price: 50 }] },
];

// Additional toppings: Sprinkles, Gold Flakes, etc. available for an additional $5
// Infused options: Champagne or Moscato

// Flat desserts list for legacy menu page
export const desserts = [
    ...dessertBarClassics.map(d => ({ name: `${d.name} - ${d.count}` })),
    ...chocolateWastedItems.flatMap(d => d.counts.map(c => ({ name: `${d.name} ${c.count}` }))),
    { name: 'Cake Pop Shooters' },
    { name: '6oz Jar Cakes' },
    ...chocolateCoveredStrawberries.flatMap(d => d.counts.map(c => ({ name: `${d.name} ${c.count}` }))),
];

export const flightFuelItems = [
    {
        section: 'Breakfast - Cleared for Takeoff',
        name: 'First Class Egg Bites',
        description: 'Egg bites with turkey sausage or spinach & feta + roasted sweet potatoes',
        holdLength: '4 days'
    },
    {
        section: 'Breakfast - Cleared for Takeoff',
        name: 'Red-Eye Overnight Oats - No Heat Required',
        description: 'Protein oats (rotating flavors: Vanilla Berry Cheesecake, Peaches & Cream, Strawberries & Cream, Mango Coconut, Maple Brown Sugar)',
        holdLength: '4-5 days',
    },
    {
        section: 'Breakfast - Cleared for Takeoff',
        name: 'Morning Departure Protein Box',
        description: 'Hard-boiled eggs, chicken sausage, roasted veggies, whole-grain bites',
        holdLength: '3-4 days'
    },
    {
        section: 'Breakfast - Cleared for Takeoff',
        name: 'Golden Hour Breakfast Bake',
        description: 'Soft-set egg custard bake, roasted peppers, breakfast potatoes',
        holdLength: '3-4 days'
    },
    {
        section: 'Lunch - Cruising Altitude',
        name: 'Cruise Control Citrus Chicken Bowl',
        description: 'Lemon-herb chicken, herbed quinoa-cauliflower blend, roasted zucchini & carrots, citrus vinaigrette',
        holdLength: '4 days'
    },
    {
        section: 'Lunch - Cruising Altitude',
        name: 'Mediterranean Turnaround Box',
        description: 'Lemon grilled chicken or baked falafel, whipped hummus, cucumber-tomato salad, farro-herb mix',
        holdLength: '3-4 days'
    },
    {
        section: 'Lunch - Cruising Altitude',
        name: 'Steady Flight Protein Bowl',
        description: 'Turkey herb meatballs, lemony orzo-spinach salad, roasted peppers',
        holdLength: '4 days'
    },
    {
        section: 'Lunch - Cruising Altitude',
        name: 'Clean Cabin Salmon Plate',
        description: 'Citrus-baked salmon, whipped sweet potato or sweet potato coins, green beans with olive oil',
        holdLength: '3 days'
    },
    {
        section: 'Lunch - Cruising Altitude',
        name: 'Flight Level Greens + Protein',
        description: 'Mixed greens, shaved veggies, quinoa crunch, choice of lemon chicken or falafel, light vinaigrette',
        holdLength: '3 days'
    },
    {
        section: 'Dinner - Final Approach',
        name: 'Smooth Landing Herb Chicken',
        description: 'Roasted chicken, mashed potatoes, green beans',
        holdLength: '4 days'
    },
    {
        section: 'Dinner - Final Approach',
        name: 'Night Flight Bolognese',
        description: 'Lean beef or turkey, whole-grain pasta, light tomato sauce',
        holdLength: '3-4 days'
    },
    {
        section: 'Dinner - Final Approach',
        name: 'Low-Sodium Teriyaki Touchdown',
        description: 'Teriyaki chicken, brown rice, roasted broccoli',
        holdLength: '4 days'
    },
    {
        section: 'Dinner - Final Approach',
        name: 'Plant-Based Altitude Bowl',
        description: 'Lentils or chickpeas, roasted squash, tahini drizzle',
        holdLength: '4 days'
    },
    {
        section: 'Grab & Go / Snack Add Ons',
        name: 'Altitude Energy Box',
        description: 'High-protein snack box: hard-boiled eggs, roasted chickpeas, cheese cubes, and dried fruit',
        holdLength: '4-5 days'
    },
    {
        section: 'Grab & Go / Snack Add Ons',
        name: 'Clear Skies Yogurt Cup',
        description: 'Greek yogurt with berries and oat crumble',
        holdLength: '3-4 days'
    },
    {
        section: 'Grab & Go / Snack Add Ons',
        name: 'Runway Bites',
        description: 'Energy bites made from oats, dates, sunflower seed butter, and coconut flakes',
        holdLength: '5+ days'
    },
    {
        section: 'Grab & Go / Snack Add Ons',
        name: 'Flight Path Trail Mix',
        description: 'Pumpkin seeds, sunflower seeds, dried cranberries, raisins, and dark chocolate chips',
        holdLength: '5+ days'
    }
];

