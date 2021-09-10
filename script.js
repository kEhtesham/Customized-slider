// Get and Push Functionality

var sliderNumber = 1;
showDivs(sliderNumber);

function plusDivs(n) {
    showDivs(sliderNumber += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName('image_slide');

    if (n > x.length) {
        sliderNumber = 1;
    }
    if (n < 1){
        sliderNumber = x.length;
    }

    var effect = document.getElementById('effects').value;
    
    for (var i=0; i< x.length; i++) {
        x[i].style.display= "none";
        if (effect == 1) {
            x[i].classList.remove("visible");
            x[i].classList.remove("remove");
            x[i].classList.remove("fadeout");
        }
        else {
            x[i].classList.remove("fade");
            x[i].classList.add("fadeout");
        }   
    }
    
    x[sliderNumber-1].style.display= "block";
    if (effect == 1){

        //Slide animation
        
        setTimeout(function(){
            x[sliderNumber-1].classList.add("visible");
            // console.log('sliderNumber',sliderNumber);
            if(sliderNumber === 1) {
                x[x.length - 1].classList.add("remove");
            } else {
                x[sliderNumber - 2].classList.add("remove");
            }
        }, 1);

        //Removed element
        
        x[sliderNumber-1].classList.remove("fade");
    }
    else {
        // Removed element

        x[sliderNumber-1].classList.remove("visible");
        x[x.length- 1].classList.remove("remove");
        x[x.length- 2].classList.remove("remove");
        
        //fade animation

        x[sliderNumber-1].classList.add("fade");
        x[sliderNumber-1].classList.remove("fadeout");
    }
}

// range slider 

function Slider_Animation() {
    var slider = document.getElementById("myRange");
    var speedElem = document.querySelectorAll('.image_slide');
    
    for(var k = 0; k < speedElem.length; k++){

        let Animation_speed = document.getElementById("Animation_speed");

        speedElem[k].style.animationDuration = slider.value/10 + "s";
        speedElem[k].style.transitionDuration = slider.value/10 + "s";
        
        Animation_speed.innerText = slider.value/10 + "s";
    
        slider.oninput = function() {
            Animation_speed.innerText = slider.value/10 + "s";
            console.log("inner" + Animation_speed);
        }
    }   
}
Slider_Animation();

// Get and push image

function showFileName() {    
    
    // get url 
    var dataThrow = document.querySelector('.showUrl');

    dataThrow.style.backgroundColor = "#7a6dff";
    dataThrow.innerText = "Adding the rest Filters...";
    var node = document.createElement("i");
    buttonAnimation();

    function buttonAnimation() {
        setTimeout(function() {
            dataThrow.innerText = "Done";        
            node.className = "fas fa-check push_icon";
        
            dataThrow.appendChild(node);
        }, 3000);
        setTimeout(function() {
            
            dataThrow.innerText = "Add to Slider";
            node.className = "fas fa-chevron-right push_icon";
        
            dataThrow.appendChild(node);
            dataThrow.style.backgroundColor = "#e9e9ff";
        }, 5000);
    }

    var fil = document.getElementById("myFile");
    const element = document.getElementById("image_path");
    const para = document.createElement("img");
    para.className = 'image_slide';
    para.style.display = 'none';
    para.style.animationDuration = '1s';
    para.style.transitionDuration = '1s';
    
    const [file] = fil.files;

    if(file) {
        para.src = URL.createObjectURL(file);
        element.appendChild(para);
        dataThrow.style.backgroundColor = "#7a6dff";
        dataThrow.innerText = "Adding Image...";
        var node = document.createElement("i");
        buttonAnimation();
        fil.value = null;
    }
    else {
        alert('Please Upload Image to Preview in slider');
        buttonAnimation();
    }

    Slider_Animation();
}