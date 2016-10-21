class operations {
  constructor($http) {
    'ngInject'
    this.$http = $http;
    this.URL = 'http://localhost:3000';
    
  }
  
  list(folder) {
    return this.$http.get(`${this.URL}/${folder}`).then(result => result.data);
  };

  add(operation) {
    return this.$http.post(`${this.URL}/operations`, operation).then(result => result.data);
  };

 update(data) {
    return this.$http.put(`${this.URL}/operations/${data._id}`, data).then(result => result.data);
  };

  save(requestType, data) {
    if (requestType === 'put') {
      return this.update(data);
    }
    return this.add(data);
  }


  remove(id) {
    return this.$http.delete(`${this.URL}/operations/${id}`);
  };

  detail(id) {
    return this.$http.get(`${this.URL}/operations/${id}`).then(result => result.data);
  };
  
  customDate(datestring) {
    var date = new Date(Date.parse(datestring));
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturda']

    var stringDate = `${date.getDate()} ${months[date.getMonth()]}`;
    return { day_month: stringDate, dayOfWeek: days[date.getDay()] };
  }

  getOperationRequest(type) {
    if (typeof type === 'undefined') {
      return this.list('operations');
    } else if (typeof type === 'string') {
      return this.list(`operations?type=${type}`);
    } else if (typeof type === 'object') {
      return this.list(`operations?from=${type.from}&to=${type.to}`);
    }
  }

}

export default operations;