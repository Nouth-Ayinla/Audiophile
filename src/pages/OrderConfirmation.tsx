import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Check, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";

const OrderConfirmation = () => {
  const location = useLocation();
  const { clearCart } = useCart();
  const orderId = location.state?.orderId as Id<"orders"> | undefined;
  
  // Fetch order from Convex
  const order = useQuery(
    api.orders.getOrder,
    orderId ? { orderId } : "skip"
  );

  useEffect(() => {
    // Clear cart after successfully loading order
    if (order) {
      clearCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  // Show loading state while fetching order
  if (orderId && order === undefined) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading order details...</p>
        </div>
      </div>
    );
  }

  // Redirect if no order ID or order not found
  if (!orderId || order === null) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      <main className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-lg md:max-w-2xl">
          <div className="bg-background rounded-lg p-6 sm:p-8 md:p-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mb-6 sm:mb-8">
              <Check className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-wider leading-tight">
              THANK YOU
              <br />
              FOR YOUR ORDER
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
              You will receive an email confirmation shortly.
            </p>

            <div className="rounded-lg overflow-hidden mb-6 sm:mb-8">
              <div className="bg-secondary p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-background rounded overflow-hidden flex-shrink-0">
                    <img
                      src={order.items[0].image}
                      alt={order.items[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base truncate">{order.items[0].name}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      $ {order.items[0].price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-muted-foreground font-bold text-sm sm:text-base">
                    x{order.items[0].quantity}
                  </span>
                </div>

                {order.items.length > 1 && (
                  <div className="border-t border-border pt-3 sm:pt-4">
                    <p className="text-muted-foreground text-xs sm:text-sm text-center">
                      and {order.items.length - 1} other item(s)
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-foreground text-background p-4 sm:p-6 flex flex-col justify-center">
                <p className="text-background/70 mb-1 sm:mb-2 text-xs sm:text-sm tracking-wider">GRAND TOTAL</p>
                <p className="text-xl sm:text-2xl font-bold">
                  $ {order.grandTotal.toLocaleString()}
                </p>
              </div>
            </div>

            <Link to="/" className="block">
              <Button className="w-full tracking-wider text-sm sm:text-base" size="lg">
                BACK TO HOME
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
