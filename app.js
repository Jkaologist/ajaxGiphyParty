function getInput(e) {
    e.preventDefault();
    return $('.form').eq(1).val();
}

async function getGif() {
    //get request from giphy
    // const key = "6TRaAjG3ELVqf8GHUMy6s16UqqPVgam9";
    let gif = await axios.get("http://api.giphy.com/v1/gifs/search", {params: { searchInput, key }});
}

$("form").on("submit", getInput);