function ceDelete(cartElement) { //удаление элемента
    console.log(cartElement.parentElement.parentElement.classList.toggle('deleted')) //добавляем класс "делетед" - которые делает нулевую высоту и полную прозрачность
    updateOrder()  // обновление заказа
}

let cartList = document.querySelector('.cart-list') //ищем родительский элемент списка
let itemSample = cartList.querySelector('.cart-element').cloneNode(true) //клонируем пример элемента
cartList.querySelector('.cart-element').remove() // удаляем оригинальный элемент
allCatalog = [].concat(catalogEspresso, catalogFilter); //полный список каталога
console.log(allCatalog)
cartSpisok.forEach((cartEl) => { //для каждого элемента списка содержимого корзины
    console.log(cartEl.id)
    let catalogItem = allCatalog.find(item => item.id === cartEl.id); //ищем этот элемент в каталоге
    console.log(catalogItem)
    let newItem = itemSample.cloneNode(true) //создаем новый элемент карточки корзины
    newItem.setAttribute('artikul', catalogItem.id) //заполняем карточку корзины
    newItem.querySelector('.ce-title').textContent = catalogItem.title;
    newItem.setAttribute('bigPrice', catalogItem.price_big)
    newItem.setAttribute('smallPrice', catalogItem.price_low)
    newItem.setAttribute('count', cartEl.count)
    if (cartEl.isBig) { //если цена большая
        newItem.querySelector('.ce-price').textContent = `${catalogItem.price_big * cartEl.count} ₽` //ставим цену
        newItem.querySelector('.small-price-title ').classList.toggle("bold-b") //убираем большое почеркивание у маленькой цены
        newItem.querySelector('.big-price-title ').classList.toggle("bold-b") //ставим в большую цену подчеркивание
    } else newItem.querySelector('.ce-price').textContent = `${catalogItem.price_low * cartEl.count}  ₽` //иначе просто ставим маленькую цену
    newItem.querySelector('.count').textContent = cartEl.count
    cartList.append(newItem) //добавляем элемент корзины в родительский элемент

})

function updatePriceByCount(ce, count) { //обновить цену по количеству
    let oldCount = Number(ce.getAttribute('count')) //ищем количество
    let newPrice = Number(ce.querySelector('.ce-price').textContent.slice(0, -2)) / oldCount * count ////считаем цену исходя из старого и нового количества и цены
    ce.setAttribute('count', count) //ставим новое кол-во
    ce.querySelector('.ce-price').textContent = `${newPrice} ₽` //
    updateOrder()
}

function updatePriceBySize(ceEl, targetClass) {
    let pricePer
    let ce = ceEl.parentElement.parentElement.parentElement
    if (targetClass === 'small-price-title')
        pricePer = Number(ce.getAttribute('bigPrice'))
    else
        pricePer = Number(ce.getAttribute('smallPrice'))
    let count = ce.getAttribute('count')
    ce.querySelector('.ce-price').textContent = `${pricePer * count} ₽`
    console.log(pricePer)
    updateOrder()
}

function updateOrder() { //обновить заказ
    let ces = document.querySelectorAll('.cart-element:not(.deleted)') //ищем все карточки
    console.log(ces)
    let summ = 0 //сумма
    ces.forEach((ce) => { //для каждой карточки
        let price = Number(ce.querySelector('.ce-price').textContent.slice(0, -2)) //выдергиваем цену
        summ += price //считаем сумму
        console.log(price, summ)
    })
    document.querySelector('.summ').textContent = `${summ} ₽` //ставим сумму
    document.querySelector('.sale').textContent = `${Math.floor(summ * 0.1)} ₽` //считаем и ставим скидку
    document.querySelector('.total').textContent = `${summ - Math.floor(summ * 0.1)} ₽` //считаем и ставим итоговую стоимость

}

updateOrder()
// setTimeout(updateOrder, 1000);