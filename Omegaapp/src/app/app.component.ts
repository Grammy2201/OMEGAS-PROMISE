import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        RouterModule,
        CommonModule
    ],
})
export class AppComponent {
  title = 'OMEGAS PROMISE';

  router = inject(Router)

  navigate() {
    this.router.navigate(['/home']);
  }

 navigateToDonate() {
  this.router.navigate(['/donate']);
 }

 navigateToAbout() {
  this.router.navigate(['/about']);
 }
 navigateToContact() {
  this.router.navigate(['/contact']);
 }


}
