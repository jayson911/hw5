import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    console.log(this.user);
  }

  ngOnInit(): void {
  }
  showUser(user: User): void {
    console.log(this.user);

    this.router.navigate(['details', this.user.id], {state : {xxx: user}, relativeTo : this.activatedRoute});
  }

}
