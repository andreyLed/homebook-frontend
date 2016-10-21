class book {
  constructor($http) {
    'ngInject'
    this.$http = $http;
    this.URL = 'http://localhost:3000';
    
  }
  setToLocalStorage(key, value){
    localStorage.setItem(key, value)
  }
  
  getFromLocalStorage(key)
  {
    return localStorage.getItem(key)
  }
  
  removeFromLocalStorage(key)
  {
    localStorage.removeItem(key)
  }
}

export default book;