import {pool} from '../db.js';

export const getProducts = async (req, res) => {
    try{
        const response = await pool.query('SELECT * FROM products');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err.message);
    }
}

export const createProduct = async(req,res)=>{
    const {name, price,stock}= req.body;
    try{
        const response=await pool.query(
            'INSERT INTO products(name,price,stock) VALUES($1,$2,$3) RETURNING *',
            [name,price,stock]
        );
        console.log('Inserted product:', response.rows[0]);
        return res.status(201).json(response.rows[0])
    }catch(err){
        console.log(err.message)
    }
}