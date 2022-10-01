let h1 = document.querySelector('h1')
let body = document.querySelector('body')
h1.addEventListener('mouseover',function(){
    body.style.backgroundColor = 'green'
    console.log("测试文本")
})
