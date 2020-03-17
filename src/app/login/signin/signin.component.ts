import { AgregarLibrosService } from './../../data/agregar-libros.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../data/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  signin = new FormGroup({
    user_email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  data: any;

  constructor(private userservice: UserService, private router: Router) {
    this.send();
  }

  ngOnInit() {}

  send() {
    this.data = this.signin;
    console.log(this.data);

    if (this.data.invalid) {
      console.log("Putos");
      return;
    }

    this.userservice.loginUser(this.data.value).subscribe((res: any) => {
      console.log(res);
      if (res.userExist) {
        localStorage.setItem("email_user", res.userExist._id);
        this.router.navigate(['/perfilUsuario']);
        console.log('Tons que');
      } else {
        window.alert(res.message);
      }
    });
  }
}
