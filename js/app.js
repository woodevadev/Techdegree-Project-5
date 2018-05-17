//Selects the table definitions
let $liSelector = $('ul li');

$('#overlay').hide();
$('#modal').hide();

let theHTML = '';

//Requests the information from the randomuser server
$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function(data) {
        for(let i = 0; i < data.results.length; i ++){
            theHTML += `<div class='image'>`;
            theHTML += `<img src='${data.results[i].picture.large}' />`
            theHTML += `</div>`;
            theHTML += `<div class='info'>`;
            theHTML += `<h4>${data.results[i].name.first} ${data.results[i].name.last}</h4>`;
            theHTML += `<p>${data.results[i].email}</p>`;
            theHTML += `<p>${data.results[i].location.city}</p></div>`;
            theHTML += `<div class='hidden'>`;
            theHTML += `<p>${data.results[i].phone}</p>`;
            theHTML += `<p>${data.results[i].location.street}, ${data.results[i].location.state} ${data.results[i].location.postcode}</p>`;
            theHTML += `<p>Birthday: ${data.results[i].dob}</p>`;
            theHTML += `</div>`;
            $($liSelector[i]).html(theHTML);
            $('.hidden').hide();
            theHTML = '';
        }
    }
});

//Finds the appropriate top and left values
//to center the modal on the screen
let thetop = Math.max($(window).height() - $('#modal').outerHeight(), 0) / 2;
let theleft = Math.max($(window).width() - $('#modal').outerWidth(), 0) / 2;

//Places the modal in the middle of the screen
$('#modal').css('top', thetop + $(window).scrollTop());
$('#modal').css('left', theleft + $(window).scrollLeft());

//The X for exiting the modal
let $theX = ('<h1>X</h1>');

//Select content div and append the X
let $contentDiv = $('.content');
$contentDiv.append($theX);

$('.box').on('click',function(event){
    let $theImage = $(event.target).children('.image');
    console.log($theImage);
    

    // $('#overlay').show();
    // $('#modal').show();
});


    