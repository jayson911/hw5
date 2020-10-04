import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  detailedUSer;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.userService.getUserById(params.id).subscribe(value => this.detailedUSer = value);
      }
    );

  }

  ngOnInit(): void {
  }

}
