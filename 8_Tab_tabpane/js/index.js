// Define function to get dom element
const getClass = (className) => {
  return document.querySelector(className)
};

const getMultiClass = (className) => {
  return document.querySelectorAll(className)
};


const tabItems = getMultiClass('.tab-item')
const tabPane = getMultiClass('.tab-pane')
const line = getClass('.line')

tabItems.forEach((item, index) => {
  item.onclick = function() {
    getClass('.tab-item.active').classList.remove('active')
    getClass('.tab-pane.active').classList.remove('active')

    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'
    
    this.classList.add('active')
    tabPane[index].classList.add('active')
  }

})