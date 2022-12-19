import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- HEADER -->
   <app-header></app-header>

   

   <!-- HOME -->

   <app-home></app-home>
   
   <!-- ROUTES -->
      <router-outlet></router-outlet>
   
   <!-- FOOTER -->
      <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'project-portfolio1';
}
