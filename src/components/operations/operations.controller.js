export default class OperationsController {
    constructor(operationsService, bookService) {
        'ngInject';
        this.operationsService = operationsService;
        this.bookService = bookService;
    }
    $onInit() {
        this.init();
    }

    init() {
        this.getOperations();
    }

    getOperations(type){
        this.operationsService.getOperationRequest(type).then(operations => {
            this.operations = operations;
            this.operations.forEach(operation => operation.customDate = this.operationsService.customDate(operation.date))
            delete this.$edit;
        });
    }
    
    addOperation() {
        this.bookService.setToLocalStorage('requestType','post');
        this.$edit = true;
    };

    editOperation(operation){
        this.bookService.setToLocalStorage('requestType','put');
        operation.date = new Date(operation.date);
        this.item = operation;
        this.item.submitButton = 'Обновить'
        this.$edit = true;
    }

    removeOperation(id) {
        this.operationsService.remove(id).then(this.init.bind(this));
    };
    
    update(){
        this.init();
    }
    

}

