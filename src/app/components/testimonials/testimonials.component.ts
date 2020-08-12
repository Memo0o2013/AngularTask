import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials.service'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {

  constructor(private myService:TestimonialsService) { }
  subscriber;
  testimonials;
  ngOnDestroy(): void{
    this.subscriber.unsubscribe();
  }
  ngOnInit(): void {
    this.subscriber = this.myService.getTestimonials()
    .subscribe((test)=>{
      if(test)
        this.testimonials = test;
    },(err)=>{})
  }
}
