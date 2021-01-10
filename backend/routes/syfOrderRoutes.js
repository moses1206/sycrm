import express from "express"
import asyncHandler from "express-async-handler"
import Syforder from "../models/syfOrderModel.js"

const router = express.Router()

//  @desc     Fetch all Products
//  @route    Get   api/products
//  @access   Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const syforders = await Syforder.find({})
    res.json(syforders)
  })
)

//  @desc     Fetch single Product
//  @route    Get   api/products/:id
//  @access   Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const syforder = await Syforder.findById(req.params.id)
    if (syforder) {
      res.json(syforder)
    } else {
      res.status(404).json({ message: "제품을 찾을 수 없습니다. !!" })
    }
  })
)

export default router
