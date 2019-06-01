import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  
  name: string;
  surname: string;
  email: string;
  message: string;

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit(){

let obj = {
  name: this.name,
  surname: this.surname,
  email: this.email,
  message: this.message
}
    this.db.collection('zaliczenie').add(obj);
  }

}