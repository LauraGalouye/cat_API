import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})

export class CatCardComponent implements OnInit {
  @Input() cats : Cat[] = [];

  catData: any = [];
  catVotes: { [catId : string]: number } = {};
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCatImage();
  }

  getCatImage(): void {
    this.apiService.getCatImage().subscribe(
      (data) => {
      this.catData = data;
      console.log('Cat data: ', this.catData);

      this.catData.forEach((cat: any) => {
        const imageUrls = cat.url;
    
      }),

      this.cats = this.catData.forEach((cat: any) => {
        const catWidth = cat.width;
        const catHeight = cat.height;
        
      }),

    (error:any) => {
      console.error('Error fetching cat data: ', error);
    }
    
    }
    );
  }

  onLike(catId:string): void {
    if(this.catVotes[catId] === undefined) {
      this.catVotes[catId] = 0;
    } 
    this.catVotes[catId]++;
  }
  

}