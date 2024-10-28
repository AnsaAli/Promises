
//when first promise get less time
const promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Resolved promise1')
    },2000)
})
const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Resolved promise 2')
    },5000)
})

async function getData(){
   console.log(await promise1) //after 2ms :Resolved promise1
   console.log(await promise2) //after 5ms: Resolved promise 2
}
getData()


//when first promise will get more time to resolve
const promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Resolved promise3')
    },5000)
})
const promise4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Resolved promise 4')
    },2000)
})
async function getData2(){
    console.log(await promise3) //after 5ms :Resolved promise3
    console.log(await promise4) //after 5ms :Resolved promise 4
}
getData2();