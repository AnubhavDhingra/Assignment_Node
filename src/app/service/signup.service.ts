import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SignupService {
  public users;
  constructor(private http: Http) { }
  public token;

  postUserDetails( username: String, mobile: Number, email: String, password: String ) {
    return this.http.post('http://localhost:2000/api/createuser', {username: username, mobile: mobile, email: email, password: password } )
    .subscribe(res => console.log(res));
  }
  getUser() {
    return this.http.get('http://localhost:2000/api/getUsers').map((res: Response) => res.json());
    }
  loginUser( email: String, password: String) {
    return this.http.post('http://localhost:2000/api/loginuser', { email: email, password: password}).map(
      (res: Response) => res.json( ));
  }
}
