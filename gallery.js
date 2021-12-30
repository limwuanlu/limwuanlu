const results = [
  {
    id: 1,
    img: "fs1.JPG",
    caption: "Foundation Semester 1",
  },
  {
    id: 2,
    img: "fs2.JPG",
    caption: "Foundation Semester 2",
  },
  {
    id: 3,
    img: "fs3.JPG",
    caption: "Foundation Semester 3",
  },
  {
    id: 4,
    img: "dy1s1.JPG",
    caption: "Degree Year 1 Semester 1",
  },
  {
    id: 5,
    img: "dy1s2.JPG",
    caption: "Degree Year 1 Semester 2",
  },
  {
    id: 6,
    img: "dy1s3.JPG",
    caption: "Degree Year 1 Semester 3",
  },
  {
    id: 7,
    img: "dy2s1.JPG",
    caption: "Degree Year 2 Semester 1",
  },
]

const img = document.getElementById("pic-img");
const caption = document.getElementById("caption");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function (){
  const item = results[currentItem];
  img.src = item.img;
  caption.textContent = item.caption;
});

window.addEventListener("DOMContentLoaded", function (){
  const item1 = events[currentItem1];
  img1.src = item1.img;
  name1.textContent = item1.name;
  position.textContent = item1.position;
  description1.textContent = item1.description1;
  description2.textContent = item1.description2;
});


function showPerson(person){
  const item = results[person];
  img.src = item.img;
  caption.textContent = item.caption;
}

nextBtn.addEventListener("click", function(){
  currentItem++;
  if (currentItem > results.length -1){
      currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
  currentItem--;
  if (currentItem < 0){
      currentItem = results.length - 1;
  }
  showPerson(currentItem);
});



const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn){
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    var x = document.getElementById("result");
    var y = document.getElementById("event1");
    var z = document.getElementById("project1");
    x.style.display = "none";
    if (styles.contains("academic")){
      
      if (y.style.display || z.style.display === "block"){
        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "block";
      }
      else if (x.style.display ==="none") {
        x.style.display = "block";
      } 
      
      else {
        x.style.display = "none";
      }

    }
    else if (styles.contains("event")){
      
      if (x.style.display || z.style.display === "block"){
        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "block";
      }
  
      else {
        y.style.display = "block";
      }
    }

    else {
      if (x.style.display || y.style.display ==="block"){
        x.style.display  = "none";
        y.style.display = "none";
        z.style.display = "block";
      }
      else {
        z.style.display = "block";
      }
    }
  })
})


const events = [
  {
    id: 1,
    img: "e11.png",
    name: "FEXES 2019 (Business Event)",
    position: "Position : Financial Manager",
    description1: "collaborated with a team of 5 students to set up a small business",
    description2: "helped develop new branding for products",
  },
  {
    id: 2,
    img: "e4.jpg",
    name: "Orphanage Visit Voluntary Project",
    position: "Position : Assistant Head of Finance Department",
    description1: "estimate budget, seek for sponsorships and do accounting records",
    description2: "facilitate orphans in solving challenges related to mental and physical health",
  },
  {
    id: 3,
    img: "e2.jpg",
    name: "Covid-19 Vaccination between Fact and Fiction (Webinar)",
    position: "Department : Ceremony and Protocol",
    description1: "organized the flow of event",
    description2: "communicated with speakers, updating them about contents and event flow",
  },
  {
    id: 4,
    img: "e3.jpeg",
    name: "Foundation Student Completion Ceremony",
    position: "Department : Media and Photography",
    description1: "create attractive ceremony videos",
    description2: " upload videos and photos to share with participants on time",
  },
]

const img1 = document.getElementById("pic1-img");
const name1 = document.getElementById("name");
const position = document.getElementById("position");
const description1 = document.getElementById("description1");
const description2 = document.getElementById("description2");

const prevBtn1 = document.querySelector(".prev-btn1");
const nextBtn1 = document.querySelector(".next-btn1");

let currentItem1 = 0;

window.addEventListener("DOMContentLoaded", function (){
  const item1 = events[currentItem1];
  img1.src = item1.img;
  name1.textContent = item1.name;
  position.textContent = item1.position;
  description1.textContent = item1.description1;
  description2.textContent = item1.description2;
});

function showPerson1(person){
  const item1 = events[person];
  img1.src = item1.img;
  name1.textContent = item1.name;
  position.textContent = item1.position;
  description1.textContent = item1.description1;
  description2.textContent = item1.description2;
}

nextBtn1.addEventListener("click", function(){
  currentItem1++;
  if (currentItem1 > events.length -1){
      currentItem1 = 0;
  }
  showPerson1(currentItem1);
});

prevBtn1.addEventListener("click", function(){
  currentItem1--;
  if (currentItem1 < 0){
      currentItem1 = events.length - 1;
  }
  showPerson1(currentItem1);
});


var insertthis = ["<a href='https://limcafe.000webhostapp.com/' target='_blank'>Click to view</a>", "<a href='https://drive.google.com/file/d/1RS5FGpqqn1LLQnTt0JKpA-gcdX7Yja0p/view?usp=sharing' target='_blank'>Click to view</a>" ];
var linktarget = document.getElementById("cw1");

/*"https://limcafe.000webhostapp.com/"*/

const projects = [
  {
    id: 1,
    img2: "cw1.JPG",
    title: "Cafe Website",
    link: linktarget.innerHTML = insertthis[0],
    explain: "A website for customer to order their drinks. This website is created by using HTML, CSS, Javascript, PHP, and database system.",
  },
  {
    id: 2,
    img2: "dbs.JPG",
    title: "Database System",
    link: linktarget.innerHTML = insertthis[1], 
    explain: "Oracle : Database for Delivery Management System. In this project, we identify all the entities and relationship of the system and, write oracle code to implement it."
  },
]



const img2 = document.getElementById("cw-pic");
const title = document.getElementById("cw");
/*const link = document.getElementById("cw1");*/
const explain = document.getElementById("cw2");


const prevBtn2 = document.querySelector(".prev-btn2");
const nextBtn2 = document.querySelector(".next-btn2");

let currentItem2 = 0;

window.addEventListener("DOMContentLoaded", function (){
  const item2 = projects[currentItem2];
  img2.src = item2.img2;
  title.textContent = item2.title;
  linktarget.innerHTML = insertthis[currentItem2];
  explain.textContent = item2.explain;
});

function showPerson2(person){
  const item2 = projects[person];
  img2.src = item2.img2;
  title.textContent = item2.title;
  linktarget.innerHTML = insertthis[currentItem2];
  explain.textContent = item2.explain;
}

nextBtn2.addEventListener("click", function(){
  currentItem2++;
  if (currentItem2 > projects.length -1){
      currentItem2 = 0;
  }
  showPerson2(currentItem2);
});

prevBtn2.addEventListener("click", function(){
  currentItem2--;
  if (currentItem2 < 0){
      currentItem2 = projects.length - 1;
  }
  showPerson2(currentItem2);
});
