import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: 'article/:id',
    component: ArticleComponent,
    children: [
      { path: '', component: NavComponent, outlet: 'navbar' }
    ]
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'faq',
    component: FaqComponent,
    children: [
      { path: '', component: NavComponent, outlet: 'navbar' }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { path: '', component: NavComponent, outlet: 'navbar' }
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
