  var slideIndex = 0;
  var slideOrder = shuffle(Array.from(Array(9).keys()));

  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementById("slider").getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
      slideOrder = shuffle(slideOrder);
    }
    slides[slideOrder[slideIndex - 1]].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
