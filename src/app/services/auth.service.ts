import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }


  getAuth() {
    return this.afAuth.authState.pipe();
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    }
    );
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    }
    );
  }

  logOut() {
    this.afAuth.signOut();
  }

  resetPassword(email: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(email)
        .then(userData => resolve(userData),
          err => reject(err));
    }
    );
  }
}




