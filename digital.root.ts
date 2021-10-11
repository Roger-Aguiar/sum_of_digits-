export const digitalRoot = (n:number):number => 
{
    let digitalRootSum = String(n).split('');
    let sum = 0;

    for(let index = 0; index < digitalRootSum.length; index++)
    {
        sum = sum + (Number(digitalRootSum[index]));
    }

    return sum.toString().split('').length == 1 ? sum : digitalRoot(sum);
};

let digitalRootSum = digitalRoot(456);