import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompTwoComponent } from './img-viewer/comp-two/comp-two.component';
import { CompOneComponent } from './typing-challenge/comp-one/comp-one.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Home',
    pathMatch:'full'
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'typingChallenge',
    component: CompOneComponent
  },
  {
    path:'imageViewer',
    component:CompTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
