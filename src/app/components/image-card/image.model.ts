import { Image } from "../image-interface";
export class ImageCard {
    id: number;
    url: string;
  
    constructor(image: Image) {
      this.id = image.id;
      this.url = image.url;
        }
  }
