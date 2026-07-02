import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductCatalog from "./components/ProductCatalog";
import InteractiveMap from "./components/InteractiveMap";
import QuoteBuilder from "./components/QuoteBuilder";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BasketDrawer from "./components/BasketDrawer";
import FloatingWidgets from "./components/FloatingWidgets";
import { Product, BasketItem } from "./types";

export default function App() {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Add product to inquiry list
  const addToBasket = (product: Product, quantity: number = 1, unit: string) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, unit }];
    });
    // Auto-open drawer for feedback
    setIsBasketOpen(true);
  };

  // Remove product from inquiry list
  const removeFromBasket = (productId: string) => {
    setBasket((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Adjust product quantities
  const updateBasketQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromBasket(productId);
      return;
    }
    setBasket((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear basket
  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative text-slate-800 antialiased overflow-x-hidden">
      
      {/* Navigation Layer */}
      <Header
        basket={basket}
        setIsBasketOpen={setIsBasketOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Contents */}
      <main>
        {/* Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* About Segment */}
        <About />

        {/* Product Showcase */}
        <ProductCatalog
          basket={basket}
          addToBasket={addToBasket}
          updateBasketQuantity={updateBasketQuantity}
        />

        {/* Global Logistics Corridors Map */}
        <InteractiveMap />

        {/* Support Knowledgebase FAQ Accordions */}
        <FAQ />

        {/* Sourcing Quote Generator & Inquiry Logs */}
        <QuoteBuilder
          basket={basket}
          clearBasket={clearBasket}
          removeFromBasket={removeFromBasket}
          updateBasketQuantity={updateBasketQuantity}
          scrollToSection={scrollToSection}
        />
      </main>

      {/* Corporate footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Right-Aligned Side Basket Panel */}
      <BasketDrawer
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
        basket={basket}
        removeFromBasket={removeFromBasket}
        updateBasketQuantity={updateBasketQuantity}
        scrollToSection={scrollToSection}
      />

      {/* Floating Call & WhatsApp Triggers */}
      <FloatingWidgets />

    </div>
  );
}
