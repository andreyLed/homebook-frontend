export default class OperationFormController {
  constructor(operationFormService, operationsService, storage) {
    'ngInject';
    this.operationFormService = operationFormService;
    this.operationsService = operationsService;
    this.storage = storage;
    this.inputs = {};
  }

  $onInit() {
    this.operationFormService.accounts().then((accounts) => {
      this.accounts = accounts;
      this.storage.accounts = accounts;
      this.inputs.account = this.accounts[0];
    });
    this.operationFormService.categories().then((categories) => {
      this.categories = categories;
      this.storage.categories = categories;
      this.inputs.category = this.categories[0];
    });
    this.inputs.type = 'доход';
    this.inputs.date = new Date();
  }

  send() {
    const newOperation = this.getNewOperation();
    const requestType = this.storage.requestType;
    this.operationsService.save(requestType, newOperation).then(() => {
      this.operationSend();
      // this.clearForm();
    });
  }

  cancel() {
    this.operationCancel();
    // this.clearForm();
  }

  getNewOperation() {
    return {
      _id: this.inputs._id,
      type: this.inputs.type,
      account: this.inputs.account.name,
      amount: this.inputs.amount,
      category: this.inputs.category.name,
      date: this.inputs.date,
      comment: this.inputs.comment
    };
  }
}
