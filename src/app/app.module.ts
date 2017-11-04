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
import { UserDataService} from './user-data.service';

// Directive
import { EqualValidatorDirective } from './equal-validator.directive';



const appRoutes: Routes = [
  {path: 'signup', component: UserInputComponent },
  {path: 'subscription', component: SubscriptionComponent },
  {path: 'confirm', component: ConfirmComponent },
  {path: '', component: UserInputComponent }
]


@NgModule({
  declarations: [AppComponent, SubscriptionComponent, ConfirmComponent, UserInputComponent, EqualValidatorDirective],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), MaterializeModule, FormsModule, HttpModule],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
