import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BreedPageComponent } from '../app/breed-page/breed-page.component';
import { RandomPageComponent } from './random-page/random-page.component';
import { FilterComponent } from '../app/filter/filter.component';
import { BreedInfoComponent } from '../app/breed-info/breed-info.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    // Liste des composants déclarés dans ce module
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Déclaration des routes
    
  ],
  providers: [],
  ///bootstrap: [AppComponent] // Déclaration du composant racine de l'application
})
export class AppModule { }
