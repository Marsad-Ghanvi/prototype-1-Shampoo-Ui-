const go1=document.getElementById('goback1');
const go2=document.getElementById('goback2')

const params = new URLSearchParams(window.location.search);
const from =  params.get("from");
if(from=='home'){   
    go1.style.display = "block";
        const section = document.getElementById("our-story");

    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
}
}
else{
    go1.style.display = "none";
}
if(from=='product'){

    go2.style.display= "block";
    const section = document.getElementById("why-choose-us");

    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
}}
else{
    go2.style.display = "none";
}


function goback(){
    if(from=='home'){window.location.href = `index.html`;}
    else{window.location.href = `products.html`;}
}
