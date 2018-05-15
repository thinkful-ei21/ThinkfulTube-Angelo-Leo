//generate a url -> call api

const googleUrl = 'https://www.googleapis.com/youtube/v3/search';



//call the api -> takes callback
const searchGoogle = (query) => {
    $.getJSON(googleUrl, {q: query, part: 'snippet', key: 'AIzaSyCYr1rqWX9ASZDzLY71_E8D22chZ65fHGU', maxResults: 10}, function(response) {
        createHtml(response.items);
    });
}

//callback function to do stuff with response
    //response.map(item => createHTML(item))
const createHtml = (data) => {
    const array = [];
    data.map(video => {
        array.push(`<div>
            
                <img class="video-thumbnail-image" id="${video.id.videoId}" src="${video.snippet.thumbnails.default.url}">
            
            <button><a href="https://www.youtube.com/channel/${video.snippet.channelId}">More from ${video.snippet.channelTitle}</a></button>
        </div>
        `)
        });
    $('.js-search-results').html(array.join(''));
};

const handleImageClick = () => {
    $(document).on('click', '.video-thumbnail-image', function(event) {
        $('.player').html(generateEmbedLink(this.id));
    });
};

const generateEmbedLink = (id) => {
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}


//create the html

//reset the form

//clear results

//listen for form submit (submit, prevent default, generate a url)

const handleFormSubmit = () => {
    $('.js-search-form').submit(function(event) {
        event.preventDefault();
        const value = $('.js-query').val();
        searchGoogle(value);
        $('.js-query').val('');
        $('.player').html('')
    });
}

//global listener

$(document).ready(function() {
    handleFormSubmit();
    handleImageClick();
});