import React, { useState } from 'react';
import OrderList from '../components/OrderList';
import OrderForm from '../components/OrderForm';
import { Order } from '../types/Order';

const Home: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const handleAddOrder = (newOrder: Omit<Order, 'id'>) => {
    const orderWithId: Order = {
      ...newOrder,
      id: Date.now().toString(), // Simple ID generation
    };
    setOrders([...orders, orderWithId]);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add New Order
          </h2>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <OrderForm onSubmit={handleAddOrder} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Order List
          </h2>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <OrderList orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default Home;
