import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryOptions2: NgxGalleryOptions[];

  galleryImages: NgxGalleryImage[];
  galleryImages2: NgxGalleryImage[];


  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '100%',
              height: '60vh',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide,
              thumbnails: false,
              imageArrows: false,
              imageSwipe: true,
              imageBullets : false,
              previewBullets: true,
              imageAutoPlay: true,
              preview: false,
              
          }
          
      ];
      this.galleryOptions2 = [
        {
            width: '100%',
            height: '300px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide,
            thumbnails: false,
            imageArrows: false,
            imageSwipe: true,
            imageBullets : false,
            previewBullets: true,
            imageAutoPlay: true,
            preview: false,
            
        }
        
    ];

      this.galleryImages = [
          {
              small: 'assets/1.jpg',
              medium: 'assets/1.jpg',
              big: 'assets/1.jpg'
          },
          {
              small: 'assets/2.jpg',
              medium: 'assets/2.jpg',
              big: 'assets/2.jpg'
          },
          {
              small: 'assets/3.jpeg',
              medium: 'assets/3.jpeg',
              big: 'assets/3.jpeg'
          }
      ];
      this.galleryImages2 = [
        {
            small: 'assets/partners1.png',
            medium: 'assets/partners1.png',
            big: 'assets/partners1.png'
        },
        {
            small: 'assets/partnerzy2.png',
            medium: 'assets/partnerzy2.png',
            big: 'assets/partnerzy2.png'
        }
    ];
    }

}
