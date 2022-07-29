import mongoose from 'mongoose';
const db_URI = "mongodb://localhost:27017/test_database";

const connection = () => {
    mongoose.connect(db_URI)
    .then(() => {
        console.log("successful database connection");
    })
    .catch(error => {
        console.error(error);
    });
};

export default connection;

