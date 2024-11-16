import React, { useState } from 'react';
import { Order } from '../types/Order';

interface OrderFormProps {
  onSubmit: (order: Omit<Order, 'id'>) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [items, setItems] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [tax, setTax] = useState('');
  const [shipping, setShipping] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: Omit<Order, 'id'> = {
      customerName,
      orderDate: new Date(orderDate),
      items: items.split(',').map(item => item.trim()),
      subtotal: parseFloat(subtotal),
      tax: parseFloat(tax),
      shipping: parseFloat(shipping),
      total: parseFloat(subtotal) + parseFloat(tax) + parseFloat(shipping)
    };
    onSubmit(newOrder);
    // Reset form
    setCustomerName('');
    setOrderDate('');
    setItems('');
    setSubtotal('');
    setTax('');
    setShipping('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Customer Name */}
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Customer Name <span className="text-red-500">*</span>
          </label>
          <input
            id="customerName"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
            placeholder="Enter customer name"
          />
        </div>

        {/* Order Date */}
        <div>
          <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Order Date <span className="text-red-500">*</span>
          </label>
          <input
            id="orderDate"
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
          />
        </div>
      </div>

      {/* Items */}
      <div>
        <label htmlFor="items" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Items (comma-separated) <span className="text-red-500">*</span>
        </label>
        <input
          id="items"
          type="text"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
          placeholder="Item 1, Item 2, Item 3"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {/* Subtotal */}
        <div>
          <label htmlFor="subtotal" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Subtotal <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              id="subtotal"
              type="number"
              value={subtotal}
              onChange={(e) => setSubtotal(e.target.value)}
              required
              step="0.01"
              min="0"
              className="block w-full pl-7 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Tax */}
        <div>
          <label htmlFor="tax" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Tax <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              id="tax"
              type="number"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
              required
              step="0.01"
              min="0"
              className="block w-full pl-7 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Shipping */}
        <div>
          <label htmlFor="shipping" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Shipping <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              id="shipping"
              type="number"
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
              required
              step="0.01"
              min="0"
              className="block w-full pl-7 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Add Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
