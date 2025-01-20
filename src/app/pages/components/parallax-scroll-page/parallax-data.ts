import {TemplateRef} from '@angular/core';

export interface ParallaxData {
  imageUrl: string;
  textColor: string;
  blurImage: boolean;
  template: TemplateRef<any> | null;
}
