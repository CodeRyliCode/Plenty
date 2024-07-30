// mongodbPassword = v0mMcXRKsRIELn6Y

// mongodb connection code =
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://rylidavis94:v0mMcXRKsRIELn6Y@plenty.ggjduyv.mongodb.net/?retryWrites=true&w=majority&appName=Plenty";
//
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
//
// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

import express, {Express} from "express"
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
const mongoURI: string =  "mongodb+srv://rylidavis94:v0mMcXRKsRIELn6Y@plenty.ggjduyv.mongodb.net/?retryWrites=true&w=majority&appName=Plenty";
mongoose.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB")).catch((err) => console.error("Failed to Connect to Mongodb:", err))

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})