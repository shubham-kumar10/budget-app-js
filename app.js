var budgetController = (function(){
    var x = 23;
    var add = function(a){
        return x+a;
    }
    return {
        publicTest: function(b){
            console.log(add(b));
            return b;
        }
    }
})();

var UIController = (function(){

})();

var AppController = (function(budgetCtrl, UICtrl){
 var z = budgetCtrl.publicTest(5);
 return{
     anotherPublic: function(){
         console.log(z);
     }
 }
})(budgetController, UIController);
