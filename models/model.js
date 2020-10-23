'use string';

//mongo.js in demo

class ProductsCollection {
  constructor(model) {
   this.model = model;
  }

  read(id) {
    //get
    if(id){
      return this.model.find({_id: `${id}`})
    } 
    else { 
      return this.model.find({})
    }
  }

  create(obj) {
    //post
    const product = new this.model(obj);
    return product.save();

  }

  update(obj, id) {
    //put 
      return this.model.findByIdAndUpdate(id, obj, {new:true})

  }

  delete(id) {
    //delete
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = ProductsCollection;
