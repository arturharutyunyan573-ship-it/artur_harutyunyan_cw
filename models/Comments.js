import { DataTypes, Model } from 'sequelize';
import db from '../clients/db.sequelize.js';

import Users from './Users.js';
import Articles from './Articles.js';

class Comments extends Model {}

Comments.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'comments',
    tableName: 'comments',
    timestamps: true
});

// User -> Articles
Users.hasMany(Articles, {
    as: 'articles',
    foreignKey: 'authorId'
});

Articles.belongsTo(Users, {
    as: 'author',
    foreignKey: 'authorId'
});

// Article -> Comments
Articles.hasMany(Comments, {
    as: 'comments',
    foreignKey: 'articleId'
});

Comments.belongsTo(Articles, {
    as: 'article',
    foreignKey: 'articleId'
});

// User -> Comments
Users.hasMany(Comments, {
    as: 'comments',
    foreignKey: 'userId'
});

Comments.belongsTo(Users, {
    as: 'author',
    foreignKey: 'userId'
});

export default Comments;