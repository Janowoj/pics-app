import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID XSMRar2BSprYddi9iTWrA2DOyY_2WtZ1ti55yEU8I3M'
        },
        params: {
            query: term,
        }
    });

    // take care of writing correct code
    // term param is for using different search terms

    // now we get not all the response, but only the data we need
    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;