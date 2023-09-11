https://pics-app-jan.netlify.app/

Creating request TO UNSPLASH:

1. Sign up for an account
2. Create an 'app' to get an Access Key
3. Take a look to the docs to understand the request we will make

Tools required making requests:

1. React itsef has no functions/tools for making HTTP requests
2. To make requests, commonly use either Axios (JS library) or Fetch(function which is build directly to the browser).

I used axios installing through npm:
npm install axios

Axios library is an OBJECT which has couple of different functions tied to it.
These functions allow us make HTTP requests with different methods.

E.g. when we make get request, we use thid pattern:
axios.get(url, {
    headers: {

    },
    params: {

    },
});

In headers we may include Authorization: 'Client-ID ...etc'
In params we may incude e.g. query: 'cars'

Finally we get the data.
Under results there is results property with url, which we can open in our browser.

About the app:

1. The searchBar component contains the text input a user will type into,
2. The user pressing 'enter' key in the text input means we need to do a search,
3. We have a function that will return a search term into an array of image objects,
4. The array of image objects need to get into the ImageList component

Remember: siblings components cannot directly communicate!

To share info between sibling components, we have to involve the parent:
in SearchBar we have the term,
in ImageList we have images,
in App we have searchImages().

Use props to communicate from the parent to the child: App can sen the list of images down to ImageList using props!

How to use search term, which is in SearchBar (child component) in seatchImages(), which is in parent component?

Also with props (in some cases it is possible to go up to the parent component)/\.


// Now we need to get the value from the input element?

// The way React handles form elements like 
// input, textarea, select, radio buttons, checkbox etc is a little bit weird.

// Handling Text Inputs:
//  1. Create a new piece of state to track the value of input
//  2. Create an event handler to watch for the 'onChange' event
//  3. Whem the 'onChange' event is fired, get the value of the input
//  4. Take that value from the input and use it to update state
//  5. Pass your state to the input as a value prop

What happens, whenever the user types something into an input:

User types in input --> Browser updates the text in the input -->  Browser triggers an event to say that input  was updated --> We read a value from an input, update state --> State update! Component rerenders --> We provide the 'value' prop to input - REACT CHANGES AN INPUT VALUE (this is strange, because it overwrites an existing value) --> again user types an input

Why we should do it this way?

We have control under value of the input from the browser!

Need to read the value of the input?
Look at 'term' state.
Need to update the value of the input?
Call 'useTerm' state.
Component rerenders with every key-press - it is very useful to add more advanced features now.




