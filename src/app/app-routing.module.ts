import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { AdminDashbordComponent } from './adminUi/admin-dashbord/admin-dashbord.component';
import { UserDashboardComponent } from './userUi/user-dashboard/user-dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { StudentGuard } from './guards/student.guard';
import { LiveDashboardComponent } from './userUi/live-dashboard/live-dashboard.component';
import { MyLearningComponent } from './userUi/my-learning/my-learning.component';
import { CertificateComponent } from './userUi/certificate/certificate.component';
import { CartComponent } from './cart/cart.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { UpcomingBatchesComponent } from './upcoming-batches/upcoming-batches.component';
import { TestingComponent } from './testing/testing.component';
import { GenAiComponent } from './gen-ai/gen-ai.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin-dashboard', component: AdminDashbordComponent, canActivate: [AdminGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [StudentGuard] },
  { path: 'live-dashboard', component: LiveDashboardComponent, canActivate: [StudentGuard] },
  { path: 'my-learning', component: MyLearningComponent, canActivate: [StudentGuard] },
  {path:'certificate',component:CertificateComponent,canActivate:[StudentGuard]},
  {path:'cart',component:CartComponent,canActivate:[StudentGuard]},
  {path:'gen-ai',component:GenAiComponent},
  {path:'fullstack',component:FullstackComponent},
  {path:'datascience',component:DatascienceComponent},
  {path:'testing',component:TestingComponent},
  {path:'upcoming_batches',component:UpcomingBatchesComponent},
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
