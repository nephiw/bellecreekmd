import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'bc-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.less']
})
export class DocumentPageComponent {

  constructor(@Inject(DOCUMENT) private document: any) {}

  public onFootnoteClicked(fragment: string): void {
    const element = this.document.querySelector('#' + fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
