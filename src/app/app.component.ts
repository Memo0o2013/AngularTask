import { Component } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AphrieTask';
}


$(document).ready(function () {
  $(window).scroll(function () {

      if ($(this).scrollTop() > 100) {
          $('.scroll-up').fadeIn();
      } else {
          $('.scroll-up').fadeOut();
      }
  });

  $('.scroll-up').click(function () {
      $("html,body").animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });


  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});

});


