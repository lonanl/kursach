function ceDelete(cartElement) {
    console.log(cartElement.parentElement.parentElement.classList.toggle('deleted'))
    updateOrder()
}

let cartList = document.querySelector('.cart-list')
let itemSample = cartList.querySelector('.cart-element').cloneNode(true)
cartList.querySelector('.cart-element').remove()
allCatalog = [].concat(catalogEspresso, catalogFilter);
console.log(allCatalog)
cartSpisok.forEach((cartEl) => {
    console.log(cartEl.id)
    let catalogItem = allCatalog.find(item => item.id === cartEl.id);
    console.log(catalogItem)
    let newItem = itemSample.cloneNode(true)
    newItem.setAttribute('artikul', catalogItem.id)
    newItem.querySelector('.ce-title').textContent = catalogItem.title;
    newItem.setAttribute('bigPrice', catalogItem.price_big)
    newItem.setAttribute('smallPrice', catalogItem.price_low)
    newItem.setAttribute('count', cartEl.count)
    if (cartEl.isBig) {
        newItem.querySelector('.ce-price').textContent = `${catalogItem.price_big * cartEl.count} ₽`
        newItem.querySelector('.small-price-title ').classList.toggle("bold-b")
        newItem.querySelector('.big-price-title ').classList.toggle("bold-b")
    } else newItem.querySelector('.ce-price').textContent = `${catalogItem.price_low * cartEl.count}  ₽`
    newItem.querySelector('.count').textContent = cartEl.count
    cartList.append(newItem)

})

function updatePriceByCount(ce, count) {
    let oldCount = Number(ce.getAttribute('count'))
    let newPrice = Number(ce.querySelector('.ce-price').textContent.slice(0, -2)) / oldCount * count
    ce.setAttribute('count', count)
    ce.querySelector('.ce-price').textContent = `${newPrice} ₽`
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

function updateOrder() {
    let ces = document.querySelectorAll('.cart-element:not(.deleted)')
    console.log(ces)
    let summ = 0
    ces.forEach((ce) => {
        let price = Number(ce.querySelector('.ce-price').textContent.slice(0, -2))
        summ += price
        console.log(price, summ)
    })
    document.querySelector('.summ').textContent = `${summ} ₽`
    document.querySelector('.sale').textContent = `${Math.floor(summ * 0.1)} ₽`
    document.querySelector('.total').textContent = `${summ - Math.floor(summ * 0.1)} ₽`

}

updateOrder()
// setTimeout(updateOrder, 1000);