import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
// import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    // private notifier: NotifierService,
  ) { }

  ngOnInit() {
  }

  onRegister() {
    this.authService.register(this.email, this.password)
      .then(res => {
        // this.notifier.show({
        //   type: 'success',
        //   message: `Welcome ${this.email}, you are now register to myDeliciouslyGreen, don\'t forget to create your profile`,
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



