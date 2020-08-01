// BUDGET CONTROLLER
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

// BUDGET UI CONTROLLER
var UIController = (function(){

})();

// GLOBAL APP CONTROLLER
var AppController = (function(budgetCtrl, UICtrl){
 
    var ctrlAddItem = function(){
        // 1. Get input
        // 2. Add item to budget
        // 3. Add item to UI
        // Display the budget on UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 || event.which === 13)
           ctrlAddItem();
    });
})(budgetController, UIController);
