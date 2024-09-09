const mongoose = require("mongoose");

const connectDb = async () =>{
  try{
await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser : true,
  useUnifiedTopology : true,
});
console.log(`MONGO DB Connected`);
  }catch(err)
  {
console.log(`Error : ${err.message}`);
process.exit(1);
  }
}

module.exports = connectDb;

// const mongoose = require('mongoose');

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(`Error: ${err.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDb;
