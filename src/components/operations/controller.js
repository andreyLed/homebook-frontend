export default class OperationsController {
  constructor(operationsService, user, storage) {
    'ngInject';
    this.operationsService = operationsService;
    this.user = user;
    this.storage = storage;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.user.initData('true').then((userData) => {
      console.log(userData);
      this.accounts = userData.accounts;
      this.categories = userData.categories;
      this.operations = userData.operations;
      this.storage.accounts = userData.accounts;
      this.storage.categories = userData.categories;
      this.operations.forEach((operation) => {
        operation.date = new Date(operation.date);
      });
    });
  }

  getOperations(type) {
    this.operationsService.getOperationRequest(type).then((operations) => {
      this.operations = operations;
      this.operations.forEach((operation) => {
        operation.date = new Date(operation.date);
      });
      delete this.$edit;
    });
  }

  addOperation() {
    this.storage.requestType = 'POST';
    this.$edit = true;
  }

  editOperation(operation) {
    this.storage.requestType = 'PUT';
    this.inputData = this.operationsService.normaliseOperation(operation);
    this.$edit = true;
  }

  removeOperation(id) {
    this.operationsService.remove(id).then(this.init.bind(this));
  }

  update() {
    this.init();
  }
}

