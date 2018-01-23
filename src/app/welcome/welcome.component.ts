import { Component } from '@angular/core';

@Component({
  //@Component decorator defines component
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  // constructor() { }
  //It's used to run any logic that must occur before or while a component is being initialized. It's primarily used to set up something called dependency injection, which we'll explore in an upcoming lesson

  // ngOnInit() {
  // }
  //ngOnInit() method: this is one of Angular's Component Lifecycle Hooks. Lifecycle hooks are methods called automatically at certain points in an object's creation

}
