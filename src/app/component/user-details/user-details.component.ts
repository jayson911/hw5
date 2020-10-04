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
  constructor(private router: Router) {
    // console.log(this.router.getCurrentNavigation().extras.state);
    // this.detailedUSer = this.router.getCurrentNavigation().extras.state.xxx;
    this.detailedUSer = history.state.xxx;
  }

  ngOnInit(): void {
  }

}
