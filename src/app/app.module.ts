import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule} from '../app-routing/app-routing.module';
import { KlimatyzacjeComponent } from './klimatyzacje/klimatyzacje.component';
import { ChlodnictwoComponent } from './chlodnictwo/chlodnictwo.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RealizacjeComponent } from './realizacje/realizacje.component';
import { CertyfikatyComponent } from './certyfikaty/certyfikaty.component';
import { MapsComponent } from './maps/maps.component';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core';


import { NgxGalleryModule } from 'ngx-gallery';
import { RekuperacjaComponent } from './rekuperacja/rekuperacja.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    KlimatyzacjeComponent,
    ChlodnictwoComponent,
    HomeComponent,
    RealizacjeComponent,
    CertyfikatyComponent,
    MapsComponent,
    RekuperacjaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCmVvbXmHxa3mo_fIvbQFmsw_XVKf2iE-o'}),
    NgxGalleryModule
   

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }



