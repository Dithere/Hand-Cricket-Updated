let ys= document.querySelector("#ys")
let os =document.querySelector("#os")
let run =document.querySelector("#rs")
let rs =document.querySelector("#run")
let wick =document.querySelector("#wicket")
let cs=0;
let ten="10";
let count = 0;
let wicket =0;
let one =document.querySelector("#one")
let two =document.querySelector("#two")
let three =document.querySelector("#three")
let four =document.querySelector("#four")
let five =document.querySelector("#five")
let six =document.querySelector("#six")
let btn =document.querySelectorAll("button")
let nd =document.querySelector("#nd")
let reset=document.querySelector("#pw")
let you=document.querySelector("#chutiya")
const nmbrs =[1,2,3,4,5,6,7]
let rand= Math.floor(
    Math.random() * nmbrs.length    
)
run.innerHTML=count
one.addEventListener("click",()=>{
    ys.innerHTML ="1"
    os.innerHTML=rand
    if(rand!=1){
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        cs=cs+1
        count=count+1
        run.innerHTML=count
        rs.innerHTML=cs
    }
    else{
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count = 0
        alert("You Are Out")
        

        
    }
    return count

})
run.innerHTML=count
two.addEventListener("click",()=>{
    ys.innerHTML ="2"
    os.innerHTML=rand
    if(rand!=2){
        rand = Math.floor(
            Math.random() * nmbrs.length
            
        )
        cs=cs+2
        count=count+2
        run.innerHTML=count
        rs.innerHTML=cs

    }
    else{
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count =0
        alert("You Are Out")

    }
    
})
three.addEventListener("click",()=>{
    ys.innerHTML ="3"
    os.innerHTML=rand
    if(rand!=3){
        rand = Math.floor(
            Math.random() * nmbrs.length
            
        )
        cs=cs+3
        count=count+3
        run.innerHTML=count
        rs.innerHTML=cs
    }
    
    else{
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count=0
        alert("You Are Out")

    }
    

})
four.addEventListener("click",()=>{
    ys.innerHTML ="4"
    os.innerHTML=rand
    if(rand!=4){
        rand = Math.floor(
            Math.random() * nmbrs.length
            
        )
        cs=cs+4

        count=count+4
        run.innerHTML=count
        rs.innerHTML=cs
    }
    else{
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count =0
        alert("You Are Out")

    }
    

})
five.addEventListener("click",()=>{
    ys.innerHTML ="5"
    os.innerHTML=rand
    if(rand!=5){
        rand = Math.floor(
            Math.random() * nmbrs.length
            
        )
        cs=cs+5
        count=count+5
        run.innerHTML=count
        rs.innerHTML=cs
    }
    else{
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count=0
        alert("You Are Out")

    }
    
})
six.addEventListener("click",()=>{
    ys.innerHTML ="6"
    os.innerHTML=rand
    if(rand!=6){
        rand = Math.floor(
            Math.random() * nmbrs.length
            
        )
        cs=cs+6
        count=count+6
        run.innerHTML=count
        rs.innerHTML=cs
    }
    else{
        rand = Math.floor(
            Math.random() * nmbrs.length  
        )
        wicket=wicket+1
        wick.innerHTML=wicket
        count=0
        alert("You Are Out")

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
