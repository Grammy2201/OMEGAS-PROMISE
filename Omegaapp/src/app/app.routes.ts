import { Routes } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { DonateComponent } from './Donate/donate.component';
import { HomeComponent } from './Home/home.component';




export const routes: Routes = [

    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'donate', component:DonateComponent}
];