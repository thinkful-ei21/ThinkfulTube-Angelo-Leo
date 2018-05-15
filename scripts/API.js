const googleUrl = 'https://www.googleapis.com/youtube/v3/search';

const API = (function(){
  //call the api -> takes callback
  const fetchVideos = (query) => {
    $.getJSON(googleUrl, {q: query, part: 'snippet', key: 'AIzaSyCYr1rqWX9ASZDzLY71_E8D22chZ65fHGU', maxResults: 10}, function(response) {
      updateStore(response.items);
    });
    VideoList.createHtml(STORE.items);
  };

  const updateStore = function(data){
    const results= data.map(function(item) {
      return {id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.default.url, channelId: item.snippet.channelId,channelTitle:item.snippet.channelTitle}; 
    });
    
    STORE.setVideos(results);
  };

  return {
    fetchVideos
  };
}());