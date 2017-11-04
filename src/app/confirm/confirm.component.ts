import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  providers: [UserDataService]
})
export class ConfirmComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    const token = localStorage.getItem('token')
    // if the user already has a token
    console.log('token', token)
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
      subscription: ''
  }


}
