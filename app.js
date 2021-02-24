function getInput() {
    return $('.form').eq(1).val();
}

async function getGifDB() {
    //get request from giphy
    const key = "&api_key=" + "6TRaAjG3ELVqf8GHUMy6s16UqqPVgam9";
    let searchInput = getInput()
    
    let gifMetaData = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}${key}`);
    return gifMetaData.data; //why cant we expand further here? 
}

function generateAndAppendImg(url) {
    return $('.container').append($(`<img src="${url}">`)).addClass('gif');
}

function randomNum0to50(){
    return Math.floor(Math.random() * Math.floor(50));
}

function deleteElement(){
    $('.gif')
}


$("form").on("submit",async (e) => {
    let gif = await getGifDB();
    let url = gif.data[randomNum0to50()].images.downsized_large.url
    
    e.preventDefault();
    getInput();
    
    generateAndAppendImg(url)
});




//user inputs keyword
// input -> search keyword added to GET request
// GET request validates request through Giphy API
// return metaData
// dissect metaData for url to assign to img div