export default class OperationFormController {
  constructor(operationsService, storage) {
    'ngInject';
    this.operationsService = operationsService;
    this.storage = storage;
    this.inputs = {};
  }

  $onInit() {
    this.inputs.account = this.storage.accountsDefault;
    this.inputs.category = this.storage.categoriesDefault;
    this.inputs.type = 'доход';
    this.inputs.date = new Date();
  }

  send() {
    const newOperation = this.getNewOperation();
    const requestType = this.storage.requestType;
    this.operationsService.save(requestType, newOperation).then(() => {
      this.operationSend();
      this.clearForm();
    });
  }

  cancel() {
    this.operationCancel();
    this.clearForm();
  }

  clearForm() {
    this.inputs.type = 'доход';
    this.inputs.date = new Date();
    this.inputs.account = this.storage.accounts[0];
    this.inputs.category = this.storage.categories[0];
    this.inputs.amount = '';
    this.inputs.comment = '';
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
