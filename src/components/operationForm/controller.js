export default class OperationFormController {
  constructor(operationFormService, operationsService) {
    'ngInject';
    this.operationFormService = operationFormService;
    this.operationsService = operationsService;
    this.inputs = {};
  }
  $onInit() {
    this.operationFormService.categories().then((categories) => {
      this.categories = categories;
      // this.form.category = this.categories[0].name;
    });
    this.operationFormService.accounts().then((accounts) => {
      this.accounts = accounts;
      // this.inputs.account = this.accounts[0].name;
    });
    this.init();
  }

  init() {
    this.inputs.type = 'доход';
    this.inputs.date = new Date();
  }

  send() {
    const newOperation = {
      _id: this.inputs._id,
      type: this.inputs.type,
      payment_method: this.inputs.account,
      amount: this.inputs.amount,
      category: this.inputs.category,
      date: this.inputs.date,
      comment: this.inputs.comment
    };
    const requestType = this.bookService.getFromLocalStorage('requestType');

    this.operationsService.save(requestType, newOperation).then((operation) => {
      this.bookService.setToLocalStorage('operation', operation);
      this.update();
      Object.keys(this.inputs).forEach((prop) => {
        this.inputs[prop] = '';
      });
    });
  }
}
