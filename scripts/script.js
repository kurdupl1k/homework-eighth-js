const WEATHER_URL = "http://api.weatherstack.com/current";
const API_KEY = "?access_key=ae69a27d0a85dc2bd82ff554e1dbe394&query=";

$(".search-button").click(function () {
  let searchText = $("#searchField").val();

  if (searchText.length > 0) {
    if(!$.get(WEATHER_URL + API_KEY + searchText, function (data) {
      
    }).success) {
      $(".content").empty();
      $(".content").append(`
        <div class="content-block">
          <p class="error404-text">404 error</p>
        </div>
      `);
    }
  }
});