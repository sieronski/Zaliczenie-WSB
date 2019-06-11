import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.css']
})
export class RealizacjeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '70%',
          height: '80vh',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageAutoPlay: true,
          imageAutoPlayPauseOnHover: true,
          previewFullscreen: true,
          previewCloseOnClick: true,
          previewCloseOnEsc: true,
          previewInfinityMove: true,
          thumbnailsPercent: 20,
          previewKeyboardNavigation: true,


          
      }
  ];
  
  this.galleryImages = [
      {
          small: 'assets/wykon1.jpg',
          medium: 'assets/wykon1.jpg',
          big: 'assets/wykon1.jpg'
      },
      {
          small: 'assets/wykon2.jpg',
          medium: 'assets/wykon2.jpg',
          big: 'assets/wykon2.jpg'
      },
      {
          small: 'assets/wykon3.jpg',
          medium: 'assets/wykon3.jpg',
          big: 'assets/wykon3.jpg'
      },
      {
        small: 'assets/wykon4.jpeg',
        medium: 'assets/wykon4.jpeg',
        big: 'assets/wykon4.jpeg'
    }

  ];
  }

}
