import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  latitude = 51.732650;
  longitude = 18.210629;

  constructor() { }

  ngOnInit() {
  }
 
}


