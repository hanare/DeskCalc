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
  counter: number;
  isNegative: boolean;
  isEval: boolean;
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
    this.isNegative=false;
    this.isEval = false;
    this.counter=0; 
  }

  ngOnInit() {
  }

  ngOnChanges(){

   
    console.log("isNumber ",this.isNumber( this.expression));
    this.display();
    
    if(!(this.isNumber(this.expression))  && this.expression!='<'){
      let t=0;
      this.counter+=1;
      this.isEval=false;
      console.log("Entered is number", this.expression);
      t=Number(this.infixEvaluation.join(""));
      this.infixEvaluation=[];
      console.log("number obtained:  ",t," ",this.infixEvaluation);
      if(this.isNegative){
        t= t*(-1);
        this.isNegative=false;
      }
      this.infixNum.push(t)
      this.infixOperand.push(t);
    }
     
    if(this.infixOperator.length>0){
      this.calculate();
      console.log("calculation ");
    }

    

    console.log("this infix Operand",this.infixOperand);
    console.log("operator ",this.infixOperator);
    console.log("infix num",this.infixNum);
  }

  display(){
    console.log("DISPLAY ",this.expression);
     
    switch(this.expression){
      case '<':
      if(this.infixExpression.length>0){
        this.infixExpression=this.infixExpression.substring(0,this.infixExpression.length-1);
        
        console.log("_______________----",this.infixExpression);
      }
      break;
      case '=':
      if(this.infixExpression.length>0){
        this.calculate();
        this.isEval=true;
      }
      
      break;

      case '-':
      if(this.infixExpression.length===0)
      this.isNegative=true;
      else{
         
        this.infixOperator.push( this.expression);
        this.infixExpression+=this.expression;   
      }

      break;
      case '+':
      if(this.infixExpression.length>0){
         
        this.infixOperator.push( this.expression);
        this.infixExpression+=this.expression;   
      }
      
      break;
      case '*':
      if(this.infixExpression.length>0){
         
        this.infixOperator.push( this.expression);
        this.infixExpression+=this.expression;   
      }
      
      break;
      case '/':
      if(this.infixExpression.length>0){
       
        this.infixOperator.push( this.expression);
        this.infixExpression+=this.expression;   
      }
      break;
      default:   
      this.infixExpression+=this.expression; 
      this.infixEvaluation.push(this.expression);  
    }
    console.log("infixEvaluation ",this.infixEvaluation);
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
