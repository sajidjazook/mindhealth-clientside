import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resetEmail: FormGroup;
  focus;
  focus1;
  public warning = true;

  constructor(public afAuth: AngularFireAuth, private router: Router,
    private routerService: RouterExtService
    , private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    try {
      this.loginF();
    } catch (er) {
    }

  }

  loginF() {
    this.resetEmail = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    })
  }

 

  login() {
    const user = this.resetEmail.value;
    console.log(user)
    this.afAuth.auth.emailAndPassword(user["email"], user["password"]).then(user => {
      console.log(user);
      const referrer = this.routerService.getPreviousUrl();
      console.log(referrer)

      if(referrer === "/login" || referrer === "/home" || referrer === "/register"){
        this.router.navigate(['/profile'])
        alert("Successfully logged in")
      }else{
        this.router.navigate([referrer]);
      }
      
      localStorage.setItem("user", JSON.stringify(user.user));
    }).catch(err => { 
      console.log(err) 
      alert("No account found. Please register.")
    })
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.setItem("user", null);
  }

}
