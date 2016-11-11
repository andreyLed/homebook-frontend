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
    this.user.initData('false').then((userData) => {
      console.log(userData);
      this.accounts = userData.accounts;
      this.categories = userData.categories;
      this.balance = userData.balance;
      this.balance.all = userData.balance.reduce((sum, curr) => sum + curr.amount, 0);
      this.storage.accounts = userData.accounts;
      this.storage.categories = userData.categories;
      this.storage.accountsDefault = userData.accounts[0];
      this.storage.categoriesDefault = userData.categories[0];
    });
  }
}
