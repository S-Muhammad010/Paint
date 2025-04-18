const canvas = document.querySelector('canvas')
const cnv = canvas.getContext('2d')
const brushWidth = document.querySelector('#brush-width')
const color = document.querySelector('#color-picker')
const brush = document.querySelector('.brush')
const eraser = document.querySelector('.eraser')
const clearBtn = document.querySelector('.clear')
const saveBtn = document.querySelector('.save')

let isDrawing = false
let currenWidth = 5
let currenColor = ''

window.addEventListener('load' , ()=>{
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    cnv.fillStyle = 'white'
    cnv.fillRect(0, 0, canvas.width, canvas.height)
})

function startDrawing() {
    isDrawing = true
    cnv.beginPath()
    cnv.lineWidth = currenWidth
}

function drawing(e) {
    if(!isDrawing) {
        return
    }
    cnv.lineTo(e.offsetX, e.offsetY)
    cnv.strokeStyle = currenColor
    cnv.stroke()
}

function endDrawing() {
    isDrawing = false
}

canvas.addEventListener('mousedown' , startDrawing)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', endDrawing)


brushWidth.addEventListener('change', ()=> {
    currenWidth = brushWidth.value
})
color.addEventListener('change', ()=> {
    currenColor = color.value
})


eraser.addEventListener('click', ()=> {
    eraser.classList.add('active')
    brush.classList.remove('active')
    currenColor = 'white'
})

brush.addEventListener('click', ()=> {
    brush.classList.add('active')
    eraser.classList.remove('active')
    currenColor = color.value
})

clearBtn.addEventListener('click', ()=>{
    cnv.fillRect(0, 0, canvas.width, canvas.height)
})

saveBtn.addEventListener('click', ()=>{
    let link = document.createElement('a')
    link.download = 'data.jpg'
    link.href = canvas.toDataURL()
    link.click()
})





