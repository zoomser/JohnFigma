// поиск элементов
let burger=document.querySelector('.burger')
let menu=document.querySelector('.nav-ul')
// действие к переменной бургер
burger.addEventListener("click",function(){
    // menu.style.display="block"
    // добавляем класс к элементу toggle(тумблер)
    menu.classList.toggle("show")
    // делаем полосочки в крестик
    burger.classList.toggle("active_burger")
})

