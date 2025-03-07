const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length 
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {

    // 已激活的 circle 添加 active 类
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    // 给两端尽头的按钮添加禁用
    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

    // 进度条
    // 统计所有的 active 类数量，为了防止更新不及时而不用 currentActive
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%'
}