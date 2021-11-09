class Food {
    #value = 'empty';
    #no = 0;
    constructor(value, no){
        
        this.#no = no;
        if(value) this.#value = value;
    }

    get() {
        console.log('this.value', this.#value);
        console.log('this.no', this.#no);
    }
}

class FoodGroup extends Food{
    constructor(value, no) {
        super(value, no);
    }
    log() {
        this.get()
    }
}

module.exports = {
    Food,
    FoodGroup
}