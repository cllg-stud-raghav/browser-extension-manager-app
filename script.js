try{
    const response= await fetch('/api')
    const data= await response.json()
    console.log(data)
}catch(err){
    console.log(err)
}