import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddctionComponent } from './addction/addction.component';
import { AlcoholquizComponent } from './alcoholquiz/alcoholquiz.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { ContactComponent } from './contact/contact.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { DrugquizComponent } from './drugquiz/drugquiz.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModelComponent } from './model/model.component';
import { OcruploadComponent } from './ocrupload/ocrupload.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { StartquizComponent } from './startquiz/startquiz.component';
import { VirtualassistComponent } from './virtualassist/virtualassist.component';
import { AuthguardComponent } from './service/authguard/authguard.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddctionComponent,
    AlcoholquizComponent,
    CongratulationComponent,
    ContactComponent,
    DiscussionsComponent,
    DrugquizComponent,
    ForgotpasswordComponent,
    HomeComponent,
    LoginComponent,
    ModelComponent,
    OcruploadComponent,
    ProfileComponent,
    QuizComponent,
    QuizquestionsComponent,
    SearchComponent,
    SignupComponent,
    StartquizComponent,
    VirtualassistComponent,
    AuthguardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
