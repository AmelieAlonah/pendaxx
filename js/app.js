const app = {
    init : function(){
        let button = document.querySelector('#button') ;
        button.addEventListener('click', game.handleCheckLetter) ;

        let seasonSelect = document.querySelector('#season');
        seasonSelect.addEventListener('change', game.choiceSeason) ;
        
    },

   
}

document.addEventListener("DOMContentLoaded", app.init) ;