let products = document.querySelectorAll('img')
let cart = document.getElementById('cart')
let order = document.getElementById('order')
let section = document.getElementById('Menu')
let Menu = document.querySelectorAll('#photo')
let add_to_cart = document.querySelectorAll('#btn')
let TotalValue = document.querySelector('.value')
let total = document.querySelector('.total')
let TotalPrice = 0
console.log(Menu)
cart.addEventListener('click',()=>{
  if(order.style.display == 'block'){
    order.style.display = 'none'
  }
  else{
    order.style.display = 'block'
  }
})
function AddToCart(imgsrc,name,price,Total){
        let list = document.createElement('li')
        let img = document.createElement('img')
        let h2 = document.createElement('h2')
        let photoDes = document.createElement('div')
        let p = document.createElement('p')
        let div = document.createElement('div')
        div.classList.add('order')
        p.textContent = price+'$'
        h2.textContent = name
        img.src = imgsrc
        order.appendChild(list)
        list.appendChild(div)
        div.appendChild(img)
        photoDes.appendChild(h2)
        photoDes.appendChild(p)
        div.appendChild(photoDes)
}
Menu.forEach((span)=>{
        let pro = span.children[0].src
        let btn = span.children[1].children[2]       
        let name = span.children[1].children[0].textContent
        let price = span.getAttribute('price')
        console.log(price);
        
        btn.addEventListener('click', ()=>{
          alert('item added')
          TotalPrice += +(price)
          AddToCart(pro,name,price)
          total.innerHTML = `${TotalPrice}$`
        })
})
// add_to_cart.forEach((btn)=>
//   btn.addEventListener('click',()=>{
//         let pro = span.children[0].src
//         let btn = span.children[1].children[1]
//         let name = span.children[1].children[0].textContent
//     order.style.display = 'block'
//     AddToCart(pro,name,price)
//   })
// )