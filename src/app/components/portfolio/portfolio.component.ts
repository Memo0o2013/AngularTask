import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

$(document).ready(function () {
    $(".filter-button").click(function(){
        let value = $(this).attr('data-filter');
        if(value == "all")
        {
          $('.filter').show('1000');
        }
        else
        {
          $(".filter").not('.'+value).hide();
          $('.filter').filter('.'+value).fadeIn();   
        }
    });

  $(".filter-button").on("click", function(){
    $("#portfolio").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
