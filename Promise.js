const promise1 = new Promise(resolve => resolve ('Pizza is ready!'));
const promise2 = new Promise(resolve => resolve ('Burger is ready!'));
const promise3 = new Promise(resolve => resolve ('Fries are ready!'));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));;
