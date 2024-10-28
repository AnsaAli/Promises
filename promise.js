const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Resolved')
    },2000)
})

function getData(){
    let data = promise
    data.then((res)=>console.log(res))
    console.log('in getdata()')
}
getData() 
//'in getdata()' will print immediately, after 2ms: Resolved

async function getData2(){
    let data = await promise;
    console.log(data)
    console.log('in getData2')
}
getData2()
//console.log('in getData2') wont print immidiately, only print  after 2ms