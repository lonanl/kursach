function changeCount(cardObject, isplus) {
    let pCountObject = cardObject.parentElement.querySelector('.count')
    let count = Number(pCountObject.textContent)
    if (isplus && count < 10) {
        count += 1
        pCountObject.textContent = String(count)
    } else if (!isplus && count > 1) {
        count -= 1
        pCountObject.textContent = String(count)
    }
    console.log(count)
    // console.log(cardObject.parentElement.parentElement.parentElement.classList.contains('cart-element'))
    if (cardObject.parentElement.parentElement.parentElement.classList.contains('cart-element')) {
        updatePriceByCount(cardObject.parentElement.parentElement.parentElement, count)
    }
}

function changeSelectedPrice(priceElem, targetClass) {
    console.log(priceElem.classList)
    if (!priceElem.classList.contains('bold-b') && priceElem.textContent !== '---') {
        priceElem.classList.toggle("bold-b")
        // if (priceElem.classList.contains('small-price')) {
        priceElem.parentElement.querySelector(`.${targetClass}`).classList.toggle("bold-b")
        // } else {
        //     priceElem.parentElement.querySelector('.small-price').classList.toggle("bold-b")
        // }
        if ((targetClass === 'big-price-title') || (targetClass === 'small-price-title'))
            updatePriceBySize(priceElem, targetClass)
    }
}