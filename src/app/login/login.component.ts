import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = [];
  public token = false;
  constructor(private service: SignupService, private router: Router) { }

  ngOnInit() {
  }
  login(mail: any, pass: any) {

    this.service.loginUser(mail, pass).subscribe(data => {
      if (data) {
        this.service.token = true;
        this.router.navigate(['/products']);
      } else { this.router.navigate(['/'])}
   });
}

}
