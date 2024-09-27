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
      open: 3, // Open 20 hours
      close: 23,
    },
  },
  order: function (starterIndex, mainMenuIndex) {
    return `Order placed for ${this.starterMenu[starterIndex]} starter & ${
      this.mainMenu[this.mainMenuIndex]
    } main dish.`;
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your delicious pasta with ${ing1}, ${ing2} & ${ing3} is ready!!!!!!`
    );
  },

  orderPizza: function (main1, main2, main3, ...customToppings) {
    console.log(
      `Your delicious pizza with ${main1}, ${main2}, ${main3} & your favorite toppings ${customToppings} is ready!!!!!!`
    );
  },
};

// let customerOrder = prompt(`Welcome to ${restaurant.name}!!!!! \nHere is the Starter menu: \n${restaurant.starterMenu}
// & here is the main menu:
// ${restaurant.mainMenu}

// What would you like to order? (Enter your order seperated by comma - one from each menu i.e. starter & main menu.)`
// );

// console.log(customerOrder);

// customerOrder = customerOrder.split(",");
// console.log(customerOrder);

// const [categorya, ,categoryb] = restaurant.categories;
// console.log("Categories : " + categorya + " & " + categoryb);

// const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu);

// const {
//   name : restaurantName,
//   openingHours : hours,
//   starterMenu : menu1
// } = restaurant;
// console.log(restaurantName, hours, menu1);

// const { menu = "FullMenu", starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// console.log(openingHours);
// const {fri : {open : o, close: c}} = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '10:00 PM',
//   address: ''
// })

//Asssignment Data
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// //Array Destructuring Assignment
// const [firstBook, , , , , , lastBook] = books;
// console.log(firstBook, lastBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// //Object Destructuring Assignment
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// const { keywords: tags } = books[0];
// console.log(tags);

// console.log(books[6], books[0]);
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// function printBookInfo({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// }
// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~The Spread Operator~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(`Starter Menu - ${restaurant.starterMenu}\nMain Menu - ${restaurant.mainMenu}\nCombined Menu - ${combinedMenu}`);

// //Using Spread Operator to convert string into a char array
// const str = "This is an Apple";
// const letter = [...str];
// console.log(letter);
// console.log(letter[8]);

// const ingredients = [prompt('You can get a custom pasta made up of your 3 favorite ingredients!!!\nPlease enter your first ingredient:'), prompt('Second Ingredient:'), prompt('Third Ingredient:')];
// restaurant.orderPasta(...ingredients);

// //Spread Operator with objects
// const newRestaurant = {foundedBy : 'Gustav', ...restaurant, famousDish : 'Ratatouille'};
// console.log(restaurant, newRestaurant);

// // Rest pattern & parameters
// const nums = [3, 4, 5, 1, 6, 8, 9];
// const [a, b, ...remainingNums] = [...nums];
// console.log(a, b, remainingNums);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log(arr1, arr2);
// arr2[1] = 4;
// console.log(arr1, arr2);

// function add(...nums) {
//   let sum = 0;
//   nums.forEach(num => {
//     sum += num;
//   });
//   console.log(sum);
// }

// add(...remainingNums)

// const [pizza, ,risotto, ...otherFoodItems] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFoodItems);

// const {thu, ...otherDays} = {...restaurant.openingHours};
// console.log(thu, otherDays);

// const mainPizzaIngredients = ["Bread", "Cheese", "Sauce"];
// restaurant.orderPizza(...mainPizzaIngredients, prompt("Please enter your favorite toppings.\nEnter the 1st topping!"), prompt("Enter the 2nd topping!"), prompt("Enter the 3rd topping!"));

//Short-Circuiting
// console.log('----------OR Operator----------');
// console.log(0 || 'test');
// console.log(-1 || 0);
// console.log(-2 || undefined);

// let guest1 = 6;
// guest1 = guest1 ? guest1 : 15;
// console.log(guest1);

// console.log('----------AND Operator----------');
// console.log(0 && 'test');
// console.log(-1 || 0);
// console.log(-2 || undefined);

// if(restaurant.orderPizza) { //Check if there exists a orderPizza method exists for restaurant object with **IF condition**
//   restaurant.orderPizza('tomato', 'corn', 'sauce');
// }

// restaurant.orderPizza &&= restaurant.orderPizza('basil', 'oregano', 'red sauce')  //Check if there exists a orderPizza method exists for restaurant object with **short-circuiting AND operator**

// //Nullish Coalescing Operator -> Works like OR operator but only for nullish values i.e. null or undefined and it ignores 0 or '' values i.e. does not consider them as falsy values

// let newNumOR = 0;
// newNumOR = newNumOR || 10;
// console.log(newNumOR);

// const a = 0;
// const newNumNull = a ?? 10;
// console.log(newNumNull);

// //Logical Assingment Operator
// let rest1 = {
//   name: "Bikanerwala",
//   hasPluxee: "Yes"
// }, rest2 = {
//   name: "Haldiram",
//   ratings: 0
// }
// console.log(rest1, rest2);

// //Short Circuiting using OR
// rest1.hasPluxee = rest1.hasPluxee || "No";
// rest2.hasPluxee = rest2.hasPluxee || "No";
// console.log(rest1, rest2);

// rest1.ratings = rest1.ratings || 3;
// rest2.ratings = rest2.ratings || 3;
// console.log(rest1, rest2);

// //Short Circuiting using AND
// rest1.hasPluxee = rest1.hasPluxee && "No";
// rest2.hasPluxee = rest2.hasPluxee && "No";
// console.log(rest1, rest2);

// rest1.ratings = rest1.ratings && 3;
// rest2.ratings = rest2.ratings && 3;
// console.log(rest1, rest2);

// //Short Circuiting using nullish coalescing operator
// rest1.hasPluxee = rest1.hasPluxee ?? "No";
// rest2.hasPluxee = rest2.hasPluxee ?? "No";
// console.log(rest1, rest2);

// rest1.ratings = rest1.ratings ?? 3;
// rest2.ratings = rest2.ratings ?? 3;
// console.log(rest1, rest2);

// let rest3 = {
//   name: "Dominos",
//   hasPluxee: "No"
// }, rest4 = {
//   name: "Burger King",
//   ratings: 0
// }
// console.log(rest3, rest4);

// //Logical Assingment Operators
// rest3.ratings ??= 3;
// rest4.ratings ??= 5;
// console.log(rest3, rest4);

// rest3.hasPluxee &&= 'Yes';
// rest4.hasPluxee &&= null;
// console.log(rest3, rest4);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const scores = game.scored;
// for(let i = 0; i < scores.length; i++) {
//   console.log(`Goal ${i + 1}: ${scores[i]}`);
// }

// const odds = Object.values(game.odds);
// console.log(odds); //printing odds array
// let sum = 0;
// for (const odd of odds) sum += odd;
// console.log(`Average Odd ${sum / odds.length}`);

// for(const[team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);

// }

// let scorers = {};
// const players = game.scored;
// for(const player of players) {
//   // if(${players[i]})
//   // scorers[player] = player in scorers ? ++scorers[player] : 1;
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//For-of Loop
// console.log(
//   '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~For-of Loop~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
// );
// const menuArray = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menuArray) console.log(item);

// console.log('Menu array entries:\n', [...menuArray.entries()]);

// let i = 0;
// for(const item of menuArray.entries()) {
//   console.log(`Item ${i}`);
//   for(const e of item) console.log(e); i++;
// };

// for (const [i, el] of menuArray.entries()) { //Destructuring array
//   console.log(`Item ${i + 1}: ${el}`);
// }

//Enhanced Object Literals
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Enhanced Object Literals~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//Computing property names
// const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// console.log(weekdays);

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   [`Rest of the ${weekdays.length - 3} days`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// console.log(openingHours);

// const restaurant2 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours, //Enhanced ES6 object literal enhancement
//   order: function (starterIndex, mainMenuIndex) {
//     return `Order placed for ${this.starterMenu[starterIndex]} starter & ${
//       this.mainMenu[this.mainMenuIndex]
//     } main dish.`;
//   },

//   // Old way of writing methods/function of an object
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Your delicious pasta with ${ing1}, ${ing2} & ${ing3} is ready!!!!!!`
//     );
//   },

//   //Enhanced way of writing methods/function of an object
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Your delicious pasta with ${ing1}, ${ing2} & ${ing3} is ready!!!!!!`
//     );
//   },

//   orderPizza: function (main1, main2, main3, ...customToppings) {
//     console.log(
//       `Your delicious pizza with ${main1}, ${main2}, ${main3} & your favorite toppings ${customToppings} is ready!!!!!!`
//     );
//   }
// };

// console.log(restaurant2);

// //Optional Chaining
// console.log(
//   '~~~~~~~~~~~~~Optional Chaining~~~~~~~~~~~~~~~~~~~'
// );
// console.log(restaurant?.openingHours?.mon);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days) {
//   const time = restaurant.openingHours?.[day]?.open ?? '';
//   const status = time ? `open at ${time}` : 'closed' ;
//   console.log(`We ${status || 'test'} on ${day}`);
// }

//Looping Objects
// console.log('~~~~~~~~~~~~~Looping Objects~~~~~~~~~~~~~~~~~~~');
// console.log(restaurant);
// const days = Object.keys(restaurant.openingHours)
// console.log(days);
// // for();
// for(const [day, {open, close}] of Object.entries(restaurant.openingHours)) {
//   console.log(`On ${day}, we are servicable between ${open}:00 & ${close}:00`);
// }

// const person = {
//   name: "Alice",
//   age: 25,
//   city: "Paris"
// };

// console.log(person);

// const { name: fullName, age: yearsOld } = person;

// console.log(fullName); // Alice
// console.log(yearsOld); // 25

// console.log(person);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// console.log('~~~~~~~~~~~~~Coding Challenge #2~~~~~~~~~~~~');
// console.log('~~~~~~~Solution 1~~~~~~~~');
// let i = 1;
// for (const player of game.scored) {
//   console.log(`Goal ${i}: ${player}`);
// }

// console.log('~~~~~~~Solution 2~~~~~~~~');
// let sum = 0,
//   n = 0;
// for (const [, odd] of Object.entries(game.odds)) sum += odd;
// n++;
// console.log(`Average Odd = ${sum / n}`);

// console.log('~~~~~~~Solution 3~~~~~~~~');
// for (const [team, odd] of Object.entries(game.odds)) {
//   const str = team == 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${str}: ${odd}`);
// }

// console.log('~~~~~~~Bonus Solution~~~~~~~~');
// let scorers = {};
// for(const player of game.scored) {
//   scorers[player] = scorers[player] ? ++scorers[player] : 1;
// }
// console.log(scorers);

//Sets
// console.log('~~~~~~~~~~~~~Sets~~~~~~~~~~~~~');
// const orders = new Set(['Samosa', 'Kachori', 'Chai', 'Jalebi', 'Bread Pakora', 'Bread Pakora']);
// console.log(orders);
// console.log(orders.size);

// console.log(orders.has('Tea'));
// console.log(orders.has('Chai'));

// orders.add('Dhokla');
// console.log(orders);
// console.log(orders.size);

// //set made up of array
// const charSet1 = new Set('String');
// console.log(...charSet1);
// const charSet2 = new Set('String Test');
// console.log(...charSet2);
// charSet2.delete(' ');
// console.log(...charSet2);

// //set made up of array
// const peopleOnTables = [1, 3, 4, 1, 2, 6, 5, 4, 2, 1, 0];
// const chairTables = new Set([...peopleOnTables]);
// console.log(chairTables);

// //set made up of duplicate value array to unique valule array
// const beverages = [...new Set(['Coke', 'Mirinda', "Limca", 'Limca', 'Coke', 'Pepsi'])];
// console.log(beverages);

// //Iterating over set elements
// for(const drink of charSet1) {
//   console.log(drink);
// }

// //Clearing the set
// console.log(...charSet2);
// charSet2.clear();
// console.log(...charSet2);

//Maps
// console.log('~~~~~~~~~~~~~Maps~~~~~~~~~~~~~');
// // const customerOrders = new Map();
// // customerOrders.set('Riya', ['Pizza', 'Sundae', 'Coke']);
// // customerOrders.set('Simmi', ['Chilli Potato', 'Ice Cream', 'Pepsi']);
// // customerOrders.set('Shruti', ['Noodles', 'Kulfi', 'Coke']);
// // console.log(customerOrders);

// // console.log(
// //   customerOrders.set('Neha', [
// //     'Cheesy Fries',
// //     'Chocolate Shake',
// //     'Garlic Bread',
// //   ])
// // );

// // const myCafe = new Map([
// //   ['Name', "Neha's Cafe"],
// //   ['Open', '10'],
// //   ['Close', '22'],
// //   [
// //     'menu',
// //     [
// //       ...customerOrders.get('Riya'),
// //       ...customerOrders.get('Simmi'),
// //       ...customerOrders.get('Neha'),
// //     ],
// //   ],
// //   [true, "Welcome to Neha's cafe"],
// //   [
// //     false,
// //     'Unfortunately, we are closed for now! But we would love to host you next day between 10:00 & 22:00',
// //   ],
// // ]);
// // console.log(myCafe);

// // const currentHour = 14;
// // console.log(
// //   myCafe.get(
// //     currentHour >= myCafe.get('Open') && currentHour <= myCafe.get('Close')
// //   )
// // );

// // console.log(...customerOrders);
// // customerOrders.delete('Neha');
// // console.log(...customerOrders);

// //Passing an array as a Map Key
// //Case 1
// // myCafe.set([1, 2, 3], ['Occupied', 'Reserved', 'Unoccupied']);
// // const arr = [1, 2, 3];
// // console.log(...myCafe);
// // console.log(myCafe.get(arr));

// //Case 2
// // const arr = [1, 2, 3];
// // myCafe.set(arr, ['Occupied', 'Reserved', 'Unoccupied']);
// // console.log(...myCafe);
// // console.log(myCafe.get(arr));

// // //Making a DOM element as key/value of a map
// // const DOMMap = new Map();
// // DOMMap.set(document.querySelector('h1'), 'Heading').set(
// //   'Body',
// //   document.querySelector('body')
// // );
// // console.log(DOMMap);

// //Iterating thorugh the map
// //Object Entries to map
// console.log(restaurant.openingHours);
// const openingHoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(openingHoursMap);

// const questionMap = new Map([
//   ['question', 'Which is the most nice programming language?'],
//   [1, 'C#'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct Answer🎉'],
//   [false, 'Oops Wrong Answer⛔']
// ])
// console.log(questionMap);
// console.log(questionMap.get('question'));
// for(const [key, value] of questionMap) {
//   if(typeof key === 'number') {
//     console.log(`Option ${key}: ${value}`);
//   }
// }
// // const response = Number(prompt(`${questionMap.get('question')}`));
// // console.log(questionMap.get((response === questionMap.get('correct'))));

// //Converting map to array
// console.log('Quiz elements\n');
// console.log([...questionMap]);
// console.log([...questionMap.entries()]);
// console.log([...questionMap.keys()]);
// console.log([...questionMap.values()]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
console.log('~~~~~~~~~~~~~Challenge 3~~~~~~~~~~~~~');
const eventsSet = new Set();
for(const [key, value] of gameEvents) {
  eventsSet.add(value);
}
const events = [...eventsSet]
console.log(events);

console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

for(const [key, value] of gameEvents) {
  const str = key < 45 ? 'FIRST' : 'SECOND'
  console.log(`[${str} HALF] ${key}: ${value}`);;
}