Technology:

This application was built using React. React was the tool used because of its flexibility, easy to get in the development mode and allows for a smooth transition when trying to evolve an application. It allows us to build on top of it by using different tools such as npm to install dependencies and be more productive. Another reason why I choose React is because it is based on a POJO Plain Old Javascript Object.
The component based UI makes it easy to be reusable if need be and they are rendered independently which allow for better performance.

Our application list different keys with their name. prices and an amount which can be incremented or decremented for each keys.
Whenever the user have a total amount that is above 0, the proceed to checkout button activates and let the user proceeds to checkout.

the application have a couple states that are updated as the user increments an amount of keys or decrements it. The increment and decrement are custom functions which fire every time a count from a key is behing decremented or incremented. We keep track of the specific key by passing a key to our function which can be found in our key array list.
