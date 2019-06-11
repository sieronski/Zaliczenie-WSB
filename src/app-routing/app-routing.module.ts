import { NgModule }             from '@angular/core';
import { KontaktComponent }             from '../app/kontakt/kontakt.component';
import { RouterModule, Routes } from '@angular/router';
import { KlimatyzacjeComponent } from '../app/klimatyzacje/klimatyzacje.component';
import { ChlodnictwoComponent } from '../app/chlodnictwo/chlodnictwo.component';
import { HomeComponent } from '../app/home/home.component';
import { RealizacjeComponent } from '../app/realizacje/realizacje.component';
import { CertyfikatyComponent } from '../app/certyfikaty/certyfikaty.component';
import { RekuperacjaComponent } from '../app/rekuperacja/rekuperacja.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'klimatyzacje', component: KlimatyzacjeComponent },
  { path: 'chlodnictwo', component: ChlodnictwoComponent },
  { path: 'realizacje', component: RealizacjeComponent },
  { path: 'certyfikaty', component: CertyfikatyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rekuperacja', component: RekuperacjaComponent },




];
@NgModule({
   imports: [
     RouterModule.forRoot(routes, { useHash: true })
   ],
   exports: [RouterModule]
})
export class AppRoutingModule {}