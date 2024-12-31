import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  selector: 'h-root',
  template: `
    <h-nx-welcome />
    <router-outlet />
  `,
  imports: [NxWelcomeComponent, RouterModule],
})
export class AppComponent {
  title = 'harpy';
}
