// const {MongoClient, ServerApiVersion} = require('mongodb')
require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Database terkoneksi`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}


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

module.exports = {userCrud: {tambahUser, findBy}, connectDB}
































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