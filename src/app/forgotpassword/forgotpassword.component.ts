import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPassword: FormGroup;
  constructor(public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    try {
      this.buildLoginForm();
    } catch (er) {
    }
  }

  buildLoginForm() {
    this.forgotPassword = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  sendMail(){
    const form = this.forgotPassword.value;
    this.afAuth.auth.ResetEmail(form["email"]).then(response => {
      console.log(response)
    }).catch(err => { console.log(err) });
  }

}