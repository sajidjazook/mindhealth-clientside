import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {

  loseResult: string;
  formGroupDiscussion: FormGroup;
  creationIsClicked = false;
  documents = [];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, 
    private formBuilder: FormBuilder, private documentServices: DocumentServices
  ) {
  }

  ngOnInit() {
    
    try {
      this.discussionForm();
    } catch (er) {
    }

    this.documentServices.getDiscussions().subscribe(data => {
      this.documents = data.reverse();
    });
  }

  discussionForm() {
    this.formGroupDiscussion = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  expandCreate() {
    this.creationIsClicked = !this.creationIsClicked;
  }

  isLoggedIn() {
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  async submitDiscussion() {
    this.creationIsClicked = false;

    const discussion = this.formGroupDiscussion.value;

    let arr = discussion.category.split(',');

    discussion.category = arr;

    try {
      if (localStorage.getItem('user') != null) {
        const user = JSON.parse(localStorage.getItem("user"));
        discussion.userId = user.uid;
        discussion.userName = user.displayName;
      }
    } catch (err) {
    }

    var array = [];
    array.push({
      userName: discussion.userName,
      userId: discussion.userId
    })
    discussion.individuals = array;

    discussion.likes = 0;
    discussion.dislikes = 0; 

    this.documentServices.addDiscussion(discussion).subscribe(data => {
      console.log(data)
      this.documentServices.getDiscussions().subscribe(data => {
        this.documents = data.reverse();
      })
    })
  }

    submit(val) {
        console.log(val);
        this.router.navigate([`/discussion/${val}`])
      }

        // const tokenProvider = new Chatkit.TokenProvider({
    //   url: 'http://localhost:7000/api/authenticate'
    // });

    // const chatManager = new Chatkit.ChatManager({
    //   instanceLocator: 'v1:us1:8d77c95d-e14a-4c7b-a24a-294407109a39',
    //   userId: discussion.userId,
    //   tokenProvider
    // });

  //   chatManager
  //     .connect()
  //     .then(currentUser => {
  //       // this.state.item.email
  //       var arr = []
  //       arr.push(discussion.userId)
  //       currentUser.createRoom({
  //         name: discussion.name,
  //         private: false,
  //         addUserIds: arr
  //       }).then(room => {
  //         console.log(`Created room called ${room.name}`)
  //         console.log(room.id)
  //         discussion.roomId = room.id;
  //         discussion.roomName = room.name;



          
  //         })
  //       }).catch(err => {
  //         console.log(`Error creating room ${err}`)
  //       })
  //     })
  //     .catch(error => console.error('error', error))
  // }

  // 
}

// close(alert: IAlert) {
//   this.alerts.splice(this.alerts.indexOf(alert), 1);
// }
