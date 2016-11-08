export default class OperationsController {
  constructor(operationsService, storage) {
    'ngInject';
    this.operationsService = operationsService;
    this.storage = storage;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.getOperations();
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
    console.log(operation);
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

