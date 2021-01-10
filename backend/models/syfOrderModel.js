import mongoose from "mongoose"

const syforderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        product_id: { type: Number, required: true },
        product_category: { type: String, required: true },
        product_sapcode: { type: String, required: true },
        product_name: { type: String, required: true },
        product_price: { type: Number, required: true },
        product_box_value: { type: Number, required: true },
        product_before_pr_value: { type: Number, required: true },
        product_after_pr_value: { type: Number, required: true },
        product_sale_value: { type: Number, required: true },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    shippingAddress: {
      type: String,
      default: "창고",
    },
    shippingDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Syforder = mongoose.model("Syforder", syforderSchema)

export default Syforder
