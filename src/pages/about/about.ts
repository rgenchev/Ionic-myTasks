import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	versionNumber = "1.0.0";

  constructor(public navCtrl: NavController) {

  }

}
