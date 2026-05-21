let a = [1, 2, 3, 4, 5, 6];
a.copyWithin(3,2)
console.log(a); 
a.copyWithin(3)
console.log(a);
a.copyWithin(4,2,5)
console.log(a);

a.copyWithin(-3, -2, -3)
console.log(a);