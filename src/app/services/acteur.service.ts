import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Acteur } from '../model/acteur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilmWrapper } from '../model/filmWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ActeurService {
  apiURL: string = 'http://localhost:9999/acteurs/api';
  apiURLCat: string = 'http://localhost:9999/acteurs/film';
  acteurs: Acteur[]; //un tableau de acteurs
  //films : Film[];

  constructor(private http: HttpClient) {
    /* this.films = [
      { idFilm: 1, nomFilm: 'Goodfellas' },
      { idFilm: 2, nomFilm: 'The Sopranos' },
    ]; */
    this.acteurs = [
      /* {
        idActeur: 1,
        nomActeur: 'Joe Pesci ',
        salaireActeur: 100000,
        dateNaissance: new Date('02/09/1943'),
        film: { idFilm: 1, nomFilm: 'Goodfellas' },
      },

      {
        idActeur: 2,
        nomActeur: 'Robert de Niro',
        salaireActeur: 250000,
        dateNaissance: new Date('08/17/1943'),
        film: { idFilm: 1, nomFilm: 'Goodfellas' },
      },

      {
        idActeur: 3,
        nomActeur: 'Ray Liotta',
        salaireActeur: 150000,
        dateNaissance: new Date('12/18/1954'),
        film: { idFilm: 2, nomFilm: 'The Sopranos' },
      },*/
    ];
  }

  listeActeur(): Observable<Acteur[]> {
    return this.http.get<Acteur[]>(this.apiURL);
  }

  ajouterActeur(act: Acteur): Observable<Acteur> {
    return this.http.post<Acteur>(this.apiURL, act, httpOptions);
  }

  supprimerActeur(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterActeur(id: number): Observable<Acteur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Acteur>(url);
  }

  trierActeurs() {
    this.acteurs = this.acteurs.sort((n1, n2) => {
      if (n1.idActeur > n2.idActeur) {
        return 1;
      }
      if (n1.idActeur < n2.idActeur) {
        return -1;
      }
      return 0;
    });
  }

  updateActeur(act: Acteur): Observable<Acteur> {
    return this.http.put<Acteur>(this.apiURL, act, httpOptions);
  }

  /*listeFilms():Observable<Film[]>{
            return this.http.get<Film[]>(this.apiURL+"/film");
            }*/

  listeFilms(): Observable<FilmWrapper> {
    return this.http.get<FilmWrapper>(this.apiURLCat);
  }

  rechercherParFilm(idFilm: number): Observable<Acteur[]> {
    const url = `${this.apiURL}/actfilm/${idFilm}`;
    return this.http.get<Acteur[]>(url);
  }

  rechercherParNom(nom: string):Observable< Acteur[]> {
    const url = `${this.apiURL}/actsByName/${nom}`;
    return this.http.get<Acteur[]>(url);
    }

  /*  consulterFilm(id:number): Film{
            return this.films.find(film => film.idFilm == id)!;
            
        
         }*/
}
