import Sequelize from 'sequelize';

// Set the correct environment variables or hard-code the URL
const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
