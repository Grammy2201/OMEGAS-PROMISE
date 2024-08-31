import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { DonateComponent } from './Donate/donate.component';
import { HomeComponent } from './Home/home.component';


const routes: Routes = [
    {path: '',component: HomeComponent, pathMatch:'full'},
    {path: 'donate',component: DonateComponent, pathMatch:'full' },
    {path: 'about', component: AboutComponent, pathMatch:'full'},
    {path: 'contact', component: ContactComponent, pathMatch:'full' }

];



@NgModule({
    declarations: [],
    imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }