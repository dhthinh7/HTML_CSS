const handleScroll = () => {
  const screenHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  const position = document.documentElement.scrollTop
  const calcScrollHeight = screenHeight - clientHeight
  const progressRatio = Math.round((position * 100) / calcScrollHeight)
  console.log(progressRatio)
  const btnBackTop = document.getElementById("btn")
  const progressValue = document.getElementsByClassName('progress--value')[0]

  position > 200 ? btnBackTop.style.display = 'grid' : btnBackTop.style.display = 'none';

  btnBackTop.onclick = function () {
    document.documentElement.scrollTop = 0
  }

  btnBackTop.style.backgroundImage = `conic-gradient(green ${progressRatio}%, red 0deg)`
  progressValue.innerHTML = `${progressRatio}%`
}

window.onscroll = handleScroll;
window.onload = handleScroll;