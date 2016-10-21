class inputOutput {
  constructor($http) {
    'ngInject'
    this.$http = $http;
    this.URL = 'http://localhost:3000';
    
  }
  
  categories() {
    return this.$http.get(`${this.URL}/categories`).then(result => result.data);
  };

  accounts() {
    return this.$http.get(`${this.URL}/accounts`).then(result => result.data);
  };

  
}
export default inputOutput;