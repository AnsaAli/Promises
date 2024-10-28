const promise4 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('promise4')},3000)})
const promise5 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('promise5')},2000)})
const promise6 = new Promise((resolve,reject)=>{setTimeout(()=>{reject('rejected, promise6')},4000)})
Promise.allSettled([promise4,promise5,promise6])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
// /[
//     { status: 'fulfilled', value: 'promise4' },
//     { status: 'fulfilled', value: 'promise5' },
//     { status: 'rejected', reason: 'rejected, promise6' }
//   ]