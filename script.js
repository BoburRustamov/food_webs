let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
}else{
    document.querySelector('#scroll-top').classList.remove('active');
}

function loader(){
    const leader = document.querySelector('.loader-container')
    leader.classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut(); // or fadeOut()

const ourmenu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/g-1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "dinner double", 
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware IPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thoundercats `,
    },
    {
        id: 3,
        title: "godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave funny pack 3 wolf moon street art photo booth before they sold out organic viral.`
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch.Primsm austin mlkshk truffaut,` 
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter painterest meditation farm-to-table 90's pop-up`
    },
    {  
        id: 6,
        title: "Oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo carft beer chia heirloom IPhone everyday`
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`
    },
    {
        id: 8,
        title: "American Classic",
        category: "luch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumbir kickstarter thundercats migas everyday carry squid palo leggings food truck truffaut`,
    },
    {
        id: 9,
        title: "quarantine Buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing`
    },
    {
        id: 10,
        title: "stake dinner",
        category: "dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
];

const sectionCenter = document.querySelector(".ourmenu_center");
const filterBtns = document.querySelectorAll(".filter-btn")

// load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(ourmenu)
})

// filter items
filterBtns.forEach( function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.menu;
        const menuCategory = ourmenu.filter(function (menuItem){
            if(menuItem.category === category){
                return menuItem
            }
        })
        // console.log(menuCategory);
        if(category == 'all'){
            displayMenuItems(ourmenu)
        }else{
            displayMenuItems(menuCategory)
        }
    });
});
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `<article class="ourmenu-item">
                    <img src=${item.img} class="ourmenu-photo" alt=${item.title} /> 
                    <div class="ourmenu-info">
                        <div class="ourmenu-info-in">
                            <h4 class="outmenu-info-title">${item.title}</h4>
                            <h4 class="ourmenu-price">$${item.price}</h4>
                        </div>
                        <p class="ourmenu-text">${item.desc}</p>
                        <button class="ourmenu_order">Order Now</button>
                    </div>           
                </article>` 
        });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
}