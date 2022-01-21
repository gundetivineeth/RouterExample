import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:AuthserviceService) { }

  ngOnInit() {
  }
  redirectTO(){
    this.router.navigate(['/servers',1,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  }
  loggedIn(){
    this.authService.loggedIn();
  }
  loggedOut(){
    this.authService.loggedOut();
  }
}
