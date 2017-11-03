import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { User } from '../user';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [UserDataService]
})

export class UserInputComponent implements OnInit {
  constructor(private userDataService: UserDataService) {

  }

  ngOnInit() {
    const token = localStorage.getItem('token')
    // if the user already has a token
    console.log('token',token)
    if(token) {
      // populate input fields
      this.userDataService.getUser(token).subscribe(data => {
      this.model =  {
            name: data.user.name,
            email: data.user.email,
            password: data.user.hash_pass,
            passwordcheck: data.user.hash_pass,
          }
      })
    }
  }

  model =  {
      name: 'bears',
      email: '',
      password: '',
      passwordcheck: '',
  }


  register({value}) {
    // if (value.password != value.passwordcheck) /// return some error here

    delete value.passwordcheck
    console.log('value',value)
    this.userDataService.register(value);
  }

}
