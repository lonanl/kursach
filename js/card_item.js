function changeCount(cardObject, isplus) {
    let pCountObject = cardObject.parentElement.querySelector('.count')
    let count = Number(pCountObject.textContent)
    if (isplus && count < 10) {
        pCountObject.textContent = count + 1
    } else if (!isplus && count > 1) {
        pCountObject.textContent = count - 1
    }
    console.log(count)
}