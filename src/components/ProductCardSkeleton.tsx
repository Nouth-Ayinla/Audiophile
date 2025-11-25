import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const ProductCardSkeleton = ({ reversed = false }: { reversed?: boolean }) => {
  return (
    <motion.div
      className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-full ${reversed ? "md:order-2" : ""}`}>
        <Skeleton className="w-full aspect-square rounded-lg" />
      </div>
      <div className={`w-full text-center md:text-left space-y-4 ${reversed ? "md:order-1" : ""}`}>
        <Skeleton className="h-4 w-32 mx-auto md:mx-0" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4 mx-auto md:mx-0" />
        <Skeleton className="h-12 w-40 mx-auto md:mx-0 mt-8" />
      </div>
    </motion.div>
  );
};

export default ProductCardSkeleton;
