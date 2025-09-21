import express from "express";
import mongoose from "mongoose";
import createMongoMemoryServer from "./db/db-mongo.js";
import productSchema from "./models/products.js";

const server = express();

server.use(express.urlencoded());
server.use(express.json());

server.get("/", (_, res) => {
    res.send("Alive");
});

async function startServer() {
    try {
        const mongod = await createMongoMemoryServer();
        const uri = mongod.getUri();
        
        await mongoose.connect(uri);
        console.log("Conected");
        
        server.listen(3000, () => {
            console.log("Server alive on http://localhost:3000/ ");
        });
    } catch (error) {
        console.log("Failed to start server:", error);
    }
}


server.get("/products", async (_, res) => {
      try{
        const products = await productSchema.find();
        res.json(products);
      } catch (error) {
        res.send("Find Failed", error)
      }
})

startServer();