import { Routes } from '@angular/router';
import { SomePageComponent } from './some-page/some-page.component';
import { OtherPageComponent } from './other-page/other-page.component';

export const routes: Routes = [
  {
    path: 'xxx',
    component: SomePageComponent
  },
  {
    path: 'yyy',
    component: OtherPageComponent
  }
];
