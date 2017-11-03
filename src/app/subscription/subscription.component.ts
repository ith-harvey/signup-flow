import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const token = localStorage.getItem('token')
    // if the user already has a token
    if(token) {
      // populate input fields
      this.userDataService.getUser(token).subscribe(data => {
      this.model =  {
            subscription: data.user.subscription
          }
      })
    }

  }

}
