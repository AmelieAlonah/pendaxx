
const game = {

    chosenSeason : "saison1",
    chosenWord : "",
    //Recupere les tableaux des mots en français de chaque saison
    chosenLangage: tables.francais,

    handleCheckLetter : function( event ) {
        //? Récupération du champs dans l'input
        valueInput = document.querySelector('#input').value ;
        console.log(valueInput) ;


        //? Vide l'input après l'envoie de sa valeur
        valueInput = "";

    },

    choiceSeason : function ( event ) {
        let currentSeason = document.querySelector('#season').value;
        //let currentLangage = document.querySelector('#langage').value ;
        game.chosenSeason = game.chosenLangage[currentSeason];
        // for (let index=0; index<tables[game.chosenLangage].length; index++){
        //     if(currentSeason == tables.chosenLangage[index]){
        //         game.chosenSeason = tables.chosenLangage["saison" + index];
        //     }


            console.log(currentSeason) ;
            console.log(typeof(currentSeason)) ;
            console.log(game.chosenSeason);
        } ,


    choiceWord : function( event ) {

        //Prendre un mot au hasard sur la saison et la langue choisie,
        // chosenSeason => index de la saison prealablement recuperé,
        //? var item = items[Math.floor(Math.random()*items.length)];
        let tableLength =  game.chosenSeason.length ;
        console.log(tableLength) ;
        // tables.chosenLangage["saison" + game.chosenSeason][n]
        let n = Math.floor(Math.random()*tableLength) ;
        let word = game.chosenSeason[n];
        //let word = tableLength[Math.floor(Math.random()*tableLength.length)];
        console.log(word + " test") ;
        // on stocke dans la variable chosenWord le mot choisi au hasard
        chosenWord = word;
    },

}

// console.log(game.chosenLangage) ;