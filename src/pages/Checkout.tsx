import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

// Zod validation schema
const checkoutSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, "Invalid phone number format"),
  address: z.string()
    .trim()
    .min(1, "Address is required")
    .max(200, "Address must be less than 200 characters"),
  zip: z.string()
    .trim()
    .min(1, "ZIP code is required")
    .regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code format (e.g., 10001 or 10001-1234)"),
  city: z.string()
    .trim()
    .min(1, "City is required")
    .max(100, "City must be less than 100 characters"),
  country: z.string()
    .trim()
    .min(1, "Country is required")
    .max(100, "Country must be less than 100 characters"),
  paymentMethod: z.enum(["emoney", "cod"]),
  emoneyNumber: z.string().optional(),
  emoneyPin: z.string().optional(),
}).refine((data) => {
  if (data.paymentMethod === "emoney") {
    return data.emoneyNumber && data.emoneyNumber.trim().length > 0;
  }
  return true;
}, {
  message: "e-Money Number is required",
  path: ["emoneyNumber"],
}).refine((data) => {
  if (data.paymentMethod === "emoney") {
    return data.emoneyPin && data.emoneyPin.trim().length >= 4;
  }
  return true;
}, {
  message: "e-Money PIN must be at least 4 digits",
  path: ["emoneyPin"],
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const createOrder = useMutation(api.orders.createOrder);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "emoney",
    },
  });

  const paymentMethod = watch("paymentMethod");

  if (items.length === 0) {
    return <Navigate to="/" />;
  }

  const shipping = 50;
  const vat = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shipping;

  const onSubmit = async (data: CheckoutFormData) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Create order in Convex database
      const orderId = await createOrder({
        customerName: data.name,
        customerEmail: data.email,
        customerPhone: data.phone,
        shippingAddress: data.address,
        shippingZip: data.zip,
        shippingCity: data.city,
        shippingCountry: data.country,
        paymentMethod: data.paymentMethod,
        paymentDetails: data.paymentMethod === "emoney" ? {
          emoneyNumber: data.emoneyNumber,
          emoneyPin: data.emoneyPin,
        } : undefined,
        items: items,
        subtotal: totalPrice,
        shipping: shipping,
        vat: vat,
        grandTotal: grandTotal,
      });
      
      // Trigger email sending (fire and forget - don't block on email)
      fetch(`${import.meta.env.VITE_CONVEX_URL}/http/sendOrderConfirmation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      }).catch(err => {
        console.error("Email trigger failed (non-blocking):", err);
      });
      
      toast({
        title: "Order placed successfully!",
        description: "Redirecting to confirmation page...",
      });
      
      // Navigate to confirmation page with order ID
      setTimeout(() => {
        navigate("/order-confirmation", { state: { orderId } });
      }, 500);
      
    } catch (error) {
      console.error("Order creation failed:", error);
      toast({
        title: "Order failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      <main className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            to="/"
            className="inline-block text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            Go Back
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
            <div>
              <div className="bg-background rounded-lg p-6 md:p-12">
                <h1 className="text-3xl font-bold mb-8 tracking-wider">
                  CHECKOUT
                </h1>

                <form id="checkout-form" className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
                  {/* Billing Details */}
                  <div>
                    <h2 className="text-primary text-sm font-bold mb-6 tracking-wider">
                      BILLING DETAILS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className={errors.name ? "text-destructive" : ""}>
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Alexei Ward"
                          className="mt-2"
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          disabled={isSubmitting}
                          {...register("name")}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-destructive text-sm mt-1" role="alert">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="alexei@mail.com"
                          className="mt-2"
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          disabled={isSubmitting}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-destructive text-sm mt-1" role="alert">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className={errors.phone ? "text-destructive" : ""}>
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+1 202-555-0136"
                          className="mt-2"
                          aria-invalid={errors.phone ? "true" : "false"}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          disabled={isSubmitting}
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-destructive text-sm mt-1" role="alert">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div>
                    <h2 className="text-primary text-sm font-bold mb-6 tracking-wider">
                      SHIPPING INFO
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="address" className={errors.address ? "text-destructive" : ""}>
                          Address
                        </Label>
                        <Input
                          id="address"
                          placeholder="1137 Williams Avenue"
                          className="mt-2"
                          aria-invalid={errors.address ? "true" : "false"}
                          aria-describedby={errors.address ? "address-error" : undefined}
                          disabled={isSubmitting}
                          {...register("address")}
                        />
                        {errors.address && (
                          <p id="address-error" className="text-destructive text-sm mt-1" role="alert">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="zip" className={errors.zip ? "text-destructive" : ""}>
                            ZIP Code
                          </Label>
                          <Input
                            id="zip"
                            placeholder="10001"
                            className="mt-2"
                            aria-invalid={errors.zip ? "true" : "false"}
                            aria-describedby={errors.zip ? "zip-error" : undefined}
                            disabled={isSubmitting}
                            {...register("zip")}
                          />
                          {errors.zip && (
                            <p id="zip-error" className="text-destructive text-sm mt-1" role="alert">
                              {errors.zip.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="city" className={errors.city ? "text-destructive" : ""}>
                            City
                          </Label>
                          <Input
                            id="city"
                            placeholder="New York"
                            className="mt-2"
                            aria-invalid={errors.city ? "true" : "false"}
                            aria-describedby={errors.city ? "city-error" : undefined}
                            disabled={isSubmitting}
                            {...register("city")}
                          />
                          {errors.city && (
                            <p id="city-error" className="text-destructive text-sm mt-1" role="alert">
                              {errors.city.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="country" className={errors.country ? "text-destructive" : ""}>
                          Country
                        </Label>
                        <Input
                          id="country"
                          placeholder="United States"
                          className="mt-2"
                          aria-invalid={errors.country ? "true" : "false"}
                          aria-describedby={errors.country ? "country-error" : undefined}
                          disabled={isSubmitting}
                          {...register("country")}
                        />
                        {errors.country && (
                          <p id="country-error" className="text-destructive text-sm mt-1" role="alert">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h2 className="text-primary text-sm font-bold mb-6 tracking-wider">
                      PAYMENT DETAILS
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <Label className="mb-4 block">Payment Method</Label>
                        <input type="hidden" {...register("paymentMethod")} />
                        <RadioGroup
                          value={paymentMethod}
                          onValueChange={(value) => {
                            register("paymentMethod").onChange({
                              target: { value, name: "paymentMethod" }
                            });
                          }}
                          className="space-y-3"
                          disabled={isSubmitting}
                        >
                          <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-primary">
                            <RadioGroupItem value="emoney" id="emoney" />
                            <Label htmlFor="emoney" className="cursor-pointer flex-1">
                              e-Money
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-primary">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod" className="cursor-pointer flex-1">
                              Cash on Delivery
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "emoney" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="emoney-number" className={errors.emoneyNumber ? "text-destructive" : ""}>
                              e-Money Number
                            </Label>
                            <Input
                              id="emoney-number"
                              placeholder="238521993"
                              className="mt-2"
                              aria-invalid={errors.emoneyNumber ? "true" : "false"}
                              aria-describedby={errors.emoneyNumber ? "emoney-number-error" : undefined}
                              disabled={isSubmitting}
                              {...register("emoneyNumber")}
                            />
                            {errors.emoneyNumber && (
                              <p id="emoney-number-error" className="text-destructive text-sm mt-1" role="alert">
                                {errors.emoneyNumber.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="emoney-pin" className={errors.emoneyPin ? "text-destructive" : ""}>
                              e-Money PIN
                            </Label>
                            <Input
                              id="emoney-pin"
                              placeholder="6891"
                              type="password"
                              className="mt-2"
                              aria-invalid={errors.emoneyPin ? "true" : "false"}
                              aria-describedby={errors.emoneyPin ? "emoney-pin-error" : undefined}
                              disabled={isSubmitting}
                              {...register("emoneyPin")}
                            />
                            {errors.emoneyPin && (
                              <p id="emoney-pin-error" className="text-destructive text-sm mt-1" role="alert">
                                {errors.emoneyPin.message}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {paymentMethod === "cod" && (
                        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                          <svg className="w-12 h-12 flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42 36V10H6v26h36z" fill="currentColor" opacity="0.15"/>
                            <path d="M24 28c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="currentColor"/>
                          </svg>
                          <p className="text-muted-foreground text-sm">
                            The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="bg-background rounded-lg p-6 md:p-8 lg:sticky lg:top-8">
                <h2 className="text-lg font-bold mb-8 tracking-wider">
                  SUMMARY
                </h2>

                <div className="space-y-6 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-secondary rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-muted-foreground font-bold">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">TOTAL</span>
                    <span className="font-bold">
                      $ {totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">SHIPPING</span>
                    <span className="font-bold">$ {shipping}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">VAT (INCLUDED)</span>
                    <span className="font-bold">$ {vat.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-muted-foreground">GRAND TOTAL</span>
                  <span className="text-primary font-bold text-lg">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>

                <Button 
                  type="submit" 
                  form="checkout-form"
                  className="w-full tracking-wider" 
                  size="lg"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      PROCESSING...
                    </>
                  ) : (
                    "CONTINUE & PAY"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
