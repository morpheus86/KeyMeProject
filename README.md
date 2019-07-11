Technology:

This application was built using React. React was the tool used because It is a good tool because of its flexibility and is easy to evolves. It also is easy to build on top of it by using different tools such as npm to install dependencies and be more productive. Another reason why I choose React is because it is POJO Plain Old Javascript Object. The component based UI makes it easy to be reusable if need be and they are rendered independently which allow for better performance.

Our application list different keys with their name. prices and an amount which can be incremented or decremented for each keys.
Whenever the user have a total amount that is above 0, the proceed to checkout button activates and let the user proceed to checkout.

the application have a couple states that are updated as the user increment an amount of keys or decrements it. THe increment and decrement are customs function which fires every time a count from a key is behing decremented or incremented. We keep track of the specific key by passing a key to our function which can be fount in our key array list.
