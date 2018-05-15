const googleUrl = 'https://www.googleapis.com/youtube/v3/search';

const API = (function(){
  //call the api -> takes callback
  const fetchVideos = (query) => {
    $.getJSON(googleUrl, {q: query, part: 'snippet', key: 'AIzaSyCYr1rqWX9ASZDzLY71_E8D22chZ65fHGU', maxResults: 10}, function(response) {
      createHtml(response.items);
    });
  };

  const updateStore = function(data){
    const results= data.map(function(item) {
      return {id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.default.url}; 
    });
    
    STORE.setVideos(results);
  };
  //callback function to do stuff with response
  //response.map(item => createHTML(item))
  const createHtml = (data) => {
    const array = [];
    data.map(video => {
      array.push(`<div>
            
                <img class="video-thumbnail-image" id="${video.id.videoId}" src="${video.snippet.thumbnails.default.url}">
            
            <button><a href="https://www.youtube.com/channel/${video.snippet.channelId}">More from ${video.snippet.channelTitle}</a></button>
        </div>
        `);
    });
    $('.js-search-results').html(array.join(''));
  };
  return {
    fetchVideos
  };
}());