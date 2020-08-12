import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reg = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$";
  regForm = new FormGroup({
    'name': new FormControl('', [Validators.required , Validators.minLength(6) , Validators.maxLength(18)]),
    'email':new FormControl('' , [Validators.required, Validators.pattern(this.reg)]),
    'subject': new FormControl('', [Validators.required, Validators.max(60), Validators.min(4)]),
    'message':new FormControl('', [Validators.required, Validators.max(300), Validators.min(10)])
  })

}
