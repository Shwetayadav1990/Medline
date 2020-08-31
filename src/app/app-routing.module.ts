import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent} from './user-info/user-info.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
const routes: Routes = [
  {path: '',
  component: UserInfoComponent
},
{ path:'thanks',
component:ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
