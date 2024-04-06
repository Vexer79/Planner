require("dotenv").config();

const mongoDB = require("mongodb");
const MongoDBClient = mongoDB.MongoClient;
const mongoDbUrl = process.env.MONGOLAB_URI;

let _db;

const ConnectionToMongoDB = (callback) => {
    MongoDBClient.connect(mongoDbUrl)
        .then((client) => {
            console.log("Connected to MongoDB!");
            _db = client.db("Planner");
            callback();
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found!";
};

exports.ConnectionToMongoDB = ConnectionToMongoDB;
exports.getDb = getDb;
