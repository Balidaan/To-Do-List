function addMore() {
  var input1 = document.getElementById("input").value;
  var error1 = document.getElementById("error");

  if (input1 == "" || input1 == " ") {
    error1.innerHTML = "Please enter a value";
    error1.style.color = "red";
  } else {
    let box = document.getElementById("box");
    let li = document.createElement("li");
    li.textContent = input1;
    let pos = box.firstElementChild;
    if (pos == null) {
      box.appendChild(li);
    } else {
      box.insertBefore(li, pos);
    }
    error1.innerHTML = " ";

    let a = document.createElement("a");
    a.textContent = "x";
    a.href = "javascript:void(0)";
    a.className = "remove";
    li.appendChild(a);

    var x = document.createElement("input");
    x.type = "radio";
    li.appendChild(x);

    x.onclick = function () {
      if (this.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    };
  }
  document.getElementById("input").value = "";
}

//let btn = document.querySelector("ul");
a.addEventListener("click", function (e) {
  let box = document.getElementById("box");
  let li = e.target.parentNode;
  box.removeChild(li);
});
