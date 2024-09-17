import Market from '../models/market.model.js';
import Product from '../models/product.model.js';
import Category from '../models/category.model.js';
import Subcategory from '../models/subcategory.model.js';
import Size from '../models/size.model.js';

export const products = async (req, res) => {
  try {
    // Get pagination parameters from query string (default page number is 1 - 10)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;

    // Calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // Query for products with pagination
    const products = await Product.find().skip(skip).limit(limit);

    // Return products
    if (products.length === 0)
      return res.status(404).json({ message: 'No products found' });

    res.status(200).json(products);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const {
    market_id,
    category_name,
    subcategory_name,
    size_name,
    product_status,
    productname,
    description,
    image_url,
    color,
    brand,
    price,
    discount,
  } = req.body;

  try {
    // Convert category, subcategory, and size names to lowercase
    const lowerCaseCategoryName = category_name.toLowerCase();
    const lowerCaseSubcategoryName = subcategory_name.toLowerCase();
    const lowerCaseSizeName = size_name.toLowerCase();

    // Find the market and check if it exists
    const market = await Market.findById(market_id);
    if (!market) {
      return res.status(404).json({ error: 'Market not found' });
    }

    // Find the category by name
    const category = await Category.findOne({
      categoryname: lowerCaseCategoryName,
    });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const categoryId = category._id;

    // Find the subcategory by name
    const subcategory = await Subcategory.findOne({
      subcategoryname: lowerCaseSubcategoryName,
    });
    if (!subcategory) {
      return res.status(404).json({ error: 'Subcategory not found' });
    }
    const subcategoryId = subcategory._id;

    // Find the size by name
    const size = await Size.findOne({ sizename: lowerCaseSizeName });
    if (!size) {
      return res.status(404).json({ error: 'Size not found' });
    }
    const sizeId = size._id;

    // Create the product
    const product = new Product({
      market_id,
      category_id: categoryId,
      subcategory_id: subcategoryId,
      size_id: sizeId,
      product_status,
      productname,
      description,
      image_url,
      color,
      brand,
      price,
      discount,
    });

    await product.save();

    // Add the product ID to the market's products array
    market.products.push(product._id);
    await market.save();

    // Send the newly created product in the response
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProductById = async (req, res) => {
  const productId = req.params.productId;
  const {
    market_id,
    category_name,
    subcategory_name,
    size_name,
    product_status,
    productname,
    description,
    image_url,
    color,
    brand,
    price,
    discount,
  } = req.body;

  try {
    // Convert category, subcategory and size names to lowercase
    const lowerCaseCategoryName = category_name.toLowerCase();
    const lowerCaseSubcategoryName = subcategory_name.toLowerCase();
    const lowerCaseSizeName = size_name.toLowerCase();

    // Find the market and check if it exists
    const market = await Market.findById(market_id);
    if (!market) {
      return res.status(404).json({ error: 'Market not found' });
    }

    // Find the category by name
    const category = await Category.findOne({
      categoryname: lowerCaseCategoryName,
    });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const categoryId = category._id;

    // Find the subcategory by name
    const subcategory = await Subcategory.findOne({
      subcategoryname: lowerCaseSubcategoryName,
    });
    if (!subcategory) {
      return res.status(404).json({ error: 'Subcategory not found' });
    }
    const subcategoryId = subcategory._id;

    // Find the size by name
    const size = await Size.findOne({ sizename: lowerCaseSizeName });
    if (!size) {
      return res.status(404).json({ error: 'Size not found' });
    }
    const sizeId = size._id;

    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the product properties
    product.market_id = market_id;
    product.category_id = categoryId;
    product.subcategory_id = subcategoryId;
    product.size_id = sizeId;
    product.product_status = product_status;
    product.productname = productname;
    product.description = description;
    product.image_url = image_url;
    product.color = color;
    product.brand = brand;
    product.price = price;
    product.discount = discount;

    // Save the updated product
    await product.save();

    // Send the updated product in the response
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    // Find the product by ID
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.productId
    );

    if (!deletedProduct)
      return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Function to get the model based on the parameter
const getModelByParam = (param) => {
  switch (param) {
    case 'category':
      return Category;
    case 'subcategory':
      return Subcategory;
    case 'size':
      return Size;
    default:
      throw new Error('Model not found for parameter: ' + param);
  }
};

export const filterProducts = async (req, res) => {
  try {
    // Get pagination parameters from query string (default page number is 1 - 10)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    // Get filter parameters from query string
    const filterParams = req.query;

    // Construct filter object
    const filter = {};

    // Define mappings for parameters to model fields
    const paramMappings = {
      category: 'category_id',
      subcategory: 'subcategory_id',
      size: 'size_id',
      // Add more mappings as needed
    };

    // Iterate over filterParams and refine the filter object
    for (const [param, value] of Object.entries(filterParams)) {
      if (paramMappings[param]) {
        const modelField = paramMappings[param];
        // Find the corresponding document ID from the database
        const model = getModelByParam(param); // Implement this function to return the appropriate model
        const document = await model.findOne({ [`${param}name`]: value });

        // If the document is not found, throw an error
        if (!document) {
          throw new Error(`Invalid value "${value}" for parameter "${param}"`);
        }

        filter[modelField] = document._id;
      }
    }

    // Query for products with pagination and filter
    const products = await Product.find(filter).skip(skip).limit(limit);

    // Return products
    if (products.length === 0)
      return res.status(404).json({ message: 'No products found' });

    res.status(200).json(products);
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }
};
