$(document).ready(function () {
  // fetch quotes from API
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    method: 'GET',
    success: function (data) {
      console.log(data);
      // set the dynamic values to existing elements
      data.forEach(function (item) {
        $(`#quotes-pic-${item.id}`).attr('src', item.pic_url);
        $(`#quotes-text-${item.id}`).text(item.text);
        $(`#quotes-name-${item.id}`).text(item.name);
        $(`#quotes-title-${item.id}`).text(item.title);
      });
      // remove loader and show carousel
      $('#testimonialLoader').remove();
      $('#quotes').removeClass('d-none');
    },
    error: function () {
      // handle error
      console.log('Error fetching quotes');
    },
  });
});
