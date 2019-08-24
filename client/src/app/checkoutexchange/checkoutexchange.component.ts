import { Component, OnInit , } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkoutexchange',
  templateUrl: './checkoutexchange.component.html',
  styleUrls: ['./checkoutexchange.component.css']
})
export class CheckoutexchangeComponent implements OnInit {
 
   purchaseForm = new FormGroup({
     firstName: new FormControl('احمد'),
     lastName: new FormControl('صلاح'),
     email: new FormControl('a@a.com'),
       phone: new FormControl('09100'),
       state: new FormControl('الخرطوم'),
       locallity: new FormControl('بحري'),
       nigh: new FormControl('الثورة'),
       street: new FormControl('العاشر'),
       address: new FormControl(''),
       note: new FormControl(''),
       days: new FormControl(''),
     });

   constructor() { }
 
     ngOnInit() {
     
     }

 
 

 
 }
 