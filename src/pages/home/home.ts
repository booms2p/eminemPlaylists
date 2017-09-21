import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('https://itunes.apple.com/search?term=eminem')
    .map(res => res.json())
    .subscribe(data => {
      // console.log(data);
      this.albumLists = data.results;
      console.log(this.albumLists);
    });
  }

  albumLists;

}
