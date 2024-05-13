import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breed-info',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './breed-info.component.html',
  styleUrl: './breed-info.component.scss' 
})

export class BreedInfoComponent implements OnInit{
  @Input() 
  breeds: any[] = [];
  selectedBreed: string = ''; 
  catData: any = [];
  imageIds: string[] = [];
  breed_id!: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getBreedData();
    
  }

  getBreedData(): void {
    this.apiService.getBreedData().subscribe(
      (data) => {
        this.breeds = data;
        //console.log('Cat data: ', this.breeds);
      },
      (error: any) => {
        console.error('Error fetching cat data: ', error);
      }
    );
  }

  getCatImage(): void {
    this.apiService.getCatImageByBreed().subscribe(
      (images:any[]) => {
        console.log('Cat data: ', images);
        this.imageIds = images.map(image => image.id);
        console.log('Cat data: ', this.imageIds);
      },
      (error: any) => {
        console.error('Error fetching cat data: ', error);
      }
    );
  }

}