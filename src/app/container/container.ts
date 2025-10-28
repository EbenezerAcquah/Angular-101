import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  sum: string = "";
  difference: number = 0;
  division : number = 0;
  multiplication : number = 0;
  constructor(){}
    ngOnInit(){
      
    }
    
/*
  addTwoNumbers(firstNum:string, secondNum:string){
   return parseInt(firstNum) + parseInt(secondNum);
  }

  subTwoNumbers(firstNum:string, secondNum:string){
    if (parseInt(firstNum) > parseInt(secondNum)){
      return parseInt(firstNum) - parseInt(secondNum);
    }
    return parseInt(firstNum) - parseInt(secondNum);
  }

  divTwoNumbers(firstNum:string, secondNum:string){
    return parseInt(firstNum) / parseInt(secondNum);
  }

  multTwoNumbers(firstNum:string, secondNum:string){
    return parseInt(firstNum) * parseInt(secondNum);
  }
}
*/

 addTwoNumbers(cusName:string){
   if (parseInt(cusName) >= 18){
    return "You are invited!";
   }
   return " Sorry, you're not invited!";
  }
}

