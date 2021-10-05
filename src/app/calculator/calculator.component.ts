import { Component, OnInit } from '@angular/core';  
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  stack1 : number[] = [];
  stack2 : string[] = [];

  num : string = "";
  op : string = "";

  calcString : string = "";

  constructor() {
   }

  ngOnInit(): void {
  }

  updateString(event : any){
    var input = (<HTMLInputElement>event.target).value;
    if(input == "+" || input == "-" || input == "*" || input == "/"){
      this.stack1.push(parseInt(this.num));
      this.num = "";
      this.stack2.push(input);
    }else{
      this.num += input;
    }

    console.log(this.stack1);
    console.log(this.stack2);

    this.calcString += input;
  }

  calculate(){
    this.stack1.push(parseInt(this.num));
    console.log(this.stack1);
    while(true){
      
      var ans = 0;
      var op = this.stack2.pop();
      if(op === undefined){
        break;
      }
      var num1 : number = <number>this.stack1.pop();
      var num2 : number = <number>this.stack1.pop();
      console.log(num1 + " : " + num2);
      switch(op){
        case "+" : ans = num1 + num2;
        this.stack1.push(ans);
                   break;
        case "-" : ans = num2 - num1;
        this.stack1.push(ans);
                   break;
        case "*" : ans = num1 * num2;
        this.stack1.push(ans);
                   break;
        case "/" : ans = num2 / num1;
        this.stack1.push(ans);
                   break;
        default : 
      }
      console.log(this.stack1);
      console.log(this.stack2);
    }

  }

}
