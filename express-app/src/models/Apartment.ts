import {DataTypes, Model, Sequelize} from "sequelize";
import sequelize from "../utils/database";

export interface ApartmentDetails {
    id?: number;
    location: string;
    image?: string;
    beds: number;
    baths: number;
    totalPrice: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const Apartment = sequelize.define<Model<ApartmentDetails>>('apartment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    beds: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    baths: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.MEDIUMINT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true
});

export default Apartment;
