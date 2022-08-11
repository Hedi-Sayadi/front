import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidat } from './candidat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private apiServerUrl = "http://localhost:8097"
 

  constructor(private http: HttpClient) {}
    public GetAllCandidat(): Observable<Candidat[]> {
      return this.http.get<Candidat[]>(`${this.apiServerUrl}/candidats/all`);
    }
  
    public addCandidat(candidat: Candidat): Observable<Candidat> {
      return this.http.post<Candidat>(`${this.apiServerUrl}/candidats/add`, Candidat);
    }
  
    
   }


