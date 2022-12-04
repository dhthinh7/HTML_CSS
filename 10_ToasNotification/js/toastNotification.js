const SUCCESS = 'success'
const INFOR = 'infor'
const ERROR = 'error'
const WARNING = 'warning'

// Handle button click
const button = document.querySelectorAll('.btn')
button.forEach(btn => {
  btn.addEventListener('click', function () {
    itemObject = {
      type: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus.'
    }

    if ([...this.classList].includes(SUCCESS)) itemObject = { ...itemObject, type: SUCCESS }
    else if ([...this.classList].includes(INFOR)) itemObject = { ...itemObject, type: INFOR }
    else if ([...this.classList].includes(WARNING)) itemObject = { ...itemObject, type: WARNING }
    else if ([...this.classList].includes(ERROR)) itemObject = { ...itemObject, type: ERROR }

    createToastNotification(itemObject)
  })
})

// Create toast notification
function createToastNotification(toastItem) {
  let { type, description } = toastItem
  let toastItemsDiv = ''

  if (type.length === 0) return

  if (!document.querySelector('.toast__items')) {
    toastItemsDiv = document.createElement('div')
    toastItemsDiv.classList.add('toast__items')
    document.body.appendChild(toastItemsDiv)
  } else {
    toastItemsDiv = document.querySelector('.toast__items')
  }

  const toast = createToastItem(type, description)
  const close = toast.querySelector("#toast__close")
  toastItemsDiv.appendChild(toast)

  // Manual remove toast when click
  close.addEventListener('click', (e) => {
    toastItemsDiv.removeChild(toast)
    clearTimeout(toastTimeout)
  })

  // Auto remove toast after 3s
  const toastTimeout = setTimeout(() => {
    toastItemsDiv.removeChild(toast)
  }, 5000)
}

function createToastItem(type = 'success', description = '') {
  const icons = {
    success: "fa fa-check-circle",
    infor: "fa fa-info-circle",
    warning: "fa fa-exclamation-circle",
    error: "fa fa-info-circle"
  }

  const toastItemDiv = document.createElement('div')
  let icon = ''
  toastItemDiv.classList.add(type)

  switch (type) {
    case 'success':
      icon = icons.success
      break;
    case 'infor':
      icon = icons.infor
    case 'warning':
      icon = icons.warning
    case 'error':
      icon = icons.error
    default:
      break;
  }

  let itemToast = `
  <div class="item ${type}">
    <i class="icon ${icon}"></i>
    <div class="content">
      <div class="tittle">${type[0].toUpperCase() + type.slice(1)}</div>
      <div class="description">${description}</div>
    </div>
    <i class="fa fa-times" id="toast__close"></i>
  </div>
`
  toastItemDiv.innerHTML = itemToast;
  return toastItemDiv
}
