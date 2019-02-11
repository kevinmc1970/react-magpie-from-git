// export function sum(a, b) {
//     return a + b;
// };

// dont need return
export const sum = (a,b) => a+b;

export const total= (subTotal, total) => {
    return '$' + sum(total, subTotal);
}

// used these 2 function to show how to mock in jest
export const multiply = (a,b) => (a * b);

export const formatMultiply = (a, b) => {
    return '$' + multiply(a,b);
}