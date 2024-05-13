import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { CatCardComponent } from '../cat-card/cat-card.component';

@Component({
  selector: 'app-random-page',
  standalone: true,
  imports: [
    CommonModule,
    CatCardComponent
  ],
  templateUrl: './random-page.component.html',
  styleUrl: './random-page.component.scss'
})
export class RandomPageComponent implements OnInit{
  @Input() randomCat: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Add your initialization logic here
  }
}
