const mongoose = require('mongoose');

const exsubcategorySchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcategory'
    },
    excategory: {
        type: 'String',
        require: 'true'
    },
})

const tblName = mongoose.model('exsubcategory', exsubcategorySchema);

module.exports = tblName;