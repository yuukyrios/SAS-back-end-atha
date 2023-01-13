import mongoose from "mongoose";
const Products = mongoose.Schema({
    nameProduct:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true,
    },
    madeIn:{
        type:String,
        required:true,
    },
})

export default mongoose.model("Products",Products)