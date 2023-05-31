function fill(parent, sample, catalog) {
    let index = 0 //индекс (чисто для нумерации на странице)
    catalog.forEach((element) => { //для всех элементов массива каталога
        let newItem = sample.cloneNode(true)  //создаем новый виртуальный элемент из сэмпла глубоким копированием
        sample.parentElement = parent
        newItem.id = `card${index}` //ставим индекс в айди
        index++
        newItem.setAttribute('articul-id', element.id) //артикул
        newItem.querySelector('.item-card-title').innerHTML = element.title //название
        newItem.querySelector('.item-image').setAttribute('src', element.image)
        newItem.querySelector('.description').textContent = element.description
        newItem.querySelector('.card-row-5').textContent = element.region
        newItem.querySelector('.kislotnost').style.width = `${element.kislotnost}%`
        newItem.querySelector('.gorech').style.width = `${element.gorech}%`
        newItem.querySelector('.plotnost').style.width = `${element.plotnost}%`
        newItem.querySelector('.small-price').textContent = element.price_low
        newItem.querySelector('.big-price').textContent = element.price_big
        newItem.setAttribute('style', '') //убираем display: none
        parent.append(newItem) //добавляем в родителя созданный элемент
        console.log(newItem)
    })
}

const itemsEspresso = document.querySelector('.for-espresso-column .items') //родительский узел
if (itemsEspresso !== null) {
    let itemSample = itemsEspresso.querySelector('.item-card').cloneNode(true) //создаем виртуальный сэмпл карточки


    let itemsFilter = document.querySelector('.for-filter-column .items')
    itemsEspresso.querySelector('.item-card').remove() //удаляем оригинальную карточку
    fill(itemsEspresso, itemSample, catalogEspresso.slice(0, 6))
    fill(itemsFilter, itemSample, catalogFilter)
}

let parentForEspresso = document.querySelector('.section-e-1')
if (parentForEspresso !== null) {
    let forEspressoSample = parentForEspresso.querySelector('.item-card').cloneNode(true)
    parentForEspresso.querySelector('.item-card').remove()
    fill(parentForEspresso, forEspressoSample, catalogEspresso.slice(0, 3))
    parentForEspresso = document.querySelector('.section-e-2')
    fill(parentForEspresso, forEspressoSample, catalogEspresso.slice(3))
}
