import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OmegaCarouselComponent } from './omega-carousel/omega-carousel.component'; // Import your component

@NgModule({
  declarations: [], // Add your component to the declarations
    imports: [BrowserModule, OmegaCarouselComponent, AppComponent, BrowserAnimationsModule],
    providers: [],
    bootstrap: [ApplicationModule],
})
export class AppModule {}