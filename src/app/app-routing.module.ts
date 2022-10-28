import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { PostDataComponent } from './post-data/post-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SearchComponent } from './search/search.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'templateform', component: TemplateDrivenFormComponent, canActivate: [AuthGuard] },
  { path: 'reactiveform', component: ReactiveFormComponent, canActivate: [AuthGuard] },
  // { path: 'getdata', component: GetDataComponent, canActivate: [AuthGuard] },
  // { path: 'postdata', component: PostDataComponent, canActivate: [AuthGuard] },
  // { path: 'parent', component: ParentComponent, canActivate: [AuthGuard] },
  // { path: 'children', component: ChildrenComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
