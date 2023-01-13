import Product from "../models/ProductModel.js"

export const getProducts=async(req,res)=>{
    try{
        const products=await Product.find()
        res.json(products)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getProductById=async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const createProduct=async(req,res)=>{
    const item= new Product(req.body)
    try{
        const insertproduct=await item.save();
        res.status(201).json(insertproduct);
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}
export const updateProduct=async(req,res)=>{
    try{
        const updateproduct=await Product.updateOne(
        {_id:req.params.id},
        {$set:req.body})
        res.status(200).json(updateproduct);
    }catch(error){
        res.status(400).json({message:error.message})
    }
} 

export const deleteProduct = async (req,res)=>{
    try {
        const deleteproduct=await Product.deleteOne({_id:req.params.id});
        res.status(200).json(deleteproduct)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}