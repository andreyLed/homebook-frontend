export default class OperationsController {
  constructor(operationsService, storage) {
    'ngInject';
    this.operationsService = operationsService;
    this.storage = storage;
    this.storage.requesType = 'PUT';
    console.log(this.storage);
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
    this.$edit = true;
  }

  editOperation(operation) {
    operation.date = new Date(operation.date);
    this.item = operation;
    this.item.submitButton = 'Обновить';
    this.$edit = true;
  }

  removeOperation(id) {
    this.operationsService.remove(id).then(this.init.bind(this));
  }

  update() {
    this.init();
  }
}

