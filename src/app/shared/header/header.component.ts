import { Component, OnInit } from '@angular/core';
import { UserService } from './../../data/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() { }
  falsePink() {
    this.userService.SetPinkGuard(false);
  }
}
