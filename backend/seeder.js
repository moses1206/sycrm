import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"

import users from "./data/users.js"
import products from "./data/products.js"
import syfProductData from "./data/syfProductData.js"
import syfOrderData from "./data/syfOrderData.js"

import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import Syforder from "./models/syfOrderModel.js"
import Syfproduct from "./models/syfProductModel.js"

import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Syforder.deleteMany()
    await Syfproduct.deleteMany()

    const createdUser = await User.insertMany(users)

    const adminUser = createdUser[0]._id

    const sample_Products = products.map((product) => {
      return { ...product, user: adminUser }
    })

    const sample_syfOrderData = syfOrderData.map((order) => {
      return { ...order, user: adminUser }
    })

    await Product.insertMany(sample_Products)
    await Syfproduct.insertMany(syfProductData)
    await Syforder.insertMany(sample_syfOrderData)

    console.log("Data Imported!!".green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log("Data Destroyed!!".red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}

// 사용법
// node backend/seede -d
