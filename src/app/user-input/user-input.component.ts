import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [UserDataService]
})

export class UserInputComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  model =  {
    name: '',
    email: '',
    password: '',
    passwordcheck: '',
  }

  public register(f) {
    
  }

}
