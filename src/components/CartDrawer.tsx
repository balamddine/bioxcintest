import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout 
}: CartDrawerProps) => {
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
        className="fixed top-0 right-0 h-full w-full max-w-lg bg-editor-bg border-l border-editor-border z-[70] flex flex-col shadow-none"
      >
        <div className="p-10 border-b border-editor-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase opacity-40">Library / 01</span>
            <h2 className="font-serif text-3xl font-light italic">Shopping Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:opacity-50 transition-opacity">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 flex flex-col gap-10">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <span className="text-[10px] tracking-widest uppercase opacity-40">Your cart is currently empty</span>
              <Link 
                to="/shop"
                onClick={onClose}
                className="text-[10px] font-bold uppercase border-b border-editor-text pb-1 hover:opacity-50"
              >
                Return to Shop
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-8 group">
                <div className="w-32 h-40 bg-neutral-200 overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.2]" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[8px] uppercase tracking-widest opacity-40 mb-1 block">Ref_{item.id.slice(0, 5)}</span>
                      <h4 className="font-serif italic text-lg leading-tight">{item.name}</h4>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[9px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-end">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-lg font-light hover:opacity-50"
                      >
                        —
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-lg font-light hover:opacity-50"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-neutral-400 text-xs italic">{item.size}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-10 border-t border-editor-border flex flex-col gap-6">
            <div className="flex justify-between items-center text-3xl font-light font-serif pt-2">
              <span>Selected Items</span>
              <span className="tracking-tighter">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-editor-text text-white py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-90 transition-all mt-4"
            >
              Finalize Order
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};
