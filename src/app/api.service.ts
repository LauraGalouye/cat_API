import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class ApiService {

    private catApiKey!: string;
    private apiUrl: string = 'https://api.thecatapi.com/v1';

    constructor(private http: HttpClient) {}

    getCatImage(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/images/search?limit=50&api_key=live_mULhlRuruvI8kEsjYgFI3hDnKGQAAA32yWMVykrAn9xKPzgWwgLWaNxwvcd8TOvv`);
    }

    getCatImageByBreed() : Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/images/`);
    }

    getCatBreed(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/breeds`);
    }

    getBreedData(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/breeds`);
    }
}