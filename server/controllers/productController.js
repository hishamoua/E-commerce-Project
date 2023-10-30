const Product = require('../models/Product'); 


const CreateProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}


const GetAllPro =async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(500).send();
    }
}


const GetProById =async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findOne({ id: id });
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(500).send();
    }
}


const SearchPro =async (req, res) => {
    try {
    // Pagination setup
    const { page = 1, limit = 10, searchQuery } = req.query;
    const queryCondition = searchQuery 
        ? { product_name: new RegExp(searchQuery, 'i') } // 'i' makes it case insensitive
        : {};

    // Querying the database
    const products = await Product.find(queryCondition)
        .select('sku product_name price') // selecting only necessary fields
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

    res.status(200).json(products);
    } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    }
}


const UpdatePro = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['product_name', 'short_description', 'long_description', 'price', 'discount_price', 'options', 'active']; 
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const product = await Product.findOne({ id: req.params.id });

        if (!product) {
            return res.status(404).send();
        }

        updates.forEach((update) => product[update] = req.body[update]);
        await product.save();

        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}



const DeletePro = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ id: req.params.id  });

        if (!product) {
            res.status(404).send();
        }

        res.send(product);
    } catch (error) {
        res.status(500).send();
    }
}
