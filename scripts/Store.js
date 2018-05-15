
const STORE = (function(){
  const videos = [];

  const setVideos = function(data){
    this.videos = data;
  };
  return {
    setVideos,
    videos
  };
}());