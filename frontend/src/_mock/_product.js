// ----------------------------------------------------------------------

export const PRODUCT_GENDER_OPTIONS = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Kids', value: 'Kids' },
];

export const PRODUCT_CATEGORY_OPTIONS = ['Shose', 'Apparel', 'Accessories'];

export const PRODUCT_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];

export const PRODUCT_COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

export const PRODUCT_COLOR_NAME_OPTIONS = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'cyan', label: 'Cyan' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'violet', label: 'Violet' },
  { value: 'black', label: 'Black' },
  { value: 'white', label: 'White' },
];

export const PRODUCT_SIZE_OPTIONS = [
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '8.5', label: '8.5' },
  { value: '9', label: '9' },
  { value: '9.5', label: '9.5' },
  { value: '10', label: '10' },
  { value: '10.5', label: '10.5' },
  { value: '11', label: '11' },
  { value: '11.5', label: '11.5' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
];

export const PRODUCT_STOCK_OPTIONS = [
  { value: 'in stock', label: 'In stock' },
  { value: 'out of stock', label: 'Out of stock' },
];

export const PRODUCT_PUBLISH_OPTIONS = [
  {
    value: 'published',
    label: 'Published',
  },
  {
    value: 'draft',
    label: 'Draft',
  },
];

export const PRODUCT_SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High - Low' },
  { value: 'priceAsc', label: 'Price: Low - High' },
  { value: 'freeDelivery', label: 'Free Delivery' },
  { value: 'expressDelivery', label: 'Express Delivery' },
];

// export const PRODUCT_CATEGORY_GROUP_OPTIONS = [
//   { group: 'VAPE DEVICES', classify: ["SMOK","Vaporesso","Uwell","Innokin","Voopoo","Geek Vape"] },
//   { group: 'VAPE JUICE', classify: ['VGOD', 'Nasty', 'Ruthless', 'BLVK Unicorn', 'Vampire Vape','Dinner Lady','Zeus Juice'] },
//   { group: 'SALT NIC', classify: ['Cambridge Labs', 'VGOD', 'Nastry', 'Cambridge Labs','Core','Nerd','BLVK Unicorn'] },
//   { group: 'POD SYSTEMS', classify: ['Relx'] },
//   { group: 'DISPOSABLES', classify: ['Youto','Tugboat','XTRA','Esco Bars','VGOD','VICIG','Vudu'] },
//   { group: 'ACCESSORIES', classify: ['Colls & Pods','Tanks, Glass & Tips','Batteries and Lanyards'] },
// ];

export const PRODUCT_CATEGORY_GROUP_OPTIONS = [
  { group: 'Disposable', classify: ['Brand', 'Flavor', 'Puffs', 'Nicotine Strength'] },
  { group: 'Liquids', classify: ['Brand', 'Flavor', 'Bottles Size', 'Nicotine Strength'] },
  { group: 'Devices', classify: ['Brand', 'Color', 'Batteries'] },
  { group: 'Accessories', classify: ['Brand', 'Type'] },
  //
];

export const ATTRIBUTES = [
  {
    group: 'Brand',
    attributes: [
      'Juul',
      'SMOK',
      'Vaporesso',
      'Innokin',
      'Aspire',
      'GeekVape',
      'Uwell',
      'Voopoo',
      'Eleaf',
      'Lost Vape',
      'Joyetech',
      'Vandy Vape',
      'Wismec',
      'Rincoe',
      'Augvape',
    ],
  },
  {
    group: 'Flavor',
    attributes: [
      'Tobacco',
      'Menthol',
      'Fruit',
      'Dessert',
      'Candy',
      'Beverage',
      'Cream',
      'Vanilla',
      'Chocolate',
      'Cereal',
      'Nuts',
      'Spice',
      'Mint',
      'Citrus',
      'Berries',
    ],
  },
  {
    group: 'Puffs',
    attributes: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].map(
      (e) => `${e} Puffs`
    ),
  },
  { group: 'Nicotine Strength', attributes: [3, 6, 12, 18, 24, 36, 50].map((e) => `${e} mg`) },
  { group: 'Bottles Size', attributes: [30, 60, 100, 120, 180, 200].map((e) => `${e} ml`) },
  {
    group: 'Color',
    attributes: [
      'Black',
      'Silver',
      'White',
      'Blue',
      'Red',
      'Green',
      'Purple',
      'Pink',
      'Gold',
      'Gunmetal',
      'Rainbow',
      'Orange',
    ],
  },
  { group: 'Batteries', attributes: ['Single', 'Dual', 'Triple', 'Internal', 'Replaceable'] },
  {
    group: 'Type',
    attributes: [
      'Pod',
      'Mod',
      'Pen',
      'AIO',
      'Disposable',
      'Squonk',
      'Starter Kit',
      'Tank',
      'RTA',
      'RDA',
      'RDTA',
    ],
  },
];
export const PRODUCT_CHECKOUT_STEPS = ['Cart', 'Billing & address', 'Payment'];
