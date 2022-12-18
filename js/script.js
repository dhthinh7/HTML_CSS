import data from './../asset/data.json' assert {type: 'json'};

const listItems = data.cardsItems
const items = document.getElementById('main__items')

const renderItems = function (listItems) {
  return listItems.reduce((result, item) => {
    return item.isShow ? result += `
    <div class="item item--0">
      <div class="item__day">${item.day}</div>
      <a href=${item.link} target="_blank">
        <div class="item__overlay">
          <h3>${item.tittle}</h3>
          <p>${item.description}</p>
        </div>
      </a>
      <div class="content__main">
        <div class="item--background" style="background-image: url(${item.img});"></div>
      </div>
    </div>
  ` : result
  }, '')
}

items.innerHTML = renderItems(listItems)