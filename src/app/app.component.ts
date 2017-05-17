import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LogedPage } from '../pages/loged/loged';
import { Events } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Login', component: LoginPage }
    ];

    events.subscribe('user:login', (user) => {
      this.access(user);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  access(user) {
    this.nav.setRoot(LogedPage, {
      user: user
    });
    if (user.access) {
      this.pages = [
        { title: 'Hello Ionic', component: HelloIonicPage },
        { title: 'Lista de empleados', component: ListPage }
      ];
    }
  }
}
