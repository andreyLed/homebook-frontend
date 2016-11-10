class User {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.URL = 'http://localhost:3000/users';
  }

  initData() {
    return this.$http.get(`${this.URL}`).then(result => result.data);
  }

}

export default User;
