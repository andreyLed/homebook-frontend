export default class OperationFormController {
  constructor(operationFormService, operationsService) {
    'ngInject';
    this.inputOutputService = operationFormService;
    this.operationsService = operationsService;
  }
  $onInit() {
    this.inputOutputService.categories().then((categories) => {
      this.categories = categories;
    });
    this.inputOutputService.accounts().then((accounts) => {
      this.accounts = accounts;
    });
  }

  send() {
    const newOperation = {
      _id: this.item._id,
      type: this.item.type,
      payment_method: this.item.payment_method,
      amount: this.item.amount,
      category: this.item.category,
      date: this.item.date,
      comment: this.item.comment
    };
    const requestType = this.bookService.getFromLocalStorage('requestType');

    this.operationsService.save(requestType, newOperation).then((operation) => {
      this.bookService.setToLocalStorage('operation', operation);
      this.update();
      Object.keys(this.item).forEach((prop) => {
        this.item[prop] = '';
      });
    });
  }
}
