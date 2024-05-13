import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BreedPageComponent } from '../app/breed-page/breed-page.component';
import { RandomPageComponent } from './random-page/random-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'random', component: RandomPageComponent},
  { path: 'breeds', component: BreedPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
  // Autres routes peuvent être ajoutées ici
];

