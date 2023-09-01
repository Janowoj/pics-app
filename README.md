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




