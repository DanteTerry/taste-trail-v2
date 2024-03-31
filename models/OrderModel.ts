import { Schema, model, models } from "mongoose";

// Define schema for orders
const orderSchema = new Schema(
  {
    orderId: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to User model if available
      required: true,
    },
    paymentInfo: {
      id: {
        type: String,
        required: true,
      },
      amountPaid: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
    },
    orderItems: [
      {
        menuData: {
          type: Schema.Types.ObjectId,
          ref: "MenuItem",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        images: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    shippinginfo: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      pinCode: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true },
);

const Order = models.Order || model("Order", orderSchema);

export default Order;
