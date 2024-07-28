/*window.innerHeight = 400;
window.innerWidth=250;
window.screen.height = 400;
window.screen.width=250;
*/
function AddItemToList(){
  //  console.log("add");
    var list = document.getElementById("ListItems");
    var item = document.createElement("li");
    item.innerHTML = document.getElementById("AddItem").value;
    var close= document.createElement("img");
    close.src="images/close.gif";
    close.className="close";
    close.addEventListener("click", function(){ Close(item,list); })
   // close.onclick="Close("+item+","+list+")";
    item.appendChild(close);
    item.addEventListener("dblclick", function(){ removeItem(item); });
    list.appendChild(item);

}
function removeItem(item){
   // console.log(item);
    if(item.style.textDecoration=="line-through")
        item.style.textDecoration="";
    else
        item.style.textDecoration = "line-through";

}
function Close(item,list){
   // console.log(list);
    list.removeChild(item);
    item.innerHTML="";
}
