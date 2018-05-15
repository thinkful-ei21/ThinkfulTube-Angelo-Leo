
const VideoList = (function(){

  const handleImageClick = () => {
    $(document).on('click', '.video-thumbnail-image', function(event) {
      $('.player').html(generateEmbedLink(this.id));
    });
  };
  
  const generateEmbedLink = (id) => {
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  };
  
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
      $('.player').html('');
    });
  };
  return {
    handleFormSubmit,
    handleImageClick
  };
}());