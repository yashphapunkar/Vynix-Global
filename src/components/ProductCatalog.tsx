import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, Plus, Minus, X, Info, Layers, Check, Shield } from "lucide-react";
import { Product, BasketItem } from "../types";
import { PRODUCTS } from "../data";

interface ProductCatalogProps {
  basket: BasketItem[];
  addToBasket: (product: Product, quantity: number, unit: string) => void;
  updateBasketQuantity: (productId: string, quantity: number) => void;
}

export default function ProductCatalog({
  basket,
  addToBasket,
  updateBasketQuantity
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "automotive" | "coffee">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(null);

  // Modal local state for quantity/unit configuration
  const [modalQty, setModalQty] = useState(1);
  const [modalUnit, setModalUnit] = useState("");

  const categories = [
    { label: "All Portfolio", value: "all" },
    { label: "Automotive Parts", value: "automotive" },
    { label: "Premium Coffee", value: "coffee" }
  ];

  // Set default units based on product category
  const getDefaultUnitForCategory = (category: string) => {
    if (category === "coffee") return "Metric Tons (MT)";
    if (category === "automotive") return "Units";
    return "Boxes";
  };

  const openDetailModal = (product: Product) => {
    setActiveDetailProduct(product);
    setModalQty(1);
    setModalUnit(getDefaultUnitForCategory(product.category));
  };

  const handleModalAdd = () => {
    if (activeDetailProduct) {
      addToBasket(activeDetailProduct, modalQty, modalUnit);
      setActiveDetailProduct(null);
    }
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.hsCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 font-extrabold tracking-widest text-xs uppercase block mb-3 font-mono">
            Vynix Export Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight mb-4">
            Featured Product Categories
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            We operate strict quality-assurance pipelines on our main product lines. Custom supply contracts and packaging solutions are available for international bulk buyers.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12" id="portfolio-controls">
          {/* Categories Tab Row */}
          <div className="flex items-center overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value as any)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/10"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
                id={`cat-tab-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative md:w-80">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 h-4.5 w-4.5" />
            <input
              type="text"
              placeholder="Search specifications, HS codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg py-2.5 pl-11 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-teal-600 focus:ring-1 focus:ring-teal-600"
              id="product-search-input"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const basketItem = basket.find((item) => item.product.id === product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/30 overflow-hidden flex flex-col justify-between group hover:border-teal-500/20 hover:shadow-2xl hover:shadow-teal-600/5 transition-all duration-300"
                  id={`product-card-${product.id}`}
                >
                  <div>
                    {/* Product Image Panel */}
                    <div className="relative h-56 bg-slate-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-80" />
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-teal-900/10 text-teal-700 font-serif font-semibold text-lg italic select-none">
                          {product.name}
                        </div>
                      )}
                      {/* HS Code Badge */}
                      <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-teal-300 font-mono text-[10px] font-bold px-3 py-1.5 rounded-md border border-slate-700">
                        HS: {product.hsCode}
                      </span>
                    </div>

                    {/* Product Metadata */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-sm">
                          {product.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          MOQ: {product.moq}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 border-t border-slate-50 flex items-center gap-3">
                    <button
                      onClick={() => openDetailModal(product)}
                      className="flex-grow bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] tracking-wider uppercase py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                      id={`btn-view-details-${product.id}`}
                    >
                      <Info className="h-4 w-4" />
                      <span>View Specifications</span>
                    </button>

                    {basketItem ? (
                      <div className="flex items-center bg-teal-50 border border-teal-100 rounded-lg p-0.5">
                        <button
                          onClick={() => updateBasketQuantity(product.id, basketItem.quantity - 1)}
                          className="p-2 text-teal-600 hover:bg-teal-100 rounded-md cursor-pointer"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-2 font-mono text-xs font-bold text-teal-800">
                          {basketItem.quantity}
                        </span>
                        <button
                          onClick={() => updateBasketQuantity(product.id, basketItem.quantity + 1)}
                          className="p-2 text-teal-600 hover:bg-teal-100 rounded-md cursor-pointer"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToBasket(product, 1, getDefaultUnitForCategory(product.category))}
                        className="bg-teal-50 hover:bg-teal-100 text-teal-600 border border-teal-100 hover:border-teal-200 p-3 rounded-lg transition-colors cursor-pointer"
                        title="Add to Quote Request"
                        id={`btn-quick-add-${product.id}`}
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white border border-slate-100 rounded-2xl">
              <p className="text-slate-400 font-medium">No products found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 text-xs font-bold text-teal-600 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeDetailProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailProduct(null)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
              id="product-detail-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDetailProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/60 text-white transition-colors cursor-pointer"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
                {/* Hero section of modal */}
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Left Column: Image */}
                  <div className="md:col-span-5 relative h-64 sm:h-auto rounded-xl overflow-hidden bg-slate-100">
                    {activeDetailProduct.image ? (
                      <img
                        src={activeDetailProduct.image}
                        alt={activeDetailProduct.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-48 sm:h-full flex items-center justify-center bg-teal-900/10 text-teal-700 font-serif font-semibold text-lg italic select-none">
                        {activeDetailProduct.name}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-700 text-teal-300 font-mono text-[10px] font-bold">
                      HS Code: {activeDetailProduct.hsCode}
                    </div>
                  </div>

                  {/* Right Column: Key Details */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-sm inline-block mb-3">
                        {activeDetailProduct.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif text-slate-950 font-bold mb-4">
                        {activeDetailProduct.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                        {activeDetailProduct.longDescription}
                      </p>
                    </div>

                    {/* Logistics Block */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/80 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400 font-medium">Minimum Order Quantity (MOQ):</span>
                        <span className="font-bold text-slate-900 font-mono">{activeDetailProduct.moq}</span>
                      </div>
                      <div className="flex justify-between text-xs pt-2 border-t border-slate-200/40">
                        <span className="text-slate-400 font-medium">Approved Export Ports:</span>
                        <span className="font-bold text-slate-900 text-right">Major Indian ICDs → JNPT Mumbai / Mundra Port</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specs and Packing Grid */}
                <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                  {/* Specifications */}
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-teal-600" />
                      <span>Technical Specifications</span>
                    </h4>
                    <div className="border border-slate-100 rounded-xl overflow-hidden divide-y divide-slate-100">
                      {Object.entries(activeDetailProduct.specifications).map(([key, val]) => (
                        <div key={key} className="grid grid-cols-5 text-xs p-3">
                          <span className="col-span-2 text-slate-400 font-medium">{key}</span>
                          <span className="col-span-3 text-slate-800 font-semibold">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ocean Packaging Standards */}
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-teal-600" />
                      <span>Maritime Packing Standards</span>
                    </h4>
                    <p className="text-xs text-slate-500 font-light mb-4">
                      Vynix Global implements advanced weather-proof packing protocols to shield cargo from high ocean moisture and transit vibration:
                    </p>
                    <div className="space-y-2">
                      {activeDetailProduct.packaging.map((pack, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <Check className="h-4 w-4 text-teal-600 shrink-0" />
                          <span className="font-medium">{pack}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quantity Customization & Quote Action */}
                <div className="bg-teal-50/50 p-6 rounded-xl border border-teal-100/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <span className="text-xs font-bold text-teal-800">Customize Inquiry Volume</span>
                    <p className="text-[11px] text-slate-500 leading-none">Choose desired target volume and packaging unit style.</p>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                    {/* Unit Style Select */}
                    <select
                      value={modalUnit}
                      onChange={(e) => setModalUnit(e.target.value)}
                      className="bg-white border border-slate-200 text-xs font-semibold text-slate-700 p-2.5 rounded-lg focus:outline-teal-600"
                    >
                      {activeDetailProduct.category === "coffee" ? (
                        <>
                          <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                          <option value="FCL Container (20ft)">FCL Container (20ft)</option>
                          <option value="Jute Bags (60kg)">Jute Bags (60kg)</option>
                        </>
                      ) : (
                        <>
                          <option value="Units">Units</option>
                          <option value="Boxes">Boxes</option>
                          <option value="Standard Sea Crates">Standard Sea Crates</option>
                        </>
                      )}
                    </select>

                    {/* Quantity Stepper */}
                    <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1">
                      <button
                        onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                        className="p-1.5 hover:bg-slate-50 rounded-md text-slate-600 cursor-pointer"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="px-4 font-mono text-xs font-bold text-slate-800">{modalQty}</span>
                      <button
                        onClick={() => setModalQty(modalQty + 1)}
                        className="p-1.5 hover:bg-slate-50 rounded-md text-slate-600 cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Add Button */}
                    <button
                      onClick={handleModalAdd}
                      className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer shadow-sm shadow-teal-600/10"
                      id="modal-add-to-basket-btn"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add To Inquiry List</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
