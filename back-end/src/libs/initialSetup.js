import RoleModel from '../models/role.model.js';
import SizeModel from '../models/size.model.js';
import CategoryModel from '../models/category.model.js';
import SubcategoryModel from '../models/subcategory.model.js';
import data from '../libs/data.json' assert { type: 'json' };

export const createRoles = async () => {
  try {
    const count = await RoleModel.countDocuments().exec();

    if (count === 0) {
      await RoleModel.insertMany(data.roles.map((name) => ({ name })));
      console.log('Initial setup (create roles) => OK');
    }
  } catch (error) {
    console.error(error);
  }
};

export const createSizes = async () => {
  try {
    const count = await SizeModel.countDocuments().exec();

    if (count === 0) {
      await SizeModel.insertMany(data.sizes.map((sizename) => ({ sizename })));
      console.log('Initial setup (create sizes) => OK');
    }
  } catch (error) {
    console.error(error);
  }
};

export const createCategories = async () => {
  try {
    const count = await CategoryModel.countDocuments().exec();

    if (count === 0) {
      for (const categoryData of data.categories) {
        const { categoryname, subcategories } = categoryData;
        const category = new CategoryModel({ categoryname });
        const subcategoryIds = [];

        for (const subcategoryName of subcategories) {
          let existingSubcategory = await SubcategoryModel.findOne({
            subcategoryname: subcategoryName,
          });

          if (!existingSubcategory) {
            existingSubcategory = await SubcategoryModel.create({
              subcategoryname: subcategoryName,
            });
          }

          subcategoryIds.push(existingSubcategory._id);
        }

        category.subcategories = subcategoryIds;
        await category.save();
      }

      console.log('Initial setup (create categories) => OK');
    }
  } catch (error) {
    console.error(error);
  }
};

export const createSubcategories = async () => {
  try {
    const count = await SubcategoryModel.countDocuments().exec();

    if (count === 0) {
      for (const subcategoryName of data.subcategories) {
        await SubcategoryModel.create({ subcategoryname: subcategoryName });
      }

      console.log('Initial setup (create subcategories) => OK');
    }
  } catch (error) {
    console.error(error);
  }
};

export const initialData = async () => {
  try {
    await createRoles();
    await createSizes();
    await createCategories();
    await createSubcategories();
    console.log('Initial setup completed successfully');
  } catch (error) {
    console.error('Error during initial setup:', error);
  }
};
