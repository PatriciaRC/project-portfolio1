import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Y2020Component } from './mywork/y2020/y2020.component';
import { Y2021Component } from './mywork/y2021/y2021.component';
import { Y2022Component } from './mywork/y2022/y2022.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch: "full"
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'mywork/y2020',
    component: Y2020Component
  },
  {
    path:'mywork/y2021',
    component: Y2021Component
  },
  {
    path:'mywork/y2022',
    component: Y2022Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
