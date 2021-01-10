import express from "express"
import asyncHandler from "express-async-handler"
import SyfProduct from "../models/syfProductModel.js"

const router = express.Router()

//  @desc     Fetch all Products
//  @route    Get   api/products
//  @access   Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const syfproducts = await SyfProduct.find({})
    res.json(syfproducts)
  })
)

//  @desc     Fetch single Product
//  @route    Get   api/products/:id
//  @access   Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const syfproduct = await SyfProduct.findById(req.params.id)
    if (syfproduct) {
      res.json(syfproduct)
    } else {
      res.status(404).json({ message: "제품을 찾을 수 없습니다. !!" })
    }
  })
)

export default router
