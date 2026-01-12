import { Component, isStandalone } from '@angular/core';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallerij',
  templateUrl: './gallerij.component.html',
  styleUrls: ['./gallerij.component.css']
})
export class GallerijComponent {

  // Je kunt dit later vervangen door data uit service / backend
  images: string[] = [
    'assets/foto1.jpeg',
    'assets/foto2.jpeg',
    'assets/foto3.jpeg',
    'assets/foto4.jpeg',
    'assets/foto5.jpeg',
    'assets/foto6.jpeg',
    'assets/foto7.jpeg',
    'assets/foto8.jpeg',
    'assets/foto9.jpeg',
    'assets/foto10.jpeg',
    'assets/foto11.jpeg',
    'assets/foto12.jpeg',
    'assets/foto13.jpeg',
    'assets/foto14.jpeg',
    'assets/foto15.jpeg',
    'assets/foto16.jpeg',
    // Voeg zoveel toe als je wilt...
  ];


  // ... rest van je component

trackByImg(index: number, img: string): string {
  return img;  // Unieke key = de src zelf (snel & efficiënt)
}

selectedIndex: number | null = null;

openLightbox(index: number) {
  this.selectedIndex = index;
}

closeLightbox() {
  this.selectedIndex = null;
}

}