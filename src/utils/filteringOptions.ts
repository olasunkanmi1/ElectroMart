import { IFilterValues, ISelections, FilterOption } from "@types";

const filterOptions = [
  // Category
  {
    items: [
      { name: 'Smartwatches', value: 'smartwatches' },
      { name: 'Computing', value: 'computing' },
      { name: 'Drones', value: 'drones' },
      { name: 'Gaming', value: 'gaming' },
      { name: 'Phones and Tablets', value: 'phonesAndTabs' },
      { name: 'Televisions', value: 'televisions' },
      { name: 'Audio', value: 'audio' },
      { name: 'Photography', value: 'photography' },
      { name: 'Home Appliances', value: 'homeAppliances' },
    ],
    placeholder: 'Category',
    queryName: 'category',
  },
  // Rating
  {
    items: [
      { name: '4', value: '4' },
      { name: '3', value: '3' },
      { name: '2', value: '2' },
      { name: '1', value: '1' },
    ],
    placeholder: 'Average Rating',
    queryName: 'rating',
  },
  // Brand
  {
    items: [
      { name: 'Apple', value: 'apple', relatedCategory: ['smartwatches', 'computing', 'phonesAndTabs', 'audio'] },
      { name: 'Fitbit', value: 'fitbit', relatedCategory: ['smartwatches'] },
      { name: 'Samsung', value: 'samsung', relatedCategory: ['smartwatches', 'phonesAndTabs', 'televisions', 'homeAppliances'] },
      { name: 'Hp', value: 'hp', relatedCategory: ['computing'] },
      { name: 'Lenovo', value: 'lenovo', relatedCategory: ['computing'] },
      { name: 'DJI', value: 'dji', relatedCategory: ['drones'] },
      { name: 'Parrot', value: 'parrot', relatedCategory: ['drones'] },
      { name: 'Autel', value: 'autel', relatedCategory: ['drones'] },
      { name: 'Sony', value: 'sony', relatedCategory: ['gaming', 'photography'] },
      { name: 'Xbox', value: 'xbox', relatedCategory: ['gaming'] },
      { name: 'Nintendo', value: 'nintendo', relatedCategory: ['gaming'] },
      { name: 'Google', value: 'google', relatedCategory: ['phonesAndTabs'] },
      { name: 'Lg', value: 'lg', relatedCategory: ['televisions', 'homeAppliances'] },
      { name: 'Hisense', value: 'hisense', relatedCategory: ['televisions'] },
      { name: 'Beats', value: 'beats', relatedCategory: ['audio'] },
      { name: 'JBL', value: 'jbl', relatedCategory: ['audio'] },
      { name: 'Nikon', value: 'nikon', relatedCategory: ['photography'] },
      { name: 'Canon', value: 'canon', relatedCategory: ['photography'] },
      { name: 'Ninja', value: 'ninja', relatedCategory: ['homeAppliances'] },
    ],
    placeholder: 'Brand',
    queryName: 'brand',
  },
  // Sort
  {
    items: [
      { name: 'Lowest Price', value: 'price-asc' },
      { name: 'Highest Price', value: 'price-desc' },
      { name: 'Featured', value: 'featured' },
    ],
    placeholder: 'Sort by',
    queryName: 'sort',
  },
  // Discount
  {
    items: [
      { name: '40% or more', value: '40' },
      { name: '30% or more', value: '30' },
      { name: '20% or more', value: '20' },
      { name: '10% or more', value: '10' },
      { name: 'Less than 10%', value: '0' },
    ],
    placeholder: 'Discount',
    queryName: 'discount',
  },
  
]; 
  
export const getFilterValues = (filterValues: IFilterValues) => {
  const {
    category,
    rating,
    brand,
    sort,
    discount,
  } = filterValues;
  
  const values = [
    {
      name: 'category',
      value: category,
    },
    {
      name: 'rating',
      value: rating,
    },
    {
      name: 'brand',
      value: brand,
    },
    {
      name: 'sort',
      value: sort,
    },
    {
      name: 'discount',
      value: discount,
    },
  ];

  return values;
};

const findObjectByQueryName  = (queryName: string) => filterOptions.find((filter) => filter.queryName === queryName)!
export const selections: ISelections = {
  categories: findObjectByQueryName ('category'),
  ratings: findObjectByQueryName ('rating'),
  brands: findObjectByQueryName ('brand'),
  sortBy: findObjectByQueryName('sort'),
  discounts: findObjectByQueryName('discount'),
}