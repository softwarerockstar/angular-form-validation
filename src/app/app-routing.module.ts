import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { CmsComponent } from './cms/cms.component';


const routes: Routes = [
  { path: '', redirectTo: '/my-form', pathMatch: 'full'  },
  { path: 'my-form', component: MyFormComponent },
  {path: 'cms', component: CmsComponent }
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
