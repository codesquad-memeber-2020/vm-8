import Observable from "./observable.js";

class VMModel extends Observable {
    constructor() {
        super();
        this.getProducts();
        this.selectorMoney = this.getSelectorMoney();
    }
    getSelectorMoney() {
        const selectorMoney = document.querySelector('.vm-selector-money').innerText.replace(/[^0-9]/g, "");
        return selectorMoney;
    }
    getProducts() {
        fetch('vmProduct.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                console.log("json"+JSON.stringify(jsonData));
            });
    }
}

export default VMModel;

const pmodel = new VMModel();
console.log(pmodel.selectorMoney);