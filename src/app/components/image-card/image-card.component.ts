import { Component, Input } from '@angular/core';
import { Image } from '../image-interface';
import { NgFor } from '@angular/common';
import { ImageCard } from './image.model';


@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  @Input() imageCard!: Image; 
}
