import { DataTypes, Model } from 'sequelize';
import db from '../clients/db.sequelize.js';

import Articles from './Articles.js';
import Tags from './Tags.js';

class ArticleTags extends Model {}

ArticleTags.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    sequelize: db,
    modelName: 'articleTags',
    tableName: 'article_tags',
    timestamps: true
});

Articles.belongsToMany(Tags, {
    through: ArticleTags,
    as: 'tags',
    foreignKey: 'articleId',
    otherKey: 'tagId'
});

Tags.belongsToMany(Articles, {
    through: ArticleTags,
    as: 'articles',
    foreignKey: 'tagId',
    otherKey: 'articleId'
});

export default ArticleTags;