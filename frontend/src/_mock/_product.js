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
  { value: 'low stock', label: 'Low stock' },
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
  { group: 'Accessories', classify: ['Brand','Type of Accessory'] },
  { group: 'Batteries', classify: ['Built in', 'Dual', 'Single', 'Triple'] },
  { group: 'Bottle Size', classify: ['100 ml (Shortfills)', '10 ml', '50 ml', '50 ml (Shortfills)', '75 ml', 'Tobacco Platinum', '100 ml', '120 ml', '30 ml', '60 ml',] },
  { group: 'Nicotine Level', classify: ['10 MG', '15 MG', '36 MG', '9 MG', '11 MG', '14 MG', '16 MG',
      '51 MG', '52 MG', '53 MG', '54 MG', '55 MG', '56 MG', '57 MG', '58 MG', '59 MG', '61 MG', '62 MG', '63 MG', '64 MG', '65 MG', '66 MG', ' 0MG', '3 MG', '6 MG', '12 MG',
      '18 MG', '20 MG', '24 MG', '25 MG', '30 MG', '35 MG', '40 MG', '45 MG', '48 MG', '50 MG', '60 MG'
    ]
  },
  { group: 'Puffs', classify: [1000, 1200, 1500, 2000, 2500, 300, 3000, 350, 3500, 400, 4000, 450, 4500,
      500, 5000, 5500, 575, 600, 800, 10000, 12000, 245, 2600, 320, 5001, 5002, 5003, 5004, 5005, 5006, 5800, 6000, 700, 7000, 8000, 8500
    ].map(puff => `${puff} Puffs`)
  },

];

export const PRODUCT_CHECKOUT_STEPS = ['Cart', 'Billing & address', 'Payment'];
