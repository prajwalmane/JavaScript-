import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track currentResult;
    @track previousResult=[];
    @track showPreviousresult=false;
    
    firstnumber
    secondnumber 
   
    numberChangeHandler(event)
    {
        const inputboxname = event.target.name;
        if(inputboxname==='firstnumber'){
            this.firstnumber=event.target.value;
        }else if(inputboxname==='secondnumber'){
            this.secondnumber=event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstnumber);
        const  secondN= parseInt(this.secondnumber);

        //this.currentResult = 'Result of '+firstN+ ' + ' +secondN+ ' is ' +(firstN+secondN);
        this.currentResult = `Result of ${firstN}+ ${secondN} is${firstN+secondN}`;
        this.previousResult.push(this.currentResult);
    }
    SubHandler(){
        const firstN = parseInt(this.firstnumber);
        const  secondN= parseInt(this.secondnumber);

        //this.currentResult = 'Result of '+firstN+ ' + ' +secondN+ ' is ' +(firstN+secondN);
        this.currentResult = `Result of ${firstN}- ${secondN} is${firstN-secondN}`;
        this.previousResult.push(this.currentResult);
    }
    MulHandler(){
        const firstN = parseInt(this.firstnumber);
        const  secondN= parseInt(this.secondnumber);

        //this.currentResult = 'Result of '+firstN+ ' + ' +secondN+ ' is ' +(firstN+secondN);
        this.currentResult = `Result of ${firstN}* ${secondN} is${firstN*secondN}`;
        this.previousResult.push(this.currentResult);
    }
    devHandler(){
        const firstN = parseInt(this.firstnumber);
        const  secondN= parseInt(this.secondnumber);

        //this.currentResult = 'Result of '+firstN+ ' + ' +secondN+ ' is ' +(firstN+secondN);
        this.currentResult = `Result of ${firstN}/ ${secondN} is${firstN/secondN}`;
        this.previousResult.push(this.currentResult);
    }
    showpreviousresultTog(event)
    {
        this.showPreviousresult=event.target.checked;
    }
   
}