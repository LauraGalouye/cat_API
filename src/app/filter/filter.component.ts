import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import {Filter} from '../models/filter.model';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent implements OnInit {
  @Input() filter : Filter[] = [];
  @Output() breedSelected = new EventEmitter<string>();
  
  selectedBreed: string;

  constructor(private apiService: ApiService) {
    this.selectedBreed = '';
  }

  ngOnInit(): void {
    this.getCatBreed();
  }

  getCatBreed(): void {
    this.apiService.getCatBreed().subscribe(
      (name) => {
        this.filter = name;
        console.log('Cat breed: ', this.filter);

        this.filter.forEach((filter: any) => {
          const breedName = filter.name;
          //console.log('Cat breed name: ', breedName);
        });

      },
      (error:any) => {
        console.error('Error fetching cat breed: ', error);
      }
    );
  }

  handleBreedChange(event: any): void {
    this.selectedBreed = event.target.value;
    this.breedSelected.emit(this.selectedBreed);
    console.log('Selected breed: ', this.selectedBreed);
  }

 
}
