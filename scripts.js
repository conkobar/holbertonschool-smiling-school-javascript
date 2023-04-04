// execute when the DOM has fully loaded
$(document).ready(function () {
  // displays quotes
  getQuotes();
  // display tutorials
  getTutorials();
  // display latest videos
  getLatestVids();
});

// fetch quotes from API
const getQuotes = () => {
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
};

// fetch popular tutorials from API
const getTutorials = () => {
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    method: 'GET',
    success: (data) => {
      // show data in console
      console.log(data);
      // add HTML elements to body
      data.forEach((item) => {
        $(`#tutorials`).append(`
          <div id="tutorial-${
            item.id
          }" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card border-0">
              <img
                src="${item.thumb_url}"
                class="bg-img card-img-top img-fluid"
                alt="thumbnail"
              />
              <img class="card-img-overlay w-50 ml-5 mt-3" src="./images/play.png">
              <div class="card-body">
                <h5>${item.title}</h5>
                <p>${item['sub-title']}</p>
                <div class="row">
                  <img
                    src="${item.author_pic_url}"
                    alt="tiny profile"
                    style="height: 20px"
                    class="mx-3 rounded-circle"
                  />
                  <h6 class="purple-text">${item.author}</h6>
                </div>
                <!-- stars -->
                <div class="row mx-0">
                  <img src="./images/star_${
                    item.star >= 1 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 2 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 3 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 4 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 5 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
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
    },
  });
};

// fetch latest videos from API
const getLatestVids = () => {
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/latest-videos',
    method: 'GET',
    success: (data) => {
      // show data in console
      console.log(data);
      // add HTML elements to body
      data.forEach((item) => {
        console.log(item);
        $(`#blockbuster`).append(`
          <div id="latest-${
            item.id
          }" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card border-0">
              <img
                src="${item.thumb_url}"
                class="bg-img card-img-top img-fluid"
                alt="thumbnail"
              />
              <img class="card-img-overlay w-50 ml-5 mt-3" src="./images/play.png">
              <div class="card-body">
                <h5>${item.title}</h5>
                <p>${item['sub-title']}</p>
                <div class="row">
                  <img
                    src="${item.author_pic_url}"
                    alt="tiny profile"
                    style="height: 20px"
                    class="mx-3 rounded-circle"
                  />
                  <h6 class="purple-text">${item.author}</h6>
                </div>
                <!-- stars -->
                <div class="row mx-0">
                  <img src="./images/star_${
                    item.star >= 1 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 2 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 3 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 4 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <img src="./images/star_${
                    item.star >= 5 ? 'on' : 'off'
                  }.png" height="15px" width="15px" />
                  <h6 class="purple-text ml-auto">${item.duration}</h6>
                </div>
              </div>
            </div>
          </div>
        `);
      });
      // make first slide active
      $('#latest-1').addClass('active');
      // remove loader and show carousel
      $('#latestLoader').remove();
      $('#latest-videos').removeClass('d-none');
    },
    error: () => {
      // handle fetching error
      console.log('Error fetching latest vids');
    },
  });
};
