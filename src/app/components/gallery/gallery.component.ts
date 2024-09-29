import { Component } from '@angular/core';
import { ImageCard } from '../image-card/image.model';
import { NgFor } from '@angular/common';
import { ImageCardComponent } from "../image-card/image-card.component";
import { HeaderComponent } from "../shared/header/header.component";
import { ImageZoomComponent } from '../image-zoom/image-zoom.component';
import { Input } from '@angular/core';




@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, ImageCardComponent, HeaderComponent, ImageZoomComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: ImageCard[] = [
    new ImageCard({ id: 1, url: 'https://media.licdn.com/dms/image/v2/D4D22AQGE9GFAbImFSw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725301129076?e=1730332800&v=beta&t=6IMcRPm8Zxs2zVfWnizdWDireh_DsrbeGRUcDpstg5c' }),
    new ImageCard({ id: 2, url: 'https://media.licdn.com/dms/image/v2/D4D22AQGFahXqF0ZXQQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725301128669?e=1730332800&v=beta&t=L8r9kCs4vUbqiM6q5c0tqhth7DVqb0biGHLG-2GFIro' }),
    new ImageCard({ id: 3, url: 'https://media.licdn.com/dms/image/v2/D4D22AQHqnh_r_VHnMQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725301128380?e=1730332800&v=beta&t=qv0yglvZtMnwoULJlmEYb0oJDHg-Ge5IwnUVf3-As7k' }), 
    new ImageCard({ id: 4, url: 'https://media.licdn.com/dms/image/v2/D4E22AQGFEoDwRaJ3kw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720705055782?e=1730332800&v=beta&t=OBU3DlfMVWykRw667S5hSuwgkrmh2ve3eG7jnvfwPTo' }), 
    new ImageCard({ id: 5, url: 'https://media.licdn.com/dms/image/v2/D4E22AQG2J2b-C_8qnA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720705056135?e=1730332800&v=beta&t=dVE0T_y6KC6R60T9pkpCQMhqdbt-YELokdM5BScONbM' }), 
    new ImageCard({ id: 6, url: 'https://media.licdn.com/dms/image/v2/D4E22AQGFEoDwRaJ3kw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720705055782?e=1730332800&v=beta&t=OBU3DlfMVWykRw667S5hSuwgkrmh2ve3eG7jnvfwPTo' }), 
    new ImageCard({ id: 7, url: 'https://media.licdn.com/dms/image/v2/D4E22AQHL43ElVpbhBw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720705055742?e=1730332800&v=beta&t=loBIle9LRsxyI0_nUMb6rMSh8Qp99pNcwVEZI6VKmuY' }), 
    new ImageCard({ id: 8, url: 'https://media.licdn.com/dms/image/v2/D5622AQFOcgxCD0yMQw/feedshare-shrink_800/feedshare-shrink_800/0/1718032548029?e=1730332800&v=beta&t=nRiDY8V_iUep-8hSgSsXd6bAKSXnGErDtZYaCQLpLto' }),   ];
  @Input() selectedImage: ImageCard | null = null;

  onSelectImage(image: ImageCard): void {
    this.selectedImage = image;
  }
  closeImageZoom(): void {
    this.selectedImage = null;
  }
}
