//Selects the table definitions
let $tableSelector = $('table td');

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
            $($tableSelector[i]).html(theHTML);
            $('.hidden').hide();
            theHTML = '';
        }
    }
});

function centerModal(){
    
}

$('td').on('click',function(event){
    
    
    $('#overlay').show();
    $('#modal').show();
});


    