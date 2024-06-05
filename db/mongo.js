import mongoose from "mongoose";

const mongoDB = 'mongodb+srv://admin:V7kfW38ZLPrPBwme@cluster0.a8jtcji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

main().catch(err => console.log(err))

async function main() {
  await mongoose.connect(mongoDB)
}