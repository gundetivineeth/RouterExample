import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn = false;

  constructor() { }

  isAuthenticated(){
    const promise = new Promise(
      (resolve,reject) => {
        setTimeout(() => {
          resolve(this.isLoggedIn)
        }, 800);
      }
    )
    return promise;
  }

  loggedIn(){
    this.isLoggedIn = true;
  }
  loggedOut(){
    this.isLoggedIn = false;
  }
}

