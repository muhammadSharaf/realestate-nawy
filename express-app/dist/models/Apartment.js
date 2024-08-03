"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../utils/database"));
const Apartment = database_1.default.define('apartment', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    beds: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    baths: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    timestamps: true
});
exports.default = Apartment;
//# sourceMappingURL=Apartment.js.map