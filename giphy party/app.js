// Get references to the form, gifContainer, and removeBtn elements
const searchForm = document.querySelector('form');
const gifContainer = document.querySelector('#gif-area');
const removeBtn = document.querySelector('#remove');

// Add event listener to the search form
searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = document.querySelector('#search').value;
    const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"; // replace this with your actual API key

    try {
        const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
            params: {
                q: searchTerm,
                api_key: apiKey
            }
        });
        const gifSrc = response.data.data[0].images.original.url;
        const newGif = document.createElement('img');
        newGif.src = gifSrc;
        gifContainer.append(newGif);
        document.querySelector('#search').value = '';
    } catch (error) {
        console.error('Error:', error);
    }
});

// Add event listener to the remove button
removeBtn.addEventListener('click', function() {
    gifContainer.innerHTML = '';
});