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
    return Math.floor(Math.random() * (50 - 1));
}

function deleteElement(){
    $('.container').children().last().remove();
}


$("form").on("submit",async (e) => {
    e.preventDefault();
    let gif = await getGifDB();
    let url = gif.data[randomNum0to50()].images.downsized_large.url
    
    getInput();
    generateAndAppendImg(url);
});

$(".form-button").on("click", (e) => {
    deleteElement();
});

//user inputs keyword
// input -> search keyword added to GET request
// GET request validates request through Giphy API
// return metaData
// dissect metaData for url to assign to img div