import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActeursComponent } from './acteurs/acteurs.component';
import { AddActeurComponent } from './add-acteur/add-acteur.component';
import { FormsModule } from '@angular/forms';
import { UpdateActeurComponent } from './update-acteur/update-acteur.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParFilmComponent } from './recherche-par-film/recherche-par-film.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActeursComponent,
    AddActeurComponent,
    UpdateActeurComponent,
    RechercheParFilmComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
