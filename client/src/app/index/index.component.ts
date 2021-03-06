import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router : Router , private auth : AuthService) { }

  ngOnInit() {
    if (this.auth.getToken()) {
      this.router.navigate(['/user/home/']);
    }
  }

}
