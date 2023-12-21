const myLibrary = [];

class Book {
  constructor(nam, autho,page, red, published, lang) {
    this.name = nam;
    this.author = autho;
    this.pages=page
    this.read = red;
    this.dop = published;
    this.language = lang;
  }
}
let count=0;
const shelf=document.getElementById("bookshelf");
const og_node=document.getElementById("A_Game_Of_Thrones");
const dialog = document.querySelector("dialog");
const add=document.getElementById("addbook");
const sub=document.getElementById("done");
const bookcounter=document.getElementById("bookcount");
const readcounter=document.getElementById("readnum");
const unreadcounter=document.getElementById("unreadnum");

sub.addEventListener("click",addbookto,false);

add.addEventListener("click",()=>{
    dialog.showModal();
});

function addbookto(event){
  
  event.preventDefault();
  console.log("thanks");
  const na=document.getElementById("bookName").value;
  const auth=document.getElementById("author").value;
  const page=document.getElementById("pages").value;
  const dop=document.getElementById("publishDate").value;
  const lang=document.getElementById("language").value;
  const reade=document.getElementById("hasRead").value;
  const book1=new Book(na,auth,page,reade,dop,lang);
  const form=document.querySelector("form");
  form.reset();
  dialog.close();
  
  count=count+1;
  const nodee=og_node.cloneNode(true);
  nodee.setAttribute("id",na);
  nodee.querySelector("#title").textContent=na;
  nodee.querySelector("#author").textContent=auth;
  nodee.querySelector("#pages").textContent=page;
  nodee.querySelector("#lan").textContent=lang;
  nodee.querySelector("#dop").textContent=dop;
  if (reade=="on") {
    readcounter.innerText=Number(readcounter.innerText)+1;
    nodee.querySelector("#toogleA").checked=true;
  } else {
    unreadcounter.innerText=Number(readcounter.innerText)+1;
    nodee.querySelector("#toogleA").checked=false;
  }

  nodee.querySelector("#toogleA").setAttribute("id",`toggle${count}`);
  nodee.querySelector(`label[for="toogleA"]`).setAttribute("for",`toggle${count}`);
  bookcounter.innerText=count;
  

  shelf.appendChild(nodee);
  console.log(book1);
  
}