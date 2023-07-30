import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.scss']
})
export class PropbindingComponent implements OnInit {
  public Angular :string =`why choose angular over react ? <br> Angular is preferred over React in certain 
                            cases because it provides a more opinionated and structured approach to development, with built-in tools for managing state, routing, and other common tasks. This can make it easier
                            to maintain and scale large applications, especially in enterprise settings`
  public component :string  = `component ? <br> Each component in the application defines a class that holds the application logic and data. A component generally defines a part of the user interface (UI).`   
  public template :string =`Template ? <br>The Angular template combines the Angular markup with HTML to modify HTML elements before they are displayed. There are two types of data binding`;
  public fritype :string =`1. Event binding:<br> Lets your app respond to user input in the target environment by updating your application data.`    
  public Sectype : string =`2. Property binding:<br> Enables users to interpolate values that are computed from your application data into the HTML.`          
  constructor() { }

  ngOnInit(): void {
  }

}
