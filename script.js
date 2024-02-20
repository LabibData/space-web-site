const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')
const card = document.querySelector('.cards')
const icon = document.querySelector('.fa-sun')
const github = document.querySelector('.fa-github')
const chang = document.querySelector('.tst')


toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun'))
    {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        icon.style.color = '#f7dc0eeb';
        github.style.color = 'black';

        var more_details = document.querySelectorAll(".more-details");
        more_details.forEach(function(more) {
            more.style.color = 'black';
        });
    }
    else 
    {
        chang.style.background = '#5e5e5e';
        body.style.background = 'black';
        body.style.color = 'white';
        card.style.color = 'black';
        body.style.transition = '2s';
        icon.style.color = 'black';
        github.style.color = 'white';

        var cards = document.querySelectorAll(".project-card");
        cards.forEach(function(card) {
            card.style.borderBottom = "5px solid white";
        });

        var more_details = document.querySelectorAll(".more-details");
        more_details.forEach(function(more) {
            more.style.color = 'white';
        });

        var cards_fv = document.querySelectorAll(".project-card-fv");
        cards_fv.forEach(function(card) {
            card.style.borderBottom = "5px solid white";
        });

        var shads = document.querySelectorAll(".card");
        shads.forEach(function(shad) {
            shad.style.boxShadow = "rgba(171, 157, 157, 0.5) 3px 8px 18px"
        });

    }
})