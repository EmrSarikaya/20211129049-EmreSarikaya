import { HomeComponent } from './component/home/home.component';
import { ProfilComponent } from './component/profil/profil.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { IlanComponent } from './component/ilan/ilan.component';
import { KategoriComponent } from './component/kategori/kategori.component';
import { ImageComponent } from './component/image/image.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [
  {
    path: 'gorev',
    component: HomeComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'ilanlar',
    component: IlanComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: '',
    component: ImageComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'Kategoriler',
    component: KategoriComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'profil',
    component: ProfilComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectToHome),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }