// const {MongoClient, ServerApiVersion} = require('mongodb')
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log("Database terkoneksi")
})

// const connectDB = async () => {
//     try {
//     }catch (err) {
//         console.log(err)
//         process.exit(1)
//     }
// }

// connectDB()

const usersSchema = new mongoose.Schema({
    nama: String,
    email: String,
    password: String
})

const userCrud = mongoose.model("tb_users", usersSchema, 'tb_users')

const tambahUser = async (userdata, callback) => {
    try {
        let cekData = await userCrud.find({email: userdata.email})
        cekData = cekData.length ? cekData[0] : false

        if(!cekData) {
            const data = new userCrud(userdata)
            await data.save()
            callback({status: true})
        }else {
            callback({
                status: false,
                msg: "Email sudah digunakan"
            })
        }
    }catch (err) {
        console.log(err)
    }
}

const findBy = async ({email, password=null}, callback) => {
    try {
        let data = await userCrud.find({email, password})
        callback({
            status: data.length ? true : false,
            data,
            msg: data.length ? '' : "Username atau password yang anda masukan salah"
        })
    }catch (err) {
        console.log(err)
    }
}

module.exports = {userCrud: {tambahUser, findBy}}
































// const client = new MongoClient(process.env.MONGO_URI, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//     //   await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         await client.close()
//     }
// }

// run().catch(console.dir)