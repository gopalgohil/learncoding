let img_1=document.getElementById("img_1");
let span=document.getElementById("span")

img_1.addEventListener("click",function(){
    if(img_1.src.match("https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png")){
        img_1.src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191217202846/Programming-for-Beginners-10-Best-HTML-Coding-Practices-You-Must-Know.png";
        
    }

    else{
        img_1.src="https://img.freepik.com/premium-vector/programming-software-app-development-big-data-processing_106788-1477.jpg";
    }
})
let contact=document.getElementById("contact");
let count=0;
contact.addEventListener("click",function(){
if(count==0){
    body.style.backgroundColor="transparent";
   
    count=1;
}
else{
    body.style.backgroundColor="#d3c7f0";
    
    count=0;
}
})