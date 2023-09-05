import { useState } from 'react';

function SearchBar({ onSubmit }) {
    // we don't need the whole props object, just the onSubmit function from it
    // const handleClick = () => {
    //     onSubmit('cars'); // output: e.g. do a search with cars 
    // }
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log('I need to tell the parent component about some data that was entered');
        onSubmit(term);

    }
    // for onSubmit('cars') the output is 'Do a search with cars'
    // 

    // onSubmit(document.querySelector('input').value); // never do this in the world of React!!!!!!

    // so...
    const handleChange = (event) => {
        // console.log(event.target.value);
        setTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                Confirm your change: {term}
                <input value={term} onChange={handleChange} />
            </form>
            {/* <button onClick={handleClick}>Press to submit</button> */}
        </div >
    )
}

export default SearchBar;

// how to detect when a user presses enter?
// There are couple diffrent ways:

// 1. We can wrap the input in a form element,
// then if we type something into and press enter
// we can listen for the form's SUBMIT EVENT using html feature

// 2. We can use the input's onChange event

// We use the first method here.
// After passing the event handler as a prop to the form element and declaring it like this:
// const handleFormSubmit = () => {
// console.log('I need to tell the parent component about some data that was entered');
// }

// we can see that message for a second in the console!

// Browser not only triggers the submit event on the form element,
// but also makes something unexpected! (some default behavior)
// Browser AUTOMATICALLY collects all the information from the input
// inside this form and makes a POST request to the server

// e.g. someapp.com?email=some@gmail.com&password=some

// This is not what we want to do in this case!

// We have to prevent the default behavior of the form element
// by adding e.preventDefault() to the event handler:

// const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('I need to tell the parent component about some data that was entered');
// }

// event is optional in event handler in jsx, but we need it here

// ==================================================================================================== //

// Now we need to get the value from the input element?

// The way React handles form elements like
// input, textarea, select, radio buttons, checkbox etc is a little bit weird.

// Handling Text Inputs:
//  1. Create a new piece of state to track the value of input
//  2. Create an event handler to watch for the 'onChange' event
//  3. Whem the 'onChange' event is fired, get the value of the input
//  4. Take that value from the input and use it to update state
//  5. Pass your state to the input as a value prop.

// The last step causes an error in the console, but it is because the page is reloading.
// After refreshing the page, all works fine.

// When typing something into the input, nothing happens!
//  Why???

// Egsample: 
// import React from 'react';
// // Udemy's code editor is a little weird... We do *not* need an 'import {useState}' line

// function App() {
    
//     const [text, setText] = useState('');
    
//     const handleInput = (event) => {
//         setText(event.target.value);
//     }
    
//     return (
//         <div>
//           <div>
//             Enter some text
//           </div>
//           <input value={text} onChange={handleInput}/>
//           <h3>Your Text</h3>
//           <p>
//             {text}
//           </p>
//         </div>
//     );
// }

// const useState = React.useState;
// export default App;

