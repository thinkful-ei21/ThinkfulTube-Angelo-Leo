
const VideoList = (function(){

  const handleImageClick = () => {
    $(document).on('click', '.video-thumbnail-image', function(event) {
      $('.player').html(generateEmbedLink(this.id));
    });
  };
  
  const generateEmbedLink = (id) => {
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  };

  const createHtml = (data) => {
    const array = data.map(video => decorateHTML(video));    
    $('.js-search-results').html(array.join(''));
  };
 
  const decorateHTML = function(data){
    return `
        <div>           
          <img class="video-thumbnail-image" id="${id}" src="${thumbnail}">
          <button><a href="https://www.youtube.com/channel/${channelId}">More from ${channelTitle}</a></button>
        </div>
        `;

  };


  const handleFormSubmit = () => {
    $('.js-search-form').submit(function(event) {
      event.preventDefault();
      const value = $('.js-query').val();
      API.fetchVideos(value);
      $('.js-query').val('');
      $('.player').html('');
    });
  };
  return {
    handleFormSubmit,
    handleImageClick,
    createHtml
  };
}());