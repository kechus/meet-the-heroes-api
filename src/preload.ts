import sequelize from './loaders/sequelize';

export async function preload() {
	try {
        await sequelize.authenticate();
        console.log('Connection to db successfully.');

	} catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}
