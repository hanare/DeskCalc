import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sketch-area',
  templateUrl: './sketch-area.component.html',
  styleUrls: ['./sketch-area.component.css']
})
export class SketchAreaComponent implements OnInit,OnChanges{

  expression: string;
  infixExpression: string;
  infixEvaluation:string[];
  infixNum:number[];
  infixOperand:number[];
  infixOperator:string[];
  infixEvaluationString: string[];
  result:number;
  @Input()
  get dataInput(){
    return this.expression; 
  }
  set dataInput(exp: string){
    
   
      this.expression = exp;
  }
  constructor() {
    this.infixExpression=""
    this.infixEvaluation= new Array<string>();
    this.infixNum=new Array<number>();
    this.infixOperand = new Array<number>();
    this.infixOperator= new Array<string>();
    this.result=0;
   }

  ngOnInit() {
  }

  ngOnChanges(){

    console.log("isNumber ",this.isNumber( this.expression));
    if(!(this.isNumber( this.expression))){
      let t='';

      console.log("Entered is number");
      
      while(this.infixEvaluation.length>0)
      {
        t=this.infixEvaluation.pop()+t;
        console.log("this is t",t);
        
      }
      this.infixNum.push(Number(t));
      this.infixOperand.push(Number(t));
      if(this.expression!=="=")
      this.infixOperator.push( this.expression);
      
     
    }
    else{
      this.infixEvaluation.push( this.expression);
    }
    if(this.infixOperator.length>1){
      this.calculate();
      console.log("calculation ");
    }

    this.infixExpression+=this.expression;

    console.log("this infix Operand",this.infixOperand);
    console.log("operator ",this.infixOperator);
    console.log("infix num",this.infixNum);
  }

  
  calculate(){
    console.log("length of operand array ",this.infixOperand.length);
    if(this.infixOperand.length>=3){
      let op2=this.infixOperand.pop();
      let op1=this.infixOperand.pop();
      let operator = this.infixOperator.pop();
      console.log("op ",op2,op1,operator);
      
      switch(operator){
        case "+":
        this.result=op1 + op2;
        break;
        case "-":
        this.result=op1-op2;
        break;
        case "x":
        this.result = op1*op2;
        break;
        case "/":
        this.result= op1/op2;
        break;
        default:
        break;
      }
      console.log("RESULT ",this.result);
    }
    

  }
  isNumber(op:string):Boolean{
    let ch=op.charAt(0);
    
    
    let number = parseInt(op);
    console.log("Number ",number);
    
    if(!isNaN(number) || op==="."){
      return true;
    }
    else{
       
      return false;
    }
  }


}
