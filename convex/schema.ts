import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // Customer Information
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    
    // Shipping Information
    shippingAddress: v.string(),
    shippingZip: v.string(),
    shippingCity: v.string(),
    shippingCountry: v.string(),
    
    // Payment Information
    paymentMethod: v.union(v.literal("emoney"), v.literal("cod")),
    paymentDetails: v.optional(v.object({
      emoneyNumber: v.optional(v.string()),
      emoneyPin: v.optional(v.string()),
    })),
    
    // Order Items
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number(),
      image: v.string(),
    })),
    
    // Pricing
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
    
    // Order Status
    status: v.string(), // "pending", "confirmed", "shipped", "delivered"
    
    // Metadata
    createdAt: v.number(), // timestamp
  })
    .index("by_email", ["customerEmail"])
    .index("by_created_at", ["createdAt"]),
});
