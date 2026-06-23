import { DataTypes, Model } from 'sequelize';
import db from '../clients/db.sequelize.js';

class Tags extends Model {}

Tags.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'tags',
    tableName: 'tags',
    timestamps: true
});

export default Tags;