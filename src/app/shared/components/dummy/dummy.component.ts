import { Component } from "@angular/core";
@Component({
    selector:'app-dummy',
    template : `
    <p class="alert alert-info"> this is component with only one file</p>
    
    `,
    styles:[
        `
         p{
            font-size: 2rem;
         }
        `
    ]
})
export class Singlefilecomponentns{

}