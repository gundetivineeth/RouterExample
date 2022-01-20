import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.user = {id: this.activatedRouter.snapshot.params['id'],
                 name: this.activatedRouter.snapshot.params['name']};
    this.activatedRouter.params.subscribe(
      (params: Params ) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )             
  }

}
