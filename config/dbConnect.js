import mongoose from "mongoose";

export const mongoConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log(`unable to connect to database : ${err}`);
    });
};

// another way hanling promise
// export const mongoConnect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("database connected successfully");
//   } catch (error) {
//     console.log(`unable to connect to database : ${error}`);
//   }
// };
