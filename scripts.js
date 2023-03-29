// execute when the DOM has fully loaded
$(document).ready(function () {
  // fetch quotes from API
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    method: 'GET',
    success: function (data) {
      // show data in console
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
      // handle fetching error
      console.log('Error fetching quotes');
    },
  });

  // fetch popular tutorials from API
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    method: 'GET',
    success: data => {
      // show data in console
      console.log(data);
      // add HTML elements to body
      data.forEach(item => {
        $(`#tutorials`).append(`
          <div id="tutorial-${item.id}" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card border-0">
              <img
                src="./images/thumbnail_3.jpg"
                class="bg-img card-img-top"
                alt="thumbnail"
              />
              <div class="card-body">
                <h5>${item.title}</h5>
                <p>${item['sub-title']}</p>
                <div class="row">
                  <img
                    src="${item['author_pic_url']}"
                    alt="tiny profile"
                    style="height: 20px"
                    class="mx-3 rounded-circle"
                  />
                  <h6 class="purple-text">${item.author}</h6>
                </div>
                <!-- stars -->
                <div class="row mx-0">
                  <img src="./images/star_on.png" height="15px" width="15px" />
                  <img src="./images/star_on.png" height="15px" width="15px" />
                  <img src="./images/star_on.png" height="15px" width="15px" />
                  <img src="./images/star_on.png" height="15px" width="15px" />
                  <img src="./images/star_off.png" height="15px" width="15px" />
                  <h6 class="purple-text ml-auto">${item.duration}</h6>
                </div>
              </div>
            </div>
          </div>
        `);
      });
      // make first slide active
      $('#tutorial-1').addClass('active');
      // remove loader and show carousel
      $('#tutorialLoader').remove();
      $('#popular').removeClass('d-none');
    },
    error: () => {
      // handle fetching error
      console.log('Error fetching tutorials');
    }
  });
});
