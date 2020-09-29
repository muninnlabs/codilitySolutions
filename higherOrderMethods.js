const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//using for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//foreach loop
// companies.forEach((company, index) => {
//   console.log(company, index);
// });

//filter
// filter ages 21 and over using for
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// filter ages 21 and over using filter array
// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

//filter retail companies
// const retailCompanies = companies.filter(
//   (company) => company.category === 'Retail'
// );
// console.log(retailCompanies);

//filter companies that start in the 80s
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

//companies with more than 10 years
// const tenYearsCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(tenYearsCompanies);

//using map
//create array of company names
// const companyNames = companies.map(
//   (company) => `${company.name} [${company.start}-${company.end}]`
// );
// console.log(companyNames);

//using sort companies by startyear
// const sortingCompanies = companies.sort((company1, company2) =>
//   company1.start > company2.start ? 1 : -1
// );
// console.log(sortingCompanies);

//sort ages
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// reduce
//using for interation
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

//using reduce
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//get total years for all companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);
