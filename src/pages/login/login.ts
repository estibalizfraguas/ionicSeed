import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'login.html'
})
export class LoginPage {

  registerCredentials = { email: '', password: '', access: false };
  constructor(public events: Events) {}

  public checkIfUserHasAccess() {
    if(this.registerCredentials.email === 'e' && this.registerCredentials.password === 'e'){
      this.registerCredentials.access=true;
      this.events.publish('user:login', this.registerCredentials);
    }else{
      this.events.publish('user:login', this.registerCredentials);
    }
  }
}
