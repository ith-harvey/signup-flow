// Base Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Materialize
import { MaterializeModule } from "angular2-materialize";

// Components
import { SubscriptionComponent } from './subscription/subscription.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserDataService} from './user-data.service'



const appRoutes: Routes = [
  {path: 'signup', component: UserInputComponent },
  {path: 'subscription', component: SubscriptionComponent },
  {path: 'confirm', component: ConfirmComponent },
  {path: '', component: UserInputComponent }
]


@NgModule({
  declarations: [AppComponent, SubscriptionComponent, ConfirmComponent, UserInputComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), MaterializeModule, FormsModule],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
