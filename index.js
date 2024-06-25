const txt=document.getElementById("txt");
const btn=document.getElementById("btn");
const content=document.querySelector(".content");
btn.addEventListener("click", async event=>{
     const name=(txt.value).toLowerCase();
     if(name)
        {
            const breed=await display(name);
            displayBreed(breed);
        }
    else{
        displayError("enter a proper breed");
        console.log("its an error");
    }
})
async function display(name)
{
    const apiUrl=`https://dog.ceo/api/breed/${name}/images/random`;
    const response=await fetch(apiUrl);
    if(!response.ok)
        {
            console.log("its an error");
            displayError("enter a proper breed");
        }
    else{
        return await response.json();
    }
}
function displayBreed(breed)
{
    const data=breed.message;
    content.textContent="";
    const image=document.createElement("img");
    content.style.display="flex";
    content.appendChild(image);
    image.src=data;
}
function displayError(message)
{
   content.textContent="";
   const errdis=document.createElement("h1");
   errdis.textContent=message;
   content.style.display="flex";
   content.appendChild(errdis);
}