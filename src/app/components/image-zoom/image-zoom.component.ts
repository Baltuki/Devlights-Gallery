import { Component, HostListener,EventEmitter } from '@angular/core';
import { ImageCard } from '../image-card/image.model';
import { NgFor } from '@angular/common';
import { ImageCardComponent } from "../image-card/image-card.component";
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  standalone: true,
  imports: [NgFor, ImageCardComponent, HeaderComponent,CommonModule],
  templateUrl: './image-zoom.component.html',
  styleUrl: './image-zoom.component.css'
})
export class ImageZoomComponent {
  
    @Input() selectedImage: ImageCard | null = null;
    @Input() images: ImageCard[] = [];
    @Output() closeZoom = new EventEmitter<void>();  

    
    previousImage(): void {
      if (this.selectedImage && this.images.length > 0) {
        const currentIndex = this.images.findIndex(img => img.id === this.selectedImage?.id);
        const previousIndex = (currentIndex - 1 + this.images.length) % this.images.length;
        this.selectedImage = this.images[previousIndex];
      }
    }
  
  
    nextImage(): void {
      if (this.selectedImage && this.images.length > 0) {
        const currentIndex = this.images.findIndex(img => img.id === this.selectedImage?.id);
        const nextIndex = (currentIndex + 1) % this.images.length;
        this.selectedImage = this.images[nextIndex];
      }
    }
  
  close(): void {
    this.closeZoom.emit();  
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    this.close();  
  }
}