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
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: 'add__value',
        inputBtn: 'add__btn'
    }
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.description).value,
                value: document.querySelector(DOMstrings.value).value
            }
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }
})();

// GLOBAL APP CONTROLLER
var AppController = (function(budgetCtrl, UICtrl){
 
    var ctrlAddItem = function(){
        // 1. Get input

        var input  = UIController.getInput();
        console.log(input);
        // 2. Add item to budget
        // 3. Add item to UI
        // Display the budget on UI
    }
    var DOMstrings = getDOMstrings();

    document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 || event.which === 13)
           ctrlAddItem();
    });

})(budgetController, UIController);
