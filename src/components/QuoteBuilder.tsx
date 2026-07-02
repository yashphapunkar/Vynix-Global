import { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Trash2, CheckCircle2, History, Anchor, Briefcase, FileText } from "lucide-react";
import { BasketItem, SavedInquiry, InquiryForm } from "../types";

interface QuoteBuilderProps {
  basket: BasketItem[];
  clearBasket: () => void;
  removeFromBasket: (productId: string) => void;
  updateBasketQuantity: (productId: string, quantity: number) => void;
  scrollToSection: (id: string) => void;
}

export default function QuoteBuilder({
  basket,
  clearBasket,
  removeFromBasket,
  updateBasketQuantity,
  scrollToSection
}: QuoteBuilderProps) {
  const [formData, setFormData] = useState<InquiryForm>({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    category: "all",
    requirementDetail: "",
    items: []
  });

  const [savedInquiries, setSavedInquiries] = useState<SavedInquiry[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "history">("form");

  // Load saved inquiries on mount
  useEffect(() => {
    const saved = localStorage.getItem("vynix_inquiries");
    if (saved) {
      try {
        setSavedInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved inquiries");
      }
    }
  }, []);

  // Update form items when basket changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, items: basket }));
  }, [basket]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateDisplacement = () => {
    const totalItemsCount = basket.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItemsCount === 0) return { type: "N/A", desc: "No items selected." };
    if (totalItemsCount < 5) return { type: "LCL (Less than Container Load)", desc: "Consolidated freight recommended." };
    return { type: "FCL (Full Container Load)", desc: "Meets baseline FCL threshold." };
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.requirementDetail) {
      alert("Please fill in all required fields (Full Name, Email, and Requirement Details).");
      return;
    }

    const newInquiry: SavedInquiry = {
      id: "RFQ-" + Math.floor(100000 + Math.random() * 900000),
      fullName: formData.fullName,
      email: formData.email,
      companyName: formData.companyName || "Private Trader",
      phoneNumber: formData.phoneNumber || "Not Provided",
      category: formData.category,
      requirementDetail: formData.requirementDetail,
      items: [...formData.items],
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      status: "pending"
    };

    const updatedInquiries = [newInquiry, ...savedInquiries];
    setSavedInquiries(updatedInquiries);
    localStorage.setItem("vynix_inquiries", JSON.stringify(updatedInquiries));

    // Reset Form and Basket
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      category: "all",
      requirementDetail: "",
      items: []
    });
    clearBasket();
    setIsSuccess(true);

    // Auto-scroll to top of section or success block
    setTimeout(() => {
      scrollToSection("contact");
    }, 100);
  };

  const deleteSavedInquiry = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const filtered = savedInquiries.filter((inq) => inq.id !== id);
    setSavedInquiries(filtered);
    localStorage.setItem("vynix_inquiries", JSON.stringify(filtered));
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-8">
            <span className="text-teal-600 font-extrabold tracking-widest text-xs uppercase block mb-3 font-mono">
              Secure Maritime Procurement
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
              Request a Custom Trade Quote
            </h2>
            <p className="text-slate-500 font-light text-sm sm:text-base mt-4 max-w-2xl">
              We coordinate tailored export terms (FOB, CIF, CFR) complete with packing manifests. Fill in the commercial request details or edit your active cargo selections below.
            </p>
          </div>

          {/* Form / History Tabs */}
          <div className="md:col-span-4 flex md:justify-end gap-2" id="quote-section-tabs">
            <button
              onClick={() => {
                setIsSuccess(false);
                setActiveTab("form");
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "form"
                  ? "bg-teal-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <FileText className="h-4 w-4" />
                <span>RFQs Builder</span>
              </span>
            </button>

            {savedInquiries.length > 0 && (
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setActiveTab("history");
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === "history"
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
                id="inquiry-journal-tab"
              >
                <span className="flex items-center gap-1.5">
                  <History className="h-4 w-4" />
                  <span>RFQ Journal ({savedInquiries.length})</span>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Commercial Contacts */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-slate-950 mb-4">Vynix Trade Offices</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Connect directly with our regional trade officers or arrange an in-person audit at our corporate headquarters in Indore.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Corporate Headquarters</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Indore, Madhya Pradesh, India - 452009
                  </p>
                  <p className="text-[10px] text-teal-600 font-medium mt-1">All India Sourcing & Logistics</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Corporate Hotline</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    Export Desk: +91 91799 95482
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Electronic Correspondence</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    General Inquiries: info@vynixglobal.com
                  </p>
                </div>
              </div>
            </div>

            {/* Ocean shipping info card */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Anchor className="h-4 w-4 text-teal-600" />
                <span>Shipping Dispatch Protocol</span>
              </h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                We manage customs brokerage, draft phytosanitary clearance documents, and secure bills of lading via major alliances (MSC, Maersk, CMA CGM) originating from Mumbai (JNPT).
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Form / History Panels */}
          <div className="lg:col-span-8 bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/30">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-6"
                  id="inquiry-success-message"
                >
                  <div className="h-16 w-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-slate-950">
                      Inquiry Logged Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-lg mx-auto">
                      Thank you. Your Request for Quote (RFQ) has been logged securely. Our commercial coordination team is analyzing logistics routes and will contact you via email with an official quotation sheet within 6 business hours.
                    </p>
                  </div>
                  <div className="pt-4 flex justify-center gap-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-lg uppercase tracking-wider cursor-pointer"
                    >
                      Log Another Request
                    </button>
                    {savedInquiries.length > 0 && (
                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setActiveTab("history");
                        }}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-lg uppercase tracking-wider cursor-pointer"
                      >
                        View RFQ Journal
                      </button>
                    )}
                  </div>
                </motion.div>
              ) : activeTab === "form" ? (
                <motion.form
                  key="rfq-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  id="rfq-form-element"
                >
                  {/* Basic Credentials */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 rounded-lg p-3 text-xs font-semibold focus:outline-teal-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="buyer@globalcorp.com"
                        className="w-full bg-white border border-slate-200 rounded-lg p-3 text-xs font-semibold focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Imports LLC"
                        className="w-full bg-white border border-slate-200 rounded-lg p-3 text-xs font-semibold focus:outline-teal-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-white border border-slate-200 rounded-lg p-3 text-xs font-semibold focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  {/* Category Trigger */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      Primary Sourcing Segment
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-xs font-semibold focus:outline-teal-600 cursor-pointer"
                    >
                      <option value="all">Consolidated Portfolio Request</option>
                      <option value="automotive">Automotive Components Only</option>
                      <option value="coffee">Premium Indian Coffee Only</option>
                    </select>
                  </div>

                  {/* Active Cargo manifest if items added in catalog */}
                  {basket.length > 0 ? (
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 space-y-4" id="cargo-manifest-basket">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                          <Anchor className="h-4 w-4 text-teal-600" />
                          <span>Active Cargo Manifest</span>
                        </span>
                        <button
                          type="button"
                          onClick={clearBasket}
                          className="text-[10px] text-red-500 hover:text-red-600 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Clear All
                        </button>
                      </div>

                      <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto">
                        {basket.map((item) => (
                          <div key={item.product.id} className="py-2.5 flex justify-between items-center gap-4 text-xs">
                            <div className="flex-grow">
                              <h5 className="font-bold text-slate-800">{item.product.name}</h5>
                              <p className="text-[10px] text-slate-400 font-mono">HS Code: {item.product.hsCode}</p>
                            </div>

                            {/* Vol */}
                            <div className="flex items-center gap-1 text-slate-600">
                              <span className="font-mono font-bold text-slate-900 bg-slate-50 px-2 py-1 rounded-md border border-slate-200/50">
                                {item.quantity} {item.unit}
                              </span>
                            </div>

                            {/* Trash */}
                            <button
                              type="button"
                              onClick={() => removeFromBasket(item.product.id)}
                              className="p-1.5 text-slate-400 hover:text-red-500 rounded-md hover:bg-red-50 cursor-pointer"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Cargo capacity guide */}
                      <div className="bg-teal-50/50 p-3 rounded-lg border border-teal-100 text-[11px] text-teal-800 flex justify-between items-center">
                        <div className="space-y-0.5">
                          <span className="font-bold">Shipping Assessment:</span>
                          <p className="text-slate-500 text-[10px] leading-none">{calculateDisplacement().desc}</p>
                        </div>
                        <span className="font-bold bg-white px-2 py-1 rounded-sm border border-teal-100">{calculateDisplacement().type}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white p-5 rounded-xl border border-slate-100 text-center text-slate-400 py-6" id="empty-cargo-message">
                      <Briefcase className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs font-light">
                        No individual items are added. You can add specific components from the <button type="button" onClick={() => scrollToSection("products")} className="text-teal-600 font-bold hover:underline cursor-pointer">Product Portfolio</button> or write your requirements directly below.
                      </p>
                    </div>
                  )}

                  {/* Requirements details text area */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      Required Volumes, Targets, and Shipping Incoterms <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="requirementDetail"
                      required
                      value={formData.requirementDetail}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Please specify desired volumes (e.g., MT, Container size), packaging specifications, preferred delivery port, target incoterms (FOB, CFR, CIF), and compliance certificates needed."
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-xs font-semibold focus:outline-teal-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold tracking-widest text-xs uppercase py-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-teal-600/10 active:scale-99"
                    id="submit-rfq-btn"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Formal Inquiry</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="rfq-history"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  id="inquiry-history-container"
                >
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <History className="h-5 w-5 text-teal-600" />
                      <span>Request For Quote (RFQ) Journal</span>
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400">This logs inquiries stored locally in your browser cache.</p>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
                    {savedInquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs space-y-3 relative group hover:border-teal-500/20 transition-all"
                        id={`journal-card-${inq.id}`}
                      >
                        {/* Header metadata */}
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-xs text-teal-600 bg-teal-50 px-2 py-0.5 rounded-sm">
                                {inq.id}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">{inq.date}</span>
                            </div>
                            <h4 className="font-bold text-sm text-slate-800 mt-1">{inq.companyName}</h4>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Pending visual indicator */}
                            <span className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 border border-yellow-100 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-ping" />
                              <span>{inq.status}</span>
                            </span>

                            {/* Delete inquiry from cache */}
                            <button
                              onClick={(e) => deleteSavedInquiry(inq.id, e)}
                              className="p-1.5 text-slate-300 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors cursor-pointer"
                              title="Delete RFQ entry"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Cargo manifest summary */}
                        {inq.items.length > 0 && (
                          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11px] space-y-1">
                            <span className="font-extrabold uppercase tracking-widest text-[9px] text-slate-400 block mb-1">
                              Shipping Manifest Summary:
                            </span>
                            <div className="divide-y divide-slate-200/50 max-h-24 overflow-y-auto">
                              {inq.items.map((item, id) => (
                                <div key={id} className="py-1 flex justify-between text-slate-700">
                                  <span className="font-medium truncate">{item.product.name}</span>
                                  <span className="font-mono font-bold text-slate-900 shrink-0">
                                    {item.quantity} {item.unit}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Requirements snippet */}
                        <div className="space-y-1 text-xs">
                          <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider block">Requirements:</span>
                          <p className="text-slate-600 font-light leading-relaxed whitespace-pre-wrap">{inq.requirementDetail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
