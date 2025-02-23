import React, { useState, useEffect } from 'react';

const ProductsList = () => {
  // Sample initial data
  const initialProducts = [
    { id: 1, title: "Fjallraven Backpack", price: 109.95 },
    { id: 2, title: "Mens Casual T-Shirt", price: 22.3 },
    { id: 3, title: "Mens Cotton Jacket", price: 55.99 },
    { id: 4, title: "Mens Casual Slim Fit", price: 15.99 },
    { id: 5, title: "Women's Chain Bracelet", price: 695 }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const Modal = ({ children }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );

  const ProductForm = () => (
    <form className="space-y-6">
      <div className="space-y-4">
        <input
          type="text"
          value={currentProduct?.title || ''}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Product name"
        />
        <input
          type="number"
          value={currentProduct?.price || ''}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Price"
        />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <button
          onClick={() => {
            setIsEditing(false);
            setCurrentProduct(null);
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <Modal>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {isEditing ? 'Edit Product' : 'Add New Product'}
          </h2>
          <ProductForm />
        </Modal>
      )}
    </div>
  );
};

export default ProductsList;