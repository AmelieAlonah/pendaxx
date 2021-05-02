const app = {

    init : function(){
        let button = document.querySelector('#button') ;
        button.addEventListener('click', game.handleCheckLetter) ;

        let seasonSelect = document.querySelector('#season');
        seasonSelect.addEventListener('change', game.choiceSeason) ;

        // Ceci est pour le changement de theme :
        let themes = document.querySelector('#themes') ;
        themes.addEventListener('change', app.handleThemeSelect ) ;
        
    },

    //Changement de thème de couleur
    //TODO ajouter cookies :p
    handleThemeSelect : function( event ) {

        let valueTheme = document.querySelector('#themes').value ;
        document.querySelector('body').className = valueTheme ;
        let themeBody = document.querySelector('body') ;
        themeBody.classList.add( valueTheme ) ;
    },

   
}

document.addEventListener("DOMContentLoaded", app.init) ;