import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ImageCardComponent } from './components/image-card/image-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryComponent, ImageCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gallery';
}
