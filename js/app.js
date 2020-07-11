const app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 129345,
                title: '瓜地馬拉(中焙) 500g',
                category: '咖啡豆',
                orginalPrice: 600,
                sellingPrice: 560,
                enabled: true,
                img: 'https://picsum.photos/200/300',
                intro: '一種濃醇香的咖啡',
                info: '一種又濃又香的咖啡',
                unit: '杯'
            }
        ],
        cacheProduct: {
            id: '',
            title: '',
            category: '',
            orginalPrice: 0,
            sellingPrice: 0,
            enabled: false,
            img: '',
            intro: '',
            info: '',
            unit: ''
        }
    },
    methods: {
        addProduct() {
            const timestamp = new Date().getTime();
            this.cacheProduct.id = timestamp;
            this.products.push(this.cacheProduct);
            this.cacheProduct = {
                id: '',
                title: '',
                category: '',
                orginalPrice: 0,
                sellingPrice: 0,
                enabled: false,
                img: '',
                intro: '',
                info: '',
                unit: ''
            }
        },
        getProductData(id) {
            this.cacheProduct = this.products.filter(item => item.id === id)[0];
        },
        editProduct(id) {
            let index = this.products.findIndex(item => item.id === id);
            this.products[index] = this.cacheProduct;
            this.cacheProduct = {
                id: '',
                title: '',
                category: '',
                orginalPrice: 0,
                sellingPrice: 0,
                enabled: false,
                img: '',
                intro: '',
                info: '',
                unit: ''
            }
        },
        deleteProduct(id) {
            console.log(id);
            const index = this.products.findIndex(item => item.id === id);
            this.products.splice(index, 1);
        }
    }
})