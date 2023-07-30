import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public ng :string ='{{single page aaplication}}';
  public compoInAg  :string ='{{building block }}';
  public propbinding :string ='{{To bind to an element`s property}}';
  public evebinding :string ='{{ Event binding}}'
  public ngo :string = '{{viceversa}}'
  list =['Javascreipt','typescript','angular','HTML',"NODEJS"];
  ages =['Event biding','property ','Tow way data ','Attribute ','understanding']
  cars : Array<string>= ["Saab", "Volvo", "BMW","TATA","Ford"]
  fruits: string[] = ['Apple', 'Orange', 'Banana','mango','graps'];
  constructor() { }

  ngOnInit(): void {

  }
  

}
