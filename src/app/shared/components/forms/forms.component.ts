import { Component, OnInit } from '@angular/core';
import { Iperson } from '../../models/persons';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
          person: Array<Iperson> = [
            {
              fn: 'gaurav',
              ln: 'sonawane',
              age: 21,
              contact: 9359926599
            },
            {
              fn: 'shubham',
              ln: 'jagdale',
              age: 22,
              contact: 9359926599

            },
            {
              fn: 'ajay',
              ln: 'raut',
              age: 24,
              contact: 9359926599

            },
          ]
          employeedetails = [
            { id: 1, firstname: 'AM', lastname: 'CM', age: 3 },
            { id: 1, firstname: 'AM', lastname: 'DIM', age: 4 },
            { id: 1, firstname: 'AM', lastname: 'FM', age: 5 },
            
          ];
          itemsDetails = [{
            sno: 1,
            name: 'Roger Federer',
            country: 'Switzerland',
            grandslams: 20,
            active: "Yes",
          }, {
            sno: 2,
            name: 'Rafael Nadal',
            country: 'Spain',
            grandslams: 18,
            active: "Yes",
          }, {
            sno: 3,
            name: 'Novak Djokovic',
            country: 'Serbia',
            grandslams: 16,
            active: "Yes",
          }
          ];



  constructor() { }

  ngOnInit(): void {
  }

}
