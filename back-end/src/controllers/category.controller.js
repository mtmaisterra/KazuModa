import Category from '../models/category.model.js';

export const getCategories = async (req, res) => {
  
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ message: 'Categorias no encontradas.'  });
    }
  
};


export const getCategoryById = async (req, res) => {
    
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: 'Categoria no encontrada.'  });
    }
  
};

export const createCategory = async (req, res) => {

    try {
        const newCategory = new Category(req.body);
        const categorySaved = await newCategory.save();
        res.status(200).json(categorySaved);
    } catch (error) {
        res.status(400).json({ message: 'Categoria no creada.'  });
    }

};

export const updateCategory = async (req, res) => {

    try {
        const updateCategory = await Category.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json(updateCategory);
    } catch (error) {
        res.status(400).json({ message: 'Categoria no actualizada.'  });
    }

};

export const deleteCategory = async (req, res) => {
    
    try {
        const deleteCategory = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Categoria eliminada.' });
    } catch (error) {
        res.status(400).json({ message: 'Categoria no eliminada.'  });
    }
};