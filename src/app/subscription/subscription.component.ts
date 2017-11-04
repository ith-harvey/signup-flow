import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  providers:[UserDataService]
})
export class SubscriptionComponent implements OnInit {

  constructor(private userDataService: UserDataService, private router: Router) { }

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
          subscription: data.user.subscription
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
      subscription: '',
  }


  setSubscription({value}) {
    this.model.subscription = value.subscription
    // update registration (lives in userDataService)
    this.userDataService.updateRegistration(this.model).subscribe(
      (jsonData) => {
        console.log(jsonData)
        localStorage.setItem('token', jsonData.token)
        this.router.navigate(['/confirm'])
      },
      (err) => console.error(err),
      () => console.log("observable complete")
    )
  }

}
