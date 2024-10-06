let ys= document.querySelector("#ys")
let os =document.querySelector("#os")
let run =document.querySelector("#rs")
let rs =document.querySelector("#run")
let wick =document.querySelector("#wicket")
let cs=0;
let count = 0;
let wicket =0;
let one =document.querySelector("#one")
let two =document.querySelector("#two")
let three =document.querySelector("#three")
let four =document.querySelector("#four")
let five =document.querySelector("#five")
let six =document.querySelector("#six")
let btn =document.querySelectorAll("button")
let reset=document.querySelector("#pw")
let you=document.querySelector("#chutiya")
const nmbrs =[1,2,3,4,5,6,7]
let rand= Math.floor(
    Math.random() * nmbrs.length
    
)
run.innerHTML=count
one.addEventListener("click",()=>{
    
    
    if(rand!=1){
        
        ys.innerHTML ="1"
        os.innerHTML=rand
        cs=cs+rand
        count=count+rand
        run.innerHTML=count
        rs.innerHTML=cs
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
    }
    else{
        ys.innerHTML ="1"
        os.innerHTML=rand

        wicket=wicket+1
        wick.innerHTML=wicket
        count = 0
        alert("You Got Him Out")
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
    }
    return count

})
run.innerHTML=count
two.addEventListener("click",()=>{
    if(rand!=2){

        ys.innerHTML ="2"
        os.innerHTML=rand
        cs=cs+rand
        count=count+rand
        run.innerHTML=count
        rs.innerHTML=cs
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )

    }
    else{
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count =0
        alert("You Got him out")
        
    }
    
})
three.addEventListener("click",()=>{
    if(rand!=3){

        ys.innerHTML ="3"
        os.innerHTML=rand
        cs=cs+rand
        count=count+rand
        run.innerHTML=count
        rs.innerHTML=cs
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
    }
    
    else{
        ys.innerHTML ="1"
        os.innerHTML=rand
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count=0
        alert("You got him out")
    }
    

})
four.addEventListener("click",()=>{

    if(rand!=4){

        ys.innerHTML ="4"
        os.innerHTML=rand
        cs=cs+rand
        count=count+rand
        run.innerHTML=count
        rs.innerHTML=cs
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
    }
    else{
        ys.innerHTML ="1"
        os.innerHTML=rand
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count =0
        alert("You got him out")
    }
    

})
five.addEventListener("click",()=>{

    if(rand!=5){

        ys.innerHTML ="5"
        os.innerHTML=rand
        cs=cs+rand
        count=count+rand
        run.innerHTML=count
        rs.innerHTML=cs
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
    }
    else{
        ys.innerHTML ="1"
        os.innerHTML=rand
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count=0
        alert("You got him out")
    }
    
})
six.addEventListener("click",()=>{

    if(rand!=6){

        ys.innerHTML ="6"
        os.innerHTML=rand
        cs=cs+rand
        count=count+rand
        run.innerHTML=count
        rs.innerHTML=cs
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
    }
    else{
        ys.innerHTML ="1"
        os.innerHTML=rand
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count =0
        alert("You got him out")
    }
    
})
reset.addEventListener("click",()=>{
    ys.innerHTML ="N/A"
    os.innerHTML="N/A"
    run.innerHTML="0"
    rs.innerHTML="0"
    wick.innerHTML="0"
    count=0
    cs=0
    wicket=0
})
