



document.addEventListener("click",(event)=>{

  const circle=document.createElement('div');

  circle.className="circle";
  circle.textContent="hii";

  const X=event.clientX;
  const Y= event.clientY;

  circle.style.left=`${X-25}px`;
  circle.style.top=`${Y-25}px`;

  const color=["red", "blue", "green", "orange", "yellow"];
  circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
  document.body.appendChild(circle);


  setTimeout(()=>{
    circle.remove();
  },5000);

})