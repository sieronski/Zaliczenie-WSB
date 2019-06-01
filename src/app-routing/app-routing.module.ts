import { NgModule }             from '@angular/core';
import { AppComponent }             from '../app/app.component';
import { KontaktComponent }             from '../app/kontakt/kontakt.component';
import { RouterModule, Routes } from '@angular/router';
import { KlimatyzacjeComponent } from '../app/klimatyzacje/klimatyzacje.component';
import { ChlodnictwoComponent } from '../app/chlodnictwo/chlodnictwo.component';
import { HomeComponent } from '../app/home/home.component';
import { RealizacjeComponent } from '../app/realizacje/realizacje.component';
import { CertyfikatyComponent } from '../app/certyfikaty/certyfikaty.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'klimatyzacje', component: KlimatyzacjeComponent },
  { path: 'chlodnictwo', component: ChlodnictwoComponent },
  { path: 'realizacje', component: RealizacjeComponent },
  { path: 'certyfikaty', component: CertyfikatyComponent },
  { path: 'home', component: HomeComponent },



];
@NgModule({
   imports: [
     RouterModule.forRoot(routes, { useHash: true })
   ],
   exports: [RouterModule]
})
export class AppRoutingModule {}