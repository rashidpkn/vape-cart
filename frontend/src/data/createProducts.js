const _type = ['Simple', 'Variable'];

const _category = [
  'Disposables',
  'Vape Liquids',
  'Salt Nicotine',
  'Accessories',
  ,
  'Vape Devices',
  'Pod Systems',
  'Nicotine Pouches',
  'Pods & Coils',
  'Batteries',
  'Tanks',
  'Others',
];

const _tags = [
  'New Collection',
  'Limited Edition',
  'Bestseller',
  'Exclusive',
  'Hot Deal',
  'Trending Now',
  'Seasonal Special',
  'Eco-Friendly',
  'On Sale',
  'Clearance',
  'Customer Favorite',
  'Top Rated',
  'Holiday Special',
  'Gift Ideas',
  'Must-Have',
  'Limited Stock',
  'Featured Product',
  "Editor's Pick",
  'Just Arrived',
  'Back in Stock',
  'Special Offer',
  'Staff Picks',
  'Flash Sale',
  'Popular Choice',
  'Best Value',
];

const _brands = [
  'SMOK',
  'Vaporesso',
  'GeekVape',
  'Voopoo',
  'Innokin',
  'Uwell',
  'Aspire',
  'Eleaf',
  'Lost Vape',
  'Joyetech',
  'Wismec',
  'Freemax',
  'Suorin',
  'iJoy',
  'Rincoe',
  'Augvape',
  'Vandy Vape',
  'OBS',
  'Hellvape',
  'Teslacigs',
  'Artery',
  'Dovpo',
  'Vaptio',
  'Kangertech',
  'Digiflavor',
  'Sigelei',
  'Smoant',
  'Pioneer4You',
  'Vapor Storm',
  'Hugo Vapor',
];

const _attributes = ['Bottle Size', 'Puffs', 'Flavour', 'Nicotine Strength', 'Color', 'Batteries'];

const _variables = {
  bottleSize: [10, 15, 30, 50, 60, 100, 120].map((e) => `${e} ml`),
  puffs: [
    500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6500, 7000, 7500, 8000, 8500,
    9000, 9500, 10000,
  ].map((e) => `${e} puffs`),
  flavour: [
    'Strawberry',
    'Blueberry',
    'Raspberry',
    'Watermelon',
    'Apple',
    'Peach',
    'Pineapple',
    'Grape',
    'Mango',
    'Kiwi',
    'Cherry',
    'Banana',
    'Lemon',
    'Lime',
    'Orange',
    'Mixed Berries',
    'Menthol',
    'Peppermint',
    'Spearmint',
    'Ice Menthol',
    'Minty Menthol',
    'Cool Mint',
    'Traditional Tobacco',
    'American Blend',
    'Virginia Tobacco',
    'Turkish Tobacco',
    'Cuban Cigar',
    'Pipe Tobacco',
    'Vanilla Custard',
    'Chocolate Cake',
    'Caramel',
    'Butterscotch',
    'Cheesecake',
    'Tiramisu',
    'Maple Syrup',
    'Cookies and Cream',
    'Pudding',
    'Ice Cream',
    'Bubblegum',
    'Cotton Candy',
    'Gummy Bear',
    'Candy Cane',
    'Marshmallow',
    'Rock Candy',
    'Toffee',
    'Coffee',
    'Cappuccino',
    'Espresso',
    'Latte',
    'Cola',
    'Energy Drink',
    'Mojito',
    'Lemonade',
    'Iced Tea',
    'Smoothie',
    'Creamy Vanilla',
    'Strawberry Cream',
    'Coconut Cream',
    'Hazelnut Cream',
    'Irish Cream',
    'Sugar Cookie',
    'Blueberry Muffin',
    'Donut',
    'Pancake',
    'Waffle',
    'Pie Crust',
    'Sour Apple',
    'Sour Watermelon',
    'Sour Cherry',
    'Sour Lemon',
    'Almond',
    'Hazelnut',
    'Peanut Butter',
    'Pistachio',
    'Walnut',
    'Cinnamon',
    'Clove',
    'Gingerbread',
    'Green Tea',
    'Chamomile',
    'Lavender',
    'Eucalyptus',
  ],
  nicotineStrength: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50,
  ].map((e) => `${e} mg`),
  color: [
    'Black',
    'Silver',
    'White',
    'Blue',
    'Red',
    'Green',
    'Pink',
    'Purple',
    'Gold',
    'Rainbow/Multicolor',
    'Gunmetal/Gray',
    'Yellow',
    'Orange',
    'Brown',
    'Clear/Transparent',
  ],
  batteries: ['Single', 'Dual', 'Built-in', 'Triple', 'Quad'],
};

export { _type, _category, _tags, _brands, _attributes, _variables };
