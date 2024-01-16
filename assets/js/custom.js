$(document).ready(function () {
  // Get the current date and time
  var currentDate = new Date();

  // Set the target time to the same time on the next day
  var targetTime = new Date(currentDate);
  targetTime.setDate(currentDate.getDate() + 1);
  targetTime.setHours(0, 0, 0, 0); // Set the time to 12:00:00 AM

  function updateCountdown() {
    var currentTime = new Date();

    // Calculate the remaining time until the target time on the next day
    var remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
      // If the countdown has expired, reset the target time to the next day
      targetTime.setDate(currentDate.getDate() + 1);
      targetTime.setHours(0, 0, 0, 0);
      remainingTime = targetTime - currentTime;
    }

    var hours = Math.floor(remainingTime / 3600000);
    var minutes = Math.floor((remainingTime % 3600000) / 60000);
    var seconds = Math.floor((remainingTime % 60000) / 1000);

    $("#hours_counter").text(pad(hours));
    $("#minutes_counter").text(pad(minutes));
    $("#seconds_counter").text(pad(seconds));
  }

  // Update every second (1000 milliseconds)
  var intervalId = setInterval(updateCountdown, 1000);

  // Function to pad single-digit numbers with leading zeros
  function pad(num) {
    return (num < 10 ? "0" : "") + num;
  }

  //Faqs
  jQuery(".faqs .question").on("click", function (e) {
    e.preventDefault();
    jQuery(this).parent().toggleClass("active");
    jQuery(this).next().slideToggle();
  });
  jQuery(".faqs .question").first().click();

  //Show footer after scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 170){
      $('footer').addClass("fixed");
    } else {
      $('footer').removeClass("fixed");
    }
  });

  //Model js
  $('.play_icon').click(function (e) {
    e.preventDefault();
    openPopup();
  });
  $('.model_overlay, .close_icon').click(function (e) {
    e.preventDefault();
    closePopup();
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      closePopup();
    }
  });

  function openPopup() {
    // Show the overlay
    $('body').addClass('model_active');

    // Set the video URL with autoplay
    $('#videoIframe').attr('src', 'https://www.youtube.com/embed/qhxEUc4gEc4?autoplay=1');
  }

  function closePopup() {
    // Hide the overlay
    $('body').removeClass('model_active');

    // Pause the video and remove autoplay
    var src = $('#videoIframe').attr('src');
    $('#videoIframe').attr('src', src.replace('?autoplay=1', ''));
  }

  //Prevent right click on the website
  $(document).bind("contextmenu", function (e) {
    $('#tooltip').fadeIn().delay(3000).fadeOut(1000);
    return false;
  });


});
