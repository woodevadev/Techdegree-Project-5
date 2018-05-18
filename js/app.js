//Selects the table definitions
let $liSelector = $('ul li');

//The X for exiting the modal
let $theX = ('<h1>X</h1><br>');
$('#content').append($theX);

$('#overlay').hide();
$('#modal').hide();

let theHTML = '';

//Requests the information from the randomuser server
//and places it in the lis
$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function(data) {
        for(let i = 0; i < data.results.length; i ++){
            theHTML += `<img src='${data.results[i].picture.large}' />`
            theHTML += `<h4>${data.results[i].name.first} ${data.results[i].name.last}</h4>`;
            theHTML += `<p>${data.results[i].email}</p>`;
            theHTML += `<p>${data.results[i].location.city}</p>`;
            theHTML += `<p class="hidden">${data.results[i].phone}</p>`;
            theHTML += `<p class="hidden">${data.results[i].location.street}, ${data.results[i].location.state} ${data.results[i].location.postcode}</p>`;
            theHTML += `<p class="hidden">Birthday: ${data.results[i].dob}</p>`;
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

$('.boxes').on('click', function(event){
    //This if block selects the list item
    //regardless of where you click on it
    if($(event.target).attr('itis') == 'box'){
        var $liList = $(event.target);
    }else if($(event.target).attr('itis') != 'box'){
        var $liList = $(event.target).parent();
    }

    //This selects the list items children
    $items = $liList.children();

    //Initialize the html
    let $modalHTML = '';

    //This is the HTML for inside the content div
    $modalHTML += `<img src="${$($items[0]).attr('src')}" />`;
    $modalHTML += `<h4>${$($items[1]).text()}</h4>`;
    $modalHTML += `<p>${$($items[2]).text()}</p>`;
    $modalHTML += `<p>${$($items[3]).text()}</p>`;
    $modalHTML += `<hr>`;
    $modalHTML += `<p>${$($items[4]).text()}</p>`;
    $modalHTML += `<p>${$($items[5]).text()}</p>`;
    $modalHTML += `<p>${$($items[6]).text()}</p>`;

    //Append html to the content div
    $('#content').append($modalHTML);

    //Show the modal and the overlay
    $('#overlay').show();
    $('#modal').show();
});

//This block hides the modal and resets its content
//When you click the x in the top right corner
$('h1').on('click', function(){
    $('#overlay').hide();
    $('#modal').hide();
    
    $('#content img').remove();
    $('#content h4').remove();
    $('#content p').remove();
    $('#content hr').remove();
});


    