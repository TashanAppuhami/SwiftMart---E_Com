import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { SignUp } from './page/sign-up/sign-up';
import { LandingPage } from './page/landing-page/landing-page';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "signUp",
        component: SignUp
    },
    {
        path: "",
        component: LandingPage
    }

];
