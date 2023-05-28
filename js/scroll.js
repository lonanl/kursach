function scrollCatalogItems(parentName, toRight) { //принимаем имя родителя (то где будем скроллить), вправо-истина, влево-ложь
    let scrollParent = document.querySelector(parentName) //ищем родителя - внешний элемент
    let current_position = Number(scrollParent.getAttribute('scroll')) //восстанавливаем по атрибуту родителя текущую позицию (то, на какой элемент мы проскроллиллись в прошлый раз)
    let count = scrollParent.getElementsByClassName('item-card').length //считаем количество элементов
    console.log(count)
    let switcherImg = scrollParent.parentElement.querySelector('.switcher-img') //ищем картинку переключателя в родителе родителя
    console.log(switcherImg)
    if (toRight) { //если направо мотаем
        if (current_position + 3 <= count - 3) { //если справа есть еще три карточки
            current_position += 3 //увеличиваем текущую позицию
            switcherImg.src = "img/icons/switch2_2_22x8.svg" //меняем картинку переключателя
        }
    } else {
        if (current_position - 3 >= 0) {
            current_position -= 3
            switcherImg.src = "img/icons/switch2_1_22x8.svg"
        }
    }
    console.log("cp", current_position)
    let scrollTarget = scrollParent.querySelector(`#card${current_position}`).offsetLeft //определяем сколько пикселей слева от начала родителя у элемента к которому мы скроллим
    console.log(scrollTarget)
    scrollParent.scrollTo({ //скролл плавный
        left: scrollTarget,
        behavior: 'smooth'
    })
    scrollParent.setAttribute('scroll', current_position) //сохраняем в атрибут родителя куда мы проскроллили
}



