window.addEventListener("scroll", function () {
  let container = document.querySelector("#n");
  container.classList.toggle("state2", scrollY > 338);
  container.classList.toggle("state1", scrollY < 338);
});
let li1=document.getElementById('li1');
let li2=document.getElementById('li2');
let li3=document.getElementById('li3');
let li4=document.getElementById('li4');
let li5=document.getElementById('li5');
if(window.scrollY > 338){
li1.addEventListener("click",function(){
  li1.classList.add("active1");
  li2.classList.remove("active1");
  li3.classList.remove("active1");
  li4.classList.remove("active1");
  li5.classList.remove("active1");
});
li2.addEventListener("click",function(){
  li2.classList.add("active1");
  li1.classList.remove("active1");
  li3.classList.remove("active1");
  li4.classList.remove("active1");
  li5.classList.remove("active1");
});
li3.addEventListener("click",function(){
  li3.classList.add("active1");
  li1.classList.remove("active1");
  li2.classList.remove("active1");
  li4.classList.remove("active1");
  li5.classList.remove("active1");
});
li4.addEventListener("click",function(){
  li4.classList.add("active1");
  li1.classList.remove("active1");
  li2.classList.remove("active1");
  li3.classList.remove("active1");
  li5.classList.remove("active1");
});
li5.addEventListener("click",function(){
  li5.classList.add("active1");
  li1.classList.remove("active1");
  li2.classList.remove("active1");
  li3.classList.remove("active1");
  li4.classList.remove("active1");
});
}
if(window.scrollY < 338){
li1.addEventListener("click",function(){
  li1.classList.add("active2");
  li2.classList.remove("active2");
  li3.classList.remove("active2");
  li4.classList.remove("active2");
  li5.classList.remove("active2");
});
li2.addEventListener("click",function(){
  li2.classList.add("active2");
  li1.classList.remove("active2");
  li3.classList.remove("active2");
  li4.classList.remove("active2");
  li5.classList.remove("active2");
});
li3.addEventListener("click",function(){
  li3.classList.add("active2");
  li1.classList.remove("active2");
  li2.classList.remove("active2");
  li4.classList.remove("active2");
  li5.classList.remove("active2");
});
li4.addEventListener("click",function(){
  li4.classList.add("active2");
  li1.classList.remove("active2");
  li2.classList.remove("active2");
  li3.classList.remove("active2");
  li5.classList.remove("active2");
});
li5.addEventListener("click",function(){
  li5.classList.add("active2");
  li1.classList.remove("active2");
  li2.classList.remove("active2");
  li3.classList.remove("active2");
  li4.classList.remove("active2");
});
}