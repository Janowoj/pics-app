import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {

    const renderedImages = images.map((image) => {
        return <ImageShow
            key={image.id}
            image={image} />
    });

    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;

// we need to communicate the array of images down to the ImageList component
// we are going to combine the state system and the props system

// Handling List Updates:

// When state changes, e.g. user swaps first two records,
// we need to update HTML. HOW?

// Option A:

// 1. Remove all existing Html tied to the list
// 2. Recreate all HTML elements.

// This works, but it is expensive!
// If we have 1000 records, we have to recreate 1000 HTML elements...

// Option B:
// 0. Apply a "Key" property to each element during the mapping (list building) process

// 1. After re-rendering, compare the keys on each ImageShow component
// to the keys on the previous render.

// 2. Apply minimal set of changes to existing DOM elements.

// This is what React does!!! (STEPS 1 and 2)

// ==================================================================================================== //

// Requirements for Keys:

// 1. Use whenever we have a list of elements (so every time we do a 'map' operation)
// 2. Add the key to the top-most JSX element in the list.
// 3. Must be a string or a number.
//  4. Should be unique for this list.
//  5. Should be consistent across renders. (so don't use random numbers)

// Almost all list we will create will be build
// by mapping over an array of objects fetched from the database.

// These objects will have a unique ID property!
//  This is a perfect candidate for a key!

// ==================================================================================================== //
// The FALLBACK for keys:

//  This may lead to some bugs:
// function App() {
//     const values = [];

//     for (let i = 0; i < 5; i++) {
//         values.push(<div key={i}></div>);
//     }
//     return <div>{values}</div>
// }

// ==================================================================================================== //



