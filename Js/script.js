


function imageslider(anything){
    document.querySelector('.starbucks').src=anything;
}


function changecircle(color){
    const circle = document.querySelector('.circle');
    const title = document.querySelector('.textbox h2 span');

    circle.style.background = color;
    title.style.color = color;


}