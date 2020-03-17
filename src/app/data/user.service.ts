import { PinkGuard } from "./../guard/pink.guard";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../interface-data/interface.DataEstrucura";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private PinkGuardStatus = false;

  SERVER_HOST = environment.SERVER_HOST;

  constructor(private http: HttpClient) {}
  user: IUser[] | any;

  SetPinkGuard(value: boolean) {
    this.PinkGuardStatus = value;
  }

  get isPinkGuard() {
    return this.PinkGuardStatus;
  }

  createUser(user: IUser) {
    try {
      const response = this.http.post(`${this.SERVER_HOST}/user`, user);
      // console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  loginUser(login: IUser) {
    try {
      const response = this.http.post(`${this.SERVER_HOST}/user/login`, login);
      this.SetPinkGuard(true);
      // console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
