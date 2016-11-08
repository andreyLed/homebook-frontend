export default class HomePanelController {
  constructor(storage) {
    'ngInject';
    this.storage = storage;
    this.storage.requestType = 'POST';
  }

  // clearForm() {
  //   this.inputs.type = 'доход';
  //   this.inputs.date = new Date();
  //   // this.inputs.account = this.accounts[0];
  //   // this.inputs.category = this.categories[0];
  //   this.inputs.amount = '';
  //   this.inputs.comment = '';
  // }
}
