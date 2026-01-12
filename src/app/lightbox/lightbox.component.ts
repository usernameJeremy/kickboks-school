import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.css']
  })
export class LightboxComponent {
  @Input() images: string[] = [];           // alle afbeeldingen (assets/...)
  @Input() startIndex: number = 0;          // vanaf welke foto openen
  @Output() close = new EventEmitter<void>();

  currentIndex = 0;

  ngOnInit() {
    this.currentIndex = this.startIndex;
  }

  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  // Swipe support (touch events)
  private touchStartX = 0;
  private touchEndX = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 50) { // minimale swipe afstand
      if (diff > 0) this.next();   // swipe left → next
      else this.prev();            // swipe right → prev
    }
  }

  // Sluit met Escape of klik op backdrop
  @HostListener('document:keydown.escape')
  onEscape() {
    this.close.emit();
  }

  closeOnBackdrop(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('lightbox-backdrop')) {
      this.close.emit();
    }
  }
}