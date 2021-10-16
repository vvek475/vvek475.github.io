home=document.querySelectorAll('.link')
homelink=document.querySelectorAll('.linkto')
home1=[...home]
home2=[...homelink]
console.log(home1,home2[0])
console.log(home2[0])
homesel=document.getElementById('home')
home1[0].addEventListener('click',function(e){
    console.log('ok')
    calc()
    home2[0].style.display="flex"
})
home1[1].addEventListener('click',function(e){
    console.log('ok')
    calc()
    home2[1].style.display="flex"
})
home1[2].addEventListener('click',function(e){
    console.log('ok')
    calc()
    home2[2].style.display="flex"
})
home1[3].addEventListener('click',function(e){
    console.log('ok')
    calc()
    home2[3].style.display="flex"
})
home1[4].addEventListener('click',function(e){
    console.log('ok')
    calc()
    home2[4].style.display="flex"
})

function calc(){
    home2.forEach(element => {
        element.style.display='none'
    });
}