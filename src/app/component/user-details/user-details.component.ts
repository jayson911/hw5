import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  detailedUSer;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) =>{
      this.detailedUSer = history.state.xxx;
    });
    // console.log(this.router.getCurrentNavigation().extras.state);
    // this.detailedUSer = this.router.getCurrentNavigation().extras.state.xxx;

    this.activatedRoute.queryParams.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
