import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  providers:[UserDataService]
})
export class SubscriptionComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }

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

  model =  {
      name: '',
      email: '',
      password: '',
      passwordcheck: '',
      subscription: '',
  }


  setSubscription({value}) {
    console.log('here is value',value)
    console.log('here is value',this.model)
    this.model.subscription = value.subscription
    this.userDataService.updateRegistration(this.model);
  }

}
