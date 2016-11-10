export default class HomePanelController {
  constructor(user, operationsService, storage) {
    'ngInject';
    this.user = user;
    this.operationsService = operationsService;
    this.storage = storage;
    this.storage.requestType = 'POST';
  }

  $onInit() {
    this.init();
  }

  init() {
    this.user.initData().then((userData) => {
      this.accounts = userData.accounts;
      this.categories = userData.categories;
      this.balance = userData.balance;
      this.balance.all = userData.balance.reduce((sum, curr) => sum + curr.amount, 0);
      this.storage.accounts = userData.accounts;
      this.storage.categories = userData.categories;
    });
  }
}
