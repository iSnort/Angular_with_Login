import { LiteraturaComponent } from "./page/literatura/literatura.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// COMPONENTE
import { SigninComponent } from "./login/signin/signin.component";
import { SignupComponent } from "./login/signup/signup.component";
import { Page404Component } from "./shared/page404/page404.component";
import { AddBooksComponent } from "./page/add-books/add-books.component";
import { ComicFantasiaComponent } from "./page/comic-fantasia/comic-fantasia.component";
import { CocinaGastronomiaComponent } from "./page/cocina-gastronomia/cocina-gastronomia.component";
import { UserProfileComponent } from "./page/user-profile/user-profile.component";

import { CardsComponent } from "./shared/cards/cards.component";
import { AlertComponent } from './shared/alert/alert.component';

// Importamos el guard(pink)
import { PinkGuard } from './guard/pink.guard';

const routes: Routes = [
  {
    path: "hola",
    component: AlertComponent,
    data: { title: "Iniciar sesion" }
  },
   {
    path: "signin",
    component: SigninComponent,
    data: { title: "Iniciar sesion" }
  },
  {
    path: "signup",
    component: SignupComponent,
    data: { title: "registrarse" }
  },
  {
    path: "Agregarlibros",
    component: AddBooksComponent,
    data: { title: "Agregar libro" },
    canActivate: [PinkGuard]
  },
  {
    path: "comicyfantasia",
    component: ComicFantasiaComponent,
    data: { title: "Comic y fantasi" }
  },
  {
    path: "cocinaygastronomia",
    component: CocinaGastronomiaComponent,
    data: { title: "cocina y gastronomía" }
  },
  {
    path: "literatura",
    component: LiteraturaComponent,
    data: { title: "literatura" }
  },
  // crear seccion para perfil de usuario previamente importada
  {
    path: "perfilUsuario",
    component: UserProfileComponent,
    data: { title: "Perfil Usuario"},
    canActivate: [PinkGuard]
  },

  { path: "", pathMatch: "full", redirectTo: "" },
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
