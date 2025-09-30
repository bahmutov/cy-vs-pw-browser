const timer = document.getElementById('timer')
let count = 0
setInterval(() => {
  count += 1
  timer.innerText = count
}, 1000)
