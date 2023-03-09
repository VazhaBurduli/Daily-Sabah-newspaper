
// Menu

$('.border').height(); 


$('.burger-nav').dblclick(function() {

    $('.border').toggleClass('appear');  
   
});
// $('.burger-nav').click(function() {

//     $('.border').show("slow");  
   
// });

$('.fa-xmark').click(function() {

    $('.border').toggleClass('appear');  
   
});

// $('.fa-xmark').click(function() {

//     $('.border').hide("slow");  
   
// });


// Articles


$('.today').click(function() {

    $('.today-section').addClass('appear');
    $('.seven-days-section').addClass('d-none');
    $('.thirty-days-section').addClass('d-none');
    
}); 

$('.days-7').click(function() {


    $('.seven-days-section').addClass('appear');
    $('.seven-days-section').addClass('d-none');
    $('.thirty-days-section').addClass('d-none');
    
}); 

$('.days-30').click(function() {

    $('.today-section').addClass('disappear');
    $('.seven-days-section').addClass("disappear");
    // $('.thirty-days-section').removeClass('d-none');

}); 

$('.part-two p a').mouseover(function() {

    $('.part-one p').css({'color': '#232323'});

}); 

$('.part-two p a').mouseout(function() {

    $('.part-one p').css({'color': 'gainsboro'});

}); 





// Currency Converter 



const input_currency = document.querySelector('#input_currency');
const output_currency = document.querySelector('#output_currency');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');

input_currency.addEventListener('change', compute);
output_currency.addEventListener('change', compute);
input_amount.addEventListener('input', compute);
output_amount.addEventListener('input', compute);

exchange.addEventListener('click', ()=>{
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value= temp;
    compute();
});

function compute(){
    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
    .then(res => res.json())
    .then(res => {
        const new_rate = res.rates[output_currency1];
        rate.innerText = `1 ${input_currency1} = ${new_rate} ${output_currency1}`
        output_amount.value = (input_amount.value * new_rate).toFixed(2);
    })
}

compute();