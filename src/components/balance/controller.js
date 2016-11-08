export default class BalanceController {
  constructor(operationsService) {
    'ngInject';
    this.operationsService = operationsService;
  }
  $onInit() {
    this.init();
  }

  init() {
    const balance = {
      all: 0,
      наличные: 0,
      депозит: 0,
      кредитка: 0
    };
    this.operationsService.getOperationRequest().then((operations) => {
      operations.forEach((operation) => {
        balance.all += Number(operation.amount);
        balance[operation.payment_method] += Number(operation.amount);
      });
      this.balance = balance.all;
      this.cash = balance['наличные'];
      this.deposit = balance['депозит'];
      this.credit = balance['кредитка'];
    });
  }
}
