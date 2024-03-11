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

export const PRODUCT_CATEGORY_GROUP_OPTIONS = [
  { group: 'VAPE DEVICES', classify: ["SMOK","Vaporesso","Uwell","Innokin","Voopoo","Geek Vape"] },
  { group: 'Vape Juice', classify: ['VGOD', 'Nasty', 'Ruthless', 'BLVK Unicorn', 'Vampire Vape','Dinner Lady','Zeus Juice'] },
  { group: 'SALT NIC', classify: ['Cambridge Labs', 'VGOD', 'Nastry', 'Cambridge Labs','Core','Nerd','BLVK Unicorn'] },
  { group: 'POD SYSTEMS', classify: ['Relx'] },
  { group: 'DISPOSABLES', classify: ['Youto','Tugboat','XTRA','Esco Bars','VGOD','VICIG','Vudu'] },
  { group: 'ACCESSORIES', classify: ['Colls & Pods','Tanks, Glass & Tips','Batteries and Lanyards'] },
];

export const PRODUCT_CHECKOUT_STEPS = ['Cart', 'Billing & address', 'Payment'];
