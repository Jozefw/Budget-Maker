var budgetController = (function() {

})();


var UIController = (function(){
    DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputvalue: '.add__value',
        addBtn:'.add__btn'
    };
        return{
            getInput:function(){
               return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector('.add__value').value
               };
            },
            getDOMStrings: function(){
                return DOMStrings;
            }
        }

})();



var AppController = (function(bdgCtrl,UICtrl){
    var DOM = UICtrl.getDOMStrings();

    var addItem =function(){

    // 1. get input field value
    var input = UICtrl.getInput();
   
    // 2. add item to budget controller


    // 3. add item to UI controller 
    // 4. calculate budget
    // 5. Update view with new budget
    };

    document.querySelector(DOM.addBtn).addEventListener('click',addItem);

    document.addEventListener('keypress',function(event){
        if(event.keycode === 13 || event.which === 13){
           addItem();
        }
    });

})(budgetController,UIController);