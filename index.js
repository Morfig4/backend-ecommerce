import express from "express";
import mongoose from "mongoose";
import createMongoMemoryServer from "./db/db-mongo.js";
import productSchema from "./models/products.js";

const server = express();

server.use(express.urlencoded());
server.use(express.json());

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

server.get("/", (_, res) => {
    res.send("Alive");
});

server.post("/products", async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = new productSchema({ name, price });
        await product.save();
        res.status(201).json(product);
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
})

server.get("/products", async (_, res) => {
    try {
        const products = await productSchema.find();
        res.json(products);
    } catch (e) {
         res.status(400).json({ erro: e.message });
    }
})

server.put("/products/:id", async (req, res) => {
    try {
        const updateProducts = await productSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateProducts)
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
})

server.delete("/products/:id", async (req, res) => {
    try {
        const deleteProducts = await productSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted' }, deleteProducts);
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
})

startServer();