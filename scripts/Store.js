
const STORE = (function(){
  const videos = [];
  const setVideos = function(videos){
    this.videos= videos;
  };
  return {
    setVideos
  };
}());