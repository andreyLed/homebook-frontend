class User {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.URL = 'http://localhost:3000/users';
  }

  initData(isOperations) {
    return this.$http.get(`${this.URL}?operations=${isOperations}`).then(result => result.data);
  }
}

export default User;
