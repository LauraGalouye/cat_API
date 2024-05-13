import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { BreedInfoComponent } from '../breed-info/breed-info.component';
import { Breed } from '../models/breed.model';

@Component({
  selector: 'app-breed-page',
  standalone: true,
  imports: [
    CommonModule,
    FilterComponent,
    BreedInfoComponent],
  templateUrl: './breed-page.component.html',
  styleUrl: './breed-page.component.scss'
})
export class BreedPageComponent implements OnInit {
  @Input() breeds: Breed = {} as Breed;
  selectedBreed: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCatBreed();
    
  }

  getCatBreed(): void {
    this.apiService.getBreedData().subscribe(
      (id) => {
        this.breeds = id;
        console.log('Breeds: ', this.breeds);
      },
      (error: any) => {
        console.error('Error fetching breeds: ', error);
      }
    );
  }

  handleBreedSelected(breed: string): void {
    this.selectedBreed = breed;
    
  }
}
