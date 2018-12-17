$(document).ready(function(){

var ranNumGen = Math.floor((Math.random() * 100) + 1);
    $("#randomNumGen").html(ranNumGen);

var crysGen1 = Math.floor((Math.random() * 15) + 1);
var crysGen2 = Math.floor((Math.random() * 15) + 1);
var crysGen3 = Math.floor((Math.random() * 15) + 1);
var crysGen4 = Math.floor((Math.random() * 15) + 1);


    $("#blueQuartz").on("click", function(){
        console.log(crysGen1);
    });
    $("#pinkQuartz").on("click", function(){
        console.log(crysGen2);    
    });
    $("#crystalQuartz").on("click", function(){
        console.log(crysGen3);   
    });
    $("#tealQuartz").on("click", function(){
        console.log(crysGen4);       
    });

    function addCrystals(){
        totalScore = crysGen1 + crysGen2 + crysGen3 + crysGen4;
    };
    $("#score").text(addCrystals);
    if(totalScore <= ranNumGen){
        wins++;
    }
    if(totalScore > ranNumGen){
        losses++;
    }    
});
