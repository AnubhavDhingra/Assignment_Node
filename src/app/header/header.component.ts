import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: SignupService) { }

  ngOnInit() {
  }
  onLogout(){
    this.service.token = false;
  }
}
