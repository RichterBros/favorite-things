$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const food = $("input#food").val();
    const color = $("input#color").val();
    const city = $("input#city").val();
    
    const arrayFavs = [food, color, city];
    


  });
});