var todoText = document.querySelector("#inputNote");
var parent = document.querySelector("#parent")

function addNote() {
      if (inputNote.value.length < 3) {
        alert("Enter Valid Note");
        return;
      }
     
      //   parent div
      var alertDiv = document.createElement("div");
      alertDiv.className = "alert alert-primary d-flex justify-content-between";
      var iconDiv = document.createElement("div");
      
      //   edit icon
      var editIcon = document.createElement("i");
      editIcon.className = "fa-solid btn fa-pen-to-square";
      editIcon.setAttribute("onclick", "editHandler(this)");

      //   delete icon
      var deleteIcon = document.createElement("i");
      deleteIcon.className = "fa-solid btn fa-trash";

      //   assign delete fucntion
      deleteIcon.setAttribute("onclick", "deleteHandler(this)");
    
      // append delete icon or edit icon
      iconDiv.append(editIcon);
      iconDiv.append(deleteIcon);
    
      //   set inputnote value
      alertDiv.innerHTML = inputNote.value;

      //   alertDiv = inputNote.value;
      alertDiv.append(iconDiv);
    
      //   console.log("alertDiv", alertDiv);
      parent.append(alertDiv);
    
      inputNote.value = "   ";
    }

    function deleteHandler(ele) {
      ele.parentNode.parentNode.remove();
    }
    
    function editHandler(ele) {
      const editPrompt = prompt("Enter new note");
      ele.parentNode.parentNode.firstChild.textContent = editPrompt;
    }
    