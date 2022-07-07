import { Cart } from ".";

export const initialCartState: Cart = {
    'Veggie Stir Fry with Lo Mein or Rice': {
        price: 17,
        quantity: 0
    },
    'Curry Chickpeas with Rice': {
        price: 17,
        quantity: 0,
        addOn: [
            {
                name: 'Chicken',
                added: false,
                price: 10
            },
            {
                name: 'Salmon',
                added: false,
                price: 10
            }
        ]
    },
    'Black Bean and Rice Bowl': {
        price: 17,
        quantity: 0
    },
    'Oven-Roasted Chicken': {
        price: 25,
        quantity: 0
    },
    'Salmon (5-7 Oz)': {
        price: 28,
        quantity: 0
    },
    'Pepper Steak': {
        price: 26,
        quantity: 0
    },
    'Sweet and Sour Meatballs': {
        price: 27,
        quantity: 0
    },
    'Chicken Alfredo': {
        price: 22,
        quantity: 0
    },
    'Chicken Piccata': {
        price: 26,
        quantity: 0
    },
    'Chicken Rasta Pasta': {
        price: 24,
        quantity: 0
    },
    'Mashed Potatoes': {
        price: 10,
        quantity: 0
    },
    'Brussel Sprouts': {
        price: 10,
        quantity: 0
    },
    'Couscous with Cranberry': {
        price: 10,
        quantity: 0
    },
    'Mac & Cheese': {
        price: 15,
        quantity: 0
    },
    'Garlic Butter Green Beans': {
        price: 10,
        quantity: 0
    },
    'Broccoli': {
        price: 10,
        quantity: 0
    },
    'Rice': {
        price: 10,
        quantity: 0
    },
    'Garden Salad': {
        price: 10,
        quantity: 0,
        addOn: [
            {
                name: 'Avocado',
                added: false,
                price: 5
            },
            {
                name: 'Hard Boiled Eggs',
                added: false,
                price: 5
            }
        ]
    },
    'Sauteed Spinach': {
        price: 10,
        quantity: 0
    },
    'Glazed Carrots': {
        price: 10,
        quantity: 0
    },
    'Cheesecake Cupcakes - 12ct.': {
        price: 45,
        quantity: 0
    },
    'Fruit Tarts 4in - 12ct.': {
        price: 50,
        quantity: 0
    },
    'Fruit Tarts 10in': {
        price: 45,
        quantity: 0
    },
    'Brownies - 15ct': {
        price: 45,
        quantity: 0
    },
    'Cake Batter Chocolate Chip Cookies - 15ct': {
        price: 45,
        quantity: 0
    },
    'Truffles 6ct': {
        price: 25,
        quantity: 0,
        liqueur: true,
    },
    'Truffles 12ct': {
        price: 35,
        quantity: 0,
        liqueur: true,
    },
    'Bon Bons 6ct': {
        price: 35,
        quantity: 0,
        liqueur: true,
    },
    'Bon Bons 12ct': {
        price: 40,
        quantity: 0,
        liqueur: true,
    },
    'Truffle/Bon Bons 24ct': {
        price: 65,
        quantity: 0,
        liqueur: true,
    },
    'Chocolate Covered Pretzles 6ct': {
        price: 15,
        quantity: 0
    },
    'Chocolate Covered Pretzles 12ct': {
        price: 25,
        quantity: 0
    },
    'Cake Pop Shooters 6ct': {
        price: 15,
        quantity: 0
    },
    'Cake Pop Shooters 12ct': {
        price: 25,
        quantity: 0
    },
    '6oz Jar Cakes 6 ct': {
        price: 30,
        quantity: 0,
        addOn: [
            {
                name: 'Chocolate Cake with White Chocolate Mousse',
                added: false
            },
            {
                name: 'Chocolate Cake with Milk Chocolate Mousse',
                added: false
            },
            {
                name: 'Chocolate Cake with Dark Chocolate Mousse',
                added: false
            },
            {
                name: 'Chocolate Cake with Caramel Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with White Chocolate Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with Milk Chocolate Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with Dark Chocolate Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with Caramel Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with White Chocolate Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with Milk Chocolate Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with Dark Chocolate Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with Caramel Mousse',
                added: false
            }
        ]
    },
    '6oz Jar Cakes 12 ct': {
        price: 55,
        quantity: 0,
        addOn: [
            {
                name: 'Chocolate Cake with White Chocolate Mousse',
                added: false
            },
            {
                name: 'Chocolate Cake with Milk Chocolate Mousse',
                added: false
            },
            {
                name: 'Chocolate Cake with Dark Chocolate Mousse',
                added: false
            },
            {
                name: 'Chocolate Cake with Caramel Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with White Chocolate Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with Milk Chocolate Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with Dark Chocolate Mousse',
                added: false
            },
            {
                name: 'Funfetti Cake with Caramel Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with White Chocolate Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with Milk Chocolate Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with Dark Chocolate Mousse',
                added: false
            },
            {
                name: 'Vanilla Cake with Caramel Mousse',
                added: false
            }
        ]
    },
    'Chocolate Covered Strawberries 6ct': {
        price: 25,
        quantity: 0,
        addOn:[
            {
                name: 'Champagne',
                added: false
            },
            {
                name: 'Moscato',
                added: false
            }
        ]
    },
    'Chocolate Covered Strawberries Infused 6ct': {
        price: 30,
        quantity: 0,
        addOn:[
            {
                name: 'Champagne',
                added: false
            },
            {
                name: 'Moscato',
                added: false
            }
        ]
    },
    'Chocolate Covered Strawberries 12ct': {
        price: 40,
        quantity: 0,
        addOn:[
            {
                name: 'Champagne',
                added: false
            },
            {
                name: 'Moscato',
                added: false
            }
        ]
    },
    'Chocolate Covered Strawberries Infused 12ct': {
        price: 50,
        quantity: 0,
        addOn:[
            {
                name: 'Champagne',
                added: false
            },
            {
                name: 'Moscato',
                added: false
            }
        ]
    },
    'Drunken Chocolate Covered Strawberries 6ct': {
        price: 45,
        quantity: 0,
        liquor: true
    },
    'Drunken Chocolate Covered Strawberries 12ct': {
        price: 60,
        quantity: 0,
        liquor: true
    }
};
