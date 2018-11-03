import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Hotel {
 name: String,
 phone: String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hotels: Observable<Hotel[]>;
  hotelsCollection: AngularFirestoreCollection<Hotel>;
  constructor(db: AngularFirestore) {
	this.hotelsCollection = db.collection<Hotel>('hotel_en');
	this.hotels = this.hotelsCollection.valueChanges();

  }

  ngOnInit() {
  }

}