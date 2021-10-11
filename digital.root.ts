export class SumOfDigits
{
    n = 0;

    constructor(n)
    {
        this.n = n;        
    }

    digitalRoot() 
    {    
        let sum = 0;

        for(let index = 0; index < String(this.n).split('').length; index++)       
            sum = sum + Number((String(this.n).split('')[index]));    

        return sum.toString().split('').length == 1 ? sum : new SumOfDigits(sum).digitalRoot();
    };
}