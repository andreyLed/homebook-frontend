export default class HomePanelController {
    constructor(bookService) {
        'ngInject';
        this.bookService = bookService;
    }
    $onInit() {
        this.init();
    }

    init(){
        this.bookService.setToLocalStorage('requestType','post');
        
    }

    showLastAddedOperation(){
        this.$showOperation = true;
    }
}