import React, { useState, useEffect } from "react";
import OrdersList from "../components/OrdersList";
import OrdersForm from "../components/OrdersForm";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch orders (sample data or from API)
    const fetchOrders = async () => {
      setOrders([
        {
          id: 1,
          productId: 1,
          quantity: 2,
          customer: "John Doe",
          email: "john.doe@example.com",
          status: "Pending",
        },
        {
          id: 2,
          productId: 2,
          quantity: 1,
          customer: "Jane Smith",
          email: "jane.smith@example.com",
          status: "Shipped",
        },
      ]);
    };

    // Fetch products (from an API or static data)
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchOrders();
    fetchProducts();
  }, []);

  const handleEdit = (order) => {
    setCurrentOrder(order);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleSave = (order) => {
    if (order.id) {
      // Update existing order
      setOrders(orders.map((o) => (o.id === order.id ? order : o)));
    } else {
      // Add new order
      setOrders([
        ...orders,
        {
          ...order,
          id: orders.length + 1,
          productId: parseInt(order.productId),
        },
      ]);
    }
    setShowForm(false);
    setCurrentOrder(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <button
          onClick={() => {
            setCurrentOrder(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Order
        </button>
      </div>

      <OrdersList
        orders={orders}
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <OrdersForm
          order={currentOrder}
          products={products}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setCurrentOrder(null);
          }}
        />
      )}
    </div>
  );
};

export default OrdersPage;
