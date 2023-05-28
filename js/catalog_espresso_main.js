const items = document.querySelector('.items')
const itemSample = document.querySelector('.item-card').cloneNode(true)
document.querySelector('.item-card').remove()
// itemSample.querySelector('.item-card-title').innerHTML = catalog[0].title
// console.log(catalog[0].title)
// itemSample.querySelector('.item-image').setAttribute('src', catalog[0].image)
// itemSample.querySelector('.description').innerHTML = catalog[0].description
// itemSample.querySelector('.kislotnost').style.width = `${catalog[0].kislotnost}%`
// itemSample.querySelector('.gorech').style.width = `${catalog[0].gorech}%`
// itemSample.querySelector('.plotnost').style.width = `${catalog[0].plotnost}%`
// itemSample.querySelector('.small-price').textContent = catalog[0].price_low
// itemSample.querySelector('.big-price').textContent = catalog[0].price_big
// newItem.id = `card${itemIndex}`
catalog.forEach((element) => {
    let newItem = itemSample.cloneNode(true)
    newItem.querySelector('.item-card-title').innerHTML = element.title
    newItem.querySelector('.item-image').setAttribute('src', element.image)
    newItem.querySelector('.description').innerHTML = element.description
    newItem.querySelector('.kislotnost').style.width = `${element.kislotnost}%`
    newItem.querySelector('.gorech').style.width = `${element.gorech}%`
    newItem.querySelector('.plotnost').style.width = `${element.plotnost}%`
    newItem.querySelector('.small-price').textContent = element.price_low
    newItem.querySelector('.big-price').textContent = element.price_big
    newItem.setAttribute('style', '')
    items.append(newItem)
    console.log(newItem)

})