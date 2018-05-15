
const STORE = (function(){
  const videos = [];
  const setVideos = function(videos){
    //this.videos= videos;
    console.log(videos);
  };
  return {
    setVideos
  };
}());