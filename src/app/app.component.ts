import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { FilterComponent } from './filter/filter.component';
import { BreedPageComponent } from './breed-page/breed-page.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import {Cat} from "./models/cat.model";
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HomePageComponent,
    CatCardComponent,
    FilterComponent,
    BreedPageComponent,
    CommonModule, 
    BreedInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'cat-app';
  cat: Cat = {
    id: "0",
    url: '',
    width: 0,
    height: 0,
    
  };

  ngOnInit(): void{
    {
      console.log('AppComponent initialized');
    }
  }
}
