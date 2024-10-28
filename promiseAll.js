//all the Promises must be resolved,other wise gives you th erejected value
const promise1 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('promise1')},3000)})
const promise2 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('promise2')},2000)})
const promise3 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('promise3')},4000)})
Promise.all([promise1,promise2,promise3])
.then((res)=>console.log(res)) //after 4s [ 'promise1', 'promise2', 'promise3' ]

const promise4 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('promise4')},3000)})
const promise5 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('promise5')},2000)})
const promise6 = new Promise((resolve,reject)=>{setTimeout(()=>{reject('rejected :promise6')},4000)})
Promise.all([promise4,promise5,promise6])
.then((res)=>console.log(res))
.catch((err)=>console.error(err)) //rejected :promise6 
