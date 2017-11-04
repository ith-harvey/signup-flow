import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [UserDataService]
})

export class UserInputComponent implements OnInit {
  constructor(private userDataService: UserDataService, private router: Router) {

  }

  ngOnInit() {
    const token = localStorage.getItem('token')
    // if the user already has a token
    if(token) {
      // populate input fields
      this.userDataService.getUser(token).subscribe(data => {
      this.model =  {
            name: data.user.name,
            email: data.user.email,
            password: data.user.hash_pass,
            passwordcheck: data.user.hash_pass,
            error: ''
          }
      })
    }
  }
  // initialize model
  model =  {
      name: '',
      email: '',
      password: '',
      passwordcheck: '',
      error: ''
  }


  register({value}) {
    // update registration (lives in userDataService)
    this.userDataService.updateRegistration(value).subscribe(
      (jsonData) => {
        localStorage.setItem('token', jsonData.token)
        this.router.navigate(['/subscription'])
      },
      (err) => {
        console.error('error!',err.json().message)
        this.model.error = err.json().message
      },
      () => console.log("observable complete")
    )
  }

}
