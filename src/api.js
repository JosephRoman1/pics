import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID YOUR_KEY_GOES_HERE' //Have to put your api key from the unsplash API here!  Otherwise application won't work as intended.
        },
        params: {
            query: term, 
        }
    });

    return response.data.results;
};

export default searchImages;