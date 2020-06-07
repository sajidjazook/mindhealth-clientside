import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AngularFireAuthGuard, canActivate, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ModuleComponent } from './module/module.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DocumentComponent } from './DocumentComponent/Document.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuards } from 'src/services/authguards.service';
import { MyDiscussionsComponent } from './my-discussions/my-discussions.component';
import {OcruploadComponent} from './ocrupload/ocrupload.component';
import {AddctionComponent} from './addction/addction.component';
import {QuizquestionsComponent} from './quizquestions/quizquestions.component';
import {StartquizComponent} from './startquiz/startquiz.component';
import {DrugquizComponent} from './drugquiz/drugquiz.component';
import {AlcohoquizComponent} from './alcoholquiz/alcoholquiz.component';
import {ContactComponent} from './contact/contact.component';
import {VirtualassistComponent} from './virtualassist/virtualassist.component';
import {CongratulationComponent} from './congratulation/congratulation.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user-profile', component: ProfileComponent,
    // canActivate: [AngularFireAuthGuard],
    ...canActivate(redirectUnauthorizedToLogin)
    // data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'register', component: SignupComponent },
  {path: 'ocr', component: OcruploadComponent},
  {path: 'addiction', component: AddctionComponent},
  {path: 'quizquestions', component: QuizquestionsComponent},
  {path: 'startquiz', component: StartquizComponent},
  {path: 'drugquiz', component: DrugquizComponent},
  {path: 'alcoholquiz', component: AlcohoquizComponent},
  {path: 'Congratulations', component: CongratulationComponent},
 // {path: 'virtualassistance', component: VirtualassistComponent},
  
  
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'discussion/:key', component: ChatComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'virtualassistance', component: VirtualassistComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'contact', component: ContactComponent,
    ...canActivate(redirectToLogin)
  },
  
  { path: 'module', component: ModuleComponent },
  { path: 'search', component: SearchComponent },

  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'document/:id', component: DocumentComponent },
  { path: 'discussion', component: DiscussionComponent },
  { path: 'virtualassistance', component: VirtualassistComponent },
  {path: 'contact', component: ContactComponent},
  { path: 'result/:key', component: ResultsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    
  ],
})