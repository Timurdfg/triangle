// function c1() {

// let canvas = document.querySelector('#c1')
// let ctx = canvas.getContext('2d')

//     ctx.beginPath()
//     ctx.strokeStyle = 'red'
//     ctx.lineWidth = '2'
//     ctx.moveTo(200, 0)
//     ctx.lineTo(400, 200)
//     ctx.lineTo(0, 200)
//     ctx.lineTo(200, 0)
//     ctx.stroke()
//     ctx.closePath()
// }

// function c2() {

// let canvas = document.querySelector('#c2')
// let ctx = canvas.getContext('2d')
    
//     ctx.beginPath()
//     ctx.fillStyle = 'red'
//     ctx.lineWidth = '2'
//     ctx.moveTo(200, 0)
//     ctx.lineTo(400, 200)
//     ctx.lineTo(0, 200)
//     ctx.lineTo(200, 0)
//     ctx.fill()
//     ctx.closePath()
// }

// function c3() {

// let canvas = document.querySelector('#c3')
// let ctx = canvas.getContext('2d')
        
//     ctx.beginPath()
//     ctx.strokeStyle = 'yellow'
//     ctx.lineWidth = '2'
//     ctx.moveTo(0, 0)
//     ctx.lineTo(400, 0)
//     ctx.lineTo(200, 200)
//     ctx.lineTo(0, 0)
//     ctx.stroke()
//     ctx.closePath()
// }
    
// function c4() {

// let canvas = document.querySelector('#c4')
// let ctx = canvas.getContext('2d')
        
//     ctx.beginPath()
//     ctx.fillStyle = 'yellow'
//     ctx.lineWidth = '2'
//     ctx.moveTo(0, 0)
//     ctx.lineTo(400, 0)
//     ctx.lineTo(200, 200)
//     ctx.lineTo(0, 0)
//     ctx.fill()
//     ctx.closePath()
// }

// const chek = () => {
//     const sections = document.querySelector('#sec1')
//     const items = sections.querySelectorAll('canvas')
//     sections.addEventListener('click', function() {
//         for (const item of items) {
//             item.classList.toggle('active')
//         }
//     })
// }
    

// const chek2 = () => {
//     const sections = document.querySelector('#sec2')
//     const items = sections.querySelectorAll('canvas')
//     sections.addEventListener('click', function() {
//         for (const item of items) {
//             item.classList.toggle('active')
//         }
//     })
// }


// c1()
// c2()
// c3()
// c4()
// chek()
// chek2()

function canvas1() {
    
    let canvas = document.querySelector('#c1')
    let ctx = canvas.getContext('2d')
    
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.lineWidth = '2'
    ctx.moveTo(200, 0)
    ctx.lineTo(400, 200)
    ctx.lineTo(0, 200)
    ctx.lineTo(200, 0)
    ctx.stroke()
    ctx.closePath()
}

canvas1()

function canvas2() {
    
    let canvas = document.querySelector('#c2')
    let ctx = canvas.getContext('2d')
        
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.lineWidth = '2'
    ctx.moveTo(200, 0)
    ctx.lineTo(400, 200)
    ctx.lineTo(0, 200)
    ctx.lineTo(200, 0)
    ctx.fill()
    ctx.closePath()
}
    
canvas2()

    function canvas3() {
    
let canvas = document.querySelector('#c3')
let ctx = canvas.getContext('2d')
            
    ctx.beginPath()
    ctx.strokeStyle = 'yellow'
    ctx.lineWidth = '2'
    ctx.moveTo(0, 0)
    ctx.lineTo(400, 0)
    ctx.lineTo(200, 200)
    ctx.lineTo(0, 0)
    ctx.stroke()
    ctx.closePath()
}

canvas3()

function canvas4() {
    
let canvas = document.querySelector('#c4')
let ctx = canvas.getContext('2d')
            
    ctx.beginPath()
    ctx.fillStyle = 'yellow'
    ctx.lineWidth = '2'
    ctx.moveTo(0, 0)
    ctx.lineTo(400, 0)
    ctx.lineTo(200, 200)
    ctx.lineTo(0, 0)
    ctx.fill()
    ctx.closePath()
}

canvas4() 

const show1 = () => {
    const sections = document.querySelector('#sec1')
    const items = sections.querySelectorAll('canvas')
    sections.addEventListener('click', function() {
        for (const item of items) {
            item.classList.toggle('active')
        }
     })
}

show1()  

const show2 = () => {
    const sections = document.querySelector('#sec2')
    const items = sections.querySelectorAll('canvas')
    sections.addEventListener('click', function() {
        for (const item of items) {
            item.classList.toggle('active')
        }
    })
}
        
show2()