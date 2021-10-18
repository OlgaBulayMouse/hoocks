'use script'

let someHeavyOperation = () => {
    const num = 9999999;
    const arr = [];
    for (let i = 0; i <= num; i++) {
        arr[i] = i;
    }
    return arr;
};

const memo = (someHeavyOperation) => {

    return (memoizedHeavyOperation) => {
        
        if (someHeavyOperation) {
            return arr;
        } else return someHeavyOperation();
    };
};
console.log(memo());

