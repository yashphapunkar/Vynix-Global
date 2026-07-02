import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, Anchor, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import { BasketItem } from "../types";

interface BasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  basket: BasketItem[];
  removeFromBasket: (productId: string) => void;
  updateBasketQuantity: (productId: string, quantity: number) => void;
  scrollToSection: (id: string) => void;
}

export default function BasketDrawer({
  isOpen,
  onClose,
  basket,
  removeFromBasket,
  updateBasketQuantity,
  scrollToSection
}: BasketDrawerProps) {
  
  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutClick = () => {
    onClose();
    // Scroll directly to contact section where the inquiry form is
    scrollToSection("contact");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
              id="basket-side-drawer"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="h-5 w-5 text-teal-600" />
                  <h3 className="font-bold text-slate-900 text-base">Inquiry Basket</h3>
                  <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {totalItems} items
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 cursor-pointer transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {basket.length > 0 ? (
                  <div className="divide-y divide-slate-100">
                    {basket.map((item) => (
                      <div key={item.product.id} className="py-4 flex gap-4 first:pt-0">
                        {/* Img */}
                        <div className="h-16 w-16 bg-slate-50 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-xs text-slate-800 leading-snug line-clamp-1">
                              {item.product.name}
                            </h4>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">HS: {item.product.hsCode}</p>
                          </div>

                          {/* Stepper */}
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center bg-slate-100 rounded-md p-0.5">
                              <button
                                onClick={() => updateBasketQuantity(item.product.id, item.quantity - 1)}
                                className="p-1 hover:bg-slate-200 rounded-sm text-slate-600 cursor-pointer"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 font-mono text-xs font-bold text-slate-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateBasketQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 hover:bg-slate-200 rounded-sm text-slate-600 cursor-pointer"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-500">
                              {item.unit}
                            </span>
                          </div>
                        </div>

                        {/* Trash */}
                        <div className="flex flex-col justify-between items-end">
                          <button
                            onClick={() => removeFromBasket(item.product.id)}
                            className="p-1.5 text-slate-300 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors cursor-pointer"
                            title="Remove product"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-24 text-center space-y-4 text-slate-400" id="drawer-empty-state">
                    <ShoppingBag className="h-12 w-12 text-slate-200 mx-auto" />
                    <div>
                      <p className="font-bold text-slate-600 text-sm">Your Inquiry Basket is empty</p>
                      <p className="text-xs text-slate-500 font-light max-w-xs mx-auto mt-1 leading-relaxed">
                        Explore our automotive specs, premium coffee selections, or industrial products to configure custom ocean freight logs.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-xs font-bold text-teal-600 bg-teal-50 px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-100 transition-colors"
                    >
                      Browse Portfolio
                    </button>
                  </div>
                )}
              </div>

              {/* Footer */}
              {basket.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                  {/* Freight disclaimer */}
                  <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60 text-xs">
                    <Anchor className="h-4 w-4 text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block">Shipping Consolidation Log</span>
                      <p className="text-[10px] text-slate-500 leading-snug">
                        Item counts and custom target volumes will be pre-filled inside your RFQ document.
                      </p>
                    </div>
                  </div>

                  {/* Submit Trigger */}
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold tracking-wider text-xs uppercase py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md shadow-teal-600/10"
                    id="drawer-checkout-btn"
                  >
                    <span>Proceed to RFQ Document</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
