// import { Injectable, Pipe } from '@angular/core';
// import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

// @Pipe({ name: 'youtubelink' })

// @Injectable()
// export class SpaceXLivePipe {
//   constructor(private sanitizer: DomSanitizer) { }
//   transform(value: string, type?: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
//     switch (type) {
//       case 'html':
//         return this.sanitizer.bypassSecurityTrustHtml(value);
//       case 'style':
//         return this.sanitizer.bypassSecurityTrustStyle(value);
//       case 'script':
//         return this.sanitizer.bypassSecurityTrustScript(value);
//       case 'url':
//         return this.sanitizer.bypassSecurityTrustUrl(value);
//       case 'resourceUrl':
//         return this.sanitizer.bypassSecurityTrustResourceUrl(value);
//       default:
//         return this.sanitizer.bypassSecurityTrustHtml(value);
//     }
//   }
// }

import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'youtubelink' })

@Injectable()
export class SpaceXLivePipe {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value)
  }
}
