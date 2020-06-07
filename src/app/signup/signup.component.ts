import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  import { Component, OnInit, ElementRef } from '@angular/core';
  import { auth } from 'firebase/app';
  import { AngularFireAuth } from '@angular/fire/auth';
  import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
  import { UsersService } from 'src/services/users.service';
  import { Router, NavigationEnd, NavigationStart } from '@angular/router';
  import Chatkit from '@pusher/chatkit-client';
  import axios from 'axios';
  import { EmitType } from '@syncfusion/ej2-base';
  import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
  
  
  @Component({
      selector: 'app-signup',
      templateUrl: './signup.component.html',
      styleUrls: ['./signup.component.scss']
  })
  export class SignupComponent implements OnInit {
      test: Date = new Date();
      signupFormGroup: FormGroup;
      
  
      
  
  
      constructor(private usersService: UsersService, private router: Router, public afAuth: AngularFireAuth, private formBuilder: FormBuilder) { }
  
      ngOnInit() {
          try {
              this.SignUpF();
          } catch (er) {
          }
      }
  
      SignUpF() {
          this.signupFormGroup = this.formBuilder.group({
              name: ['', Validators.required],
              email: ['', Validators.required],
              password: ['', Validators.required],
              check: ['', Validators.required],
              rememberMe: [false]
          })
      }
  
      register() {
          const form = this.signupFormGroup.value;
          this.afAuth.auth
              .createUserWithEmailAndPassword(form["email"], form["password"])
              .then(res => {
                  console.log(res)
                  res.user.updateProfile({ displayName: form["name"] }).then(user => {
                      console.log(user)
  
                      const chatUser = { username: form["name"], id: res.user.uid }
                      this.usersService.addUser(res.user)
                          .subscribe((res1) => {
                             
                          });
                  }).catch(err => {
                      console.log(err)
                     
                  });
  
              }).catch(err => {
                  console.log(err)
                 
  
              });
      }
  
      
  
  
  

}
