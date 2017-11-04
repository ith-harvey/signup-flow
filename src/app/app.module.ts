// Base Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Materialize
import { MaterializeModule } from "angular2-materialize";

// Components
import { SubscriptionComponent } from './subscription/subscription.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { UserInputComponent } from './user-input/user-input.component';
import { CongratsComponent } from './congrats/congrats.component';
import { UserDataService} from './user-data.service';

// Directive (used to double check passwords)
import { EqualValidatorDirective } from './equal-validator.directive';



const appRoutes: Routes = [
  // user-input folder
  {path: 'signup', component: UserInputComponent },
  // subscription folder
  {path: 'subscription', component: SubscriptionComponent },
  // confirm folder
  {path: 'confirm', component: ConfirmComponent },
  // congrats folder
  {path: 'congratulations', component: CongratsComponent },
  // redirects back to user-input
  {path: '', component: UserInputComponent }
]


@NgModule({
  declarations: [AppComponent, SubscriptionComponent, ConfirmComponent, UserInputComponent, EqualValidatorDirective, CongratsComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), MaterializeModule, FormsModule, HttpModule],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
