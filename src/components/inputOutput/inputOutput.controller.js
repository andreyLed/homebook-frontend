export default class InputOutputController {
    constructor(inputOutputService, bookService, operationsService) {
        'ngInject';
        this.inputOutputService = inputOutputService;
        this.bookService = bookService;
        this.operationsService = operationsService;
    }
    $onInit() {
       this.inputOutputService.categories().then(categories => this.categories = categories);
       this.inputOutputService.accounts().then(accounts => this.accounts = accounts);
    }

    send(){
        const newOperation = {
            _id: this.item._id,
            type: this.item.type, 
            payment_method: this.item.payment_method,
            amount: this.item.amount,
            category: this.item.category,
            date: this.item.date,
            comment: this.item.comment
        }
        var requestType = this.bookService.getFromLocalStorage('requestType');
        console.log(newOperation);

        this.operationsService.save(requestType, newOperation).then((operation) => {
            this.bookService.setToLocalStorage('operation', operation);
            this.update();
            Object.keys(this.item).forEach(prop => this.item[prop] = '');
        });

        
    }
}