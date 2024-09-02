function menuchange(x) {
    x.classList.toggle("change");
    const div =  document.getElementById("header");
     if(!div.classList.contains('change'))
        {document.getElementById("header").className = "change";}
        else{
          div.classList.remove("change");
        }
  }

var btnContainer = document.getElementById("Btn11");
var btns = btnContainer.getElementsByClassName("hbtns");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
  var mybutton = document.getElementById("scroll-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

