import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Firestore
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire/compat';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { UpcominglaunchListComponent } from './components/upcominglaunch-list/upcominglaunch-list.component';
import { UpcominglaunchDetailsComponent } from './components/upcominglaunch-details/upcominglaunch-details.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { CrewDetailsComponent } from './components/crew-details/crew-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

// Pipes
import { SucceedLaunchFilterPipe } from './pipes/succeed-launch.pipe';
import { FailedLaunchFilterPipe } from './pipes/failed-launch.pipe';
import { UpcomingLaunchFilterPipe } from './pipes/upcoming-launch.pipe';
import { SearchLaunchFilterPipe } from './pipes/search-launch.pipe';
import { SearchCrewFilterPipe } from './pipes/search-crew.pipe';

// Directives
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    UpcominglaunchListComponent,
    UpcominglaunchDetailsComponent,
    CrewListComponent,
    CrewDetailsComponent,
    FooterComponent,
    ResetpasswordComponent,
    SucceedLaunchFilterPipe,
    FailedLaunchFilterPipe,
    UpcomingLaunchFilterPipe,
    SearchLaunchFilterPipe,
    SearchCrewFilterPipe,
    ScrollTrackerDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    provideAnalytics(() => getAnalytics()),
    AngularFireModule.initializeApp(environment.firebase, 'spaceX'),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
