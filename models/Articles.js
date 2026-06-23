import { DataTypes, Model } from 'sequelize';
import db from '../clients/db.sequelize.js';

class Articles extends Model {}

Articles.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cover: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'articles',
    tableName: 'articles',
    timestamps: true
});

export default Articles;