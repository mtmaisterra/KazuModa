import Subcategory from '../models/subcategory.model.js';

export const getSubcategories = async (req, res) => {
  
    try {
        const subcategories = await Subcategory.find();
        res.status(200).json(subcategories);
    } catch (error) {
        res.status(400).json({ message: 'Subcategorias no encontradas.'  });
    }
  
};


export const getSubcategoryById = async (req, res) => {
    
    try {
        const subcategory = await Subcategory.findById(req.params.id);
        res.status(200).json(subcategory);
    } catch (error) {
        res.status(400).json({ message: 'Subcategoria no encontrada.'  });
    }
  
};

export const createSubcategory = async (req, res) => {

    try {
        const newSubcategory = new Subcategory(req.body);
        const subcategorySaved = await newSubcategory.save();
        res.status(200).json(subcategorySaved);
    } catch (error) {
        res.status(400).json({ message: 'Subcategoria no creada.'  });
    }

};

export const updateSubcategory = async (req, res) => {

    try {
        const updateSubcategory = await Subcategory.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json(updateSubcategory);
    } catch (error) {
        res.status(400).json({ message: 'Subcategoria no actualizada.'  });
    }

};

export const deleteSubcategory = async (req, res) => {
    
    try {
        const deleteSubcategory = await Subcategory.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Subcategoria eliminada.' });
    } catch (error) {
        res.status(400).json({ message: 'Subcategoria no eliminada.'  });
    }
};