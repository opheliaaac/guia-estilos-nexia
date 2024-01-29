import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  toggleChange(className: string): void {
    const element = this.document.getElementById('guia') as HTMLElement;
    element.className = className;
  }
}
