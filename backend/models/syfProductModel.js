import mongoose from "mongoose"

const syfproductSchema = mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    product_category: {
      type: String,
      required: true,
    },
    product_sapcode: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_image: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Syfproduct = mongoose.model("Syfproduct", syfproductSchema)

export default Syfproduct
