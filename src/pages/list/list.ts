import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { PeopleServiceProvider } from "../../providers/people-service/people-service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{ name: { first: string, last: string}, picture: { thumbnail: string}}>
  list:  Array<{ name: { first: string, last: string}, picture: { thumbnail: string}}>
  searchTerm: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public peopleService: PeopleServiceProvider
  ) {

    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.load()
      .then(data => {
        this.items = data;
        this.list = this.items;
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  filterItems(searchTerm) {
    return this.list.filter((item) => {
    return item.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.name.last.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ;
    });
  }

  setFilteredItems() {
    if (this.searchTerm != '') {
      this.items = this.filterItems(this.searchTerm);
    } else {
      this.items = this.list;
    }
  }
}
