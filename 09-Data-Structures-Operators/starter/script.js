'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainMenuIndex) {
    return `Order placed for ${this.starterMenu[starterIndex]} starter & ${this.mainMenu[this.mainMenuIndex]} main dish.`;
  }
};

// let customerOrder = prompt(`Welcome to ${restaurant.name}!!!!! \nHere is the Starter menu: \n${restaurant.starterMenu}
// & here is the main menu:
// ${restaurant.mainMenu}

// What would you like to order? (Enter your order seperated by comma - one from each menu i.e. starter & main menu.)`
// );

// console.log(customerOrder);

// customerOrder = customerOrder.split(",");
// console.log(customerOrder);


const [categorya, ,categoryb] = restaurant.categories;
console.log("Categories : " + categorya + " & " + categoryb);

const { name, openingHours, mainMenu } = restaurant;
console.log(name, openingHours, mainMenu);

const {
  name : restaurantName,
  openingHours : hours,
  starterMenu : menu1
} = restaurant;
console.log(restaurantName, hours, menu1);

const { menu = "FullMenu", starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

console.log(openingHours);
const {fri : {open : o, close: c}} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '10:00 PM',
  address: ''
})