export default class ИalanceController {
    constructor(operationsService) {
        'ngInject';
        this.operationsService = operationsService;
    }
    $onInit() {
        this.init();
    }

    init(){
        var balance = {
            'all': 0,
            'наличные': 0,
            'депозит': 0,
            'кредитка': 0
        }
        this.operationsService.getOperationRequest().then(operations => {
            operations.forEach(operation => {
                balance['all'] += parseInt(operation.amount);
                balance[operation.payment_method] += parseInt(operation.amount);
            })
            this.balance = balance['all'];
            this.cash = balance['наличные'];
            this.deposit = balance['депозит'];
            this.credit = balance['кредитка'];
            
        });
    }

    showLastAddedOperation(){
        this.$showOperation = true;
    }
}