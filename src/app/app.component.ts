import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sanitizer = inject(DomSanitizer);
  cmsContent$ = of(
    `<div style="background: #ddd; padding: 16px; margin: 16px 0">
      This is some cms generated block of HTML.
      <a href='/xxx'> This relative link is injected from the CMS service as a part of the snippet.</a>
      Lorem ipsum
    </div>`
  ).pipe(map(e => this.sanitizer.bypassSecurityTrustHtml(e)));
}
