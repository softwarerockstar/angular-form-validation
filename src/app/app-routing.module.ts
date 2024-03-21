import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { CmsComponent } from './cms/cms.component';
import { FaxComponent } from './fax-form/fax-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/my-form', pathMatch: 'full'  },
  { path: 'my-form', component: MyFormComponent },
  {path: 'cms', component: CmsComponent },
  {path: 'fax', component: FaxComponent }
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
