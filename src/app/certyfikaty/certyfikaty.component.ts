import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-certyfikaty',
  templateUrl: './certyfikaty.component.html',
  styleUrls: ['./certyfikaty.component.css']
})
export class CertyfikatyComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: ' 60%',
        height: '190vh',
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
          small: 'assets/cert1.jpg',
          medium: 'assets/cert1.jpg',
          big: 'assets/cert1.jpg'
      },
      {
          small: 'assets/cert2.jpg',
          medium: 'assets/cert2.jpg',
          big: 'assets/cert2.jpg'
      },
      {
          small: 'assets/cert3.jpg',
          medium: 'assets/cert3.jpg',
          big: 'assets/cert3.jpg'
      }
  ];
  }

}
