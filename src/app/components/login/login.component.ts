import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedInUser!: string | any;
  email!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router,
    // private notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.loggedInUser = auth.email;
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        // this.notifier.show({
        //   type: 'success',
        //   message: `Welcome back ${this.email}`,
        // });
        this.router.navigate(['/']);
      })
      .catch(err => {
        // this.notifier.show({
        //   type: 'error',
        //   message: err.message,
        // });
      });
  }
}

