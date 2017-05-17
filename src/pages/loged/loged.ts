import { Component } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'loged.html'
})
export class LogedPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
}