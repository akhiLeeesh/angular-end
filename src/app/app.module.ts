import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { AdminDashbordComponent } from './adminUi/admin-dashbord/admin-dashbord.component';
import { UserDashboardComponent } from './userUi/user-dashboard/user-dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserNavComponent } from './userUi/user-nav/user-nav.component';
import { LiveDashboardComponent } from './userUi/live-dashboard/live-dashboard.component';
import { MyLearningComponent } from './userUi/my-learning/my-learning.component';
import { CertificateComponent } from './userUi/certificate/certificate.component';
import { CartComponent } from './cart/cart.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { UpcomingBatchesComponent } from './upcoming-batches/upcoming-batches.component';
import { TestingComponent } from './testing/testing.component';
import { GenAiComponent } from './gen-ai/gen-ai.component';

import { StudentAuthService } from './services/student-auth.service';
import { AdminAuthService } from './services/admin-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    AdminDashbordComponent,
    UserDashboardComponent,
    LoaderComponent,
    NavbarComponent,
    FooterComponent,
    UserNavComponent,
    LiveDashboardComponent,
    MyLearningComponent,
    CertificateComponent,
    CartComponent,
    FullstackComponent,
    DatascienceComponent,
    UpcomingBatchesComponent,
    TestingComponent,
    GenAiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentAuthService, AdminAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
