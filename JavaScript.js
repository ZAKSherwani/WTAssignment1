let table = document.querySelector("tbody");
rid=0
function addEntry() {
  rid=rid+1
    let row = table.insertRow();
    row.id=rid
    row.insertCell().appendChild(document.createTextNode((document.getElementById("naam")).value));
    if(document.getElementsByName("gender")[0].checked == true)
      row.insertCell().appendChild(document.createTextNode("Male"));
    if(document.getElementsByName("gender")[1].checked == true)
      row.insertCell().appendChild(document.createTextNode("Female"));
    row.insertCell().appendChild(document.createTextNode((document.getElementById("age")).value));
    row.insertCell().appendChild(document.createTextNode((document.getElementById("city")).value));
    var removebun = document.createElement("button");
    var udatebun = document.createElement("button");
    removebun.innerHTML = "remove";
    udatebun.innerHTML = "update";
    removebun.title = "remove this entry";
    udatebun.title = "update this entry";
    row.insertCell().append(removebun,udatebun);
    removebun.onclick = function(){
    var element = document.getElementById(row.id);
    element.parentNode.removeChild(element);
    }
    udatebun.onclick = function(){
      document.getElementById("updateBtn").disabled=false
      document.getElementById("updateBtn").className=row.id
      document.getElementById("addBtn").disabled=true
      var element = document.getElementById(row.id);
      document.getElementById("naam").value=element.childNodes[0].innerHTML
      if(element.childNodes[1].innerHTML==="Male")
        document.getElementsByName("gender")[0].checked=true
      else
        document.getElementsByName("gender")[1].checked=true
      document.getElementById("age").value=element.childNodes[2].innerHTML
      document.getElementById("city").value=element.childNodes[3].innerHTML
    }
  }
  function updateEntry() {
    document.getElementById("updateBtn").disabled=true
    document.getElementById("addBtn").disabled=false
    rowd = document.getElementById("updateBtn").className
    document.getElementById(rowd).childNodes[0].innerHTML=document.getElementById("naam").value
    if(document.getElementsByName("gender")[0].checked == true)
      document.getElementById(rowd).childNodes[1].innerHTML="Male"
    if(document.getElementsByName("gender")[1].checked == true)
      document.getElementById(rowd).childNodes[1].innerHTML="Male"
    document.getElementById(rowd).childNodes[2].innerHTML=document.getElementById("age").value
    document.getElementById(rowd).childNodes[3].innerHTML=document.getElementById("city").value
  }