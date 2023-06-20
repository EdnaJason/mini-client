import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockRequestPage = () => {
  const [stockItems, setStockItems] = useState([]);
  const [selectedStockItem, setSelectedStockItem] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');

  useEffect(() => {
    fetchStockItems();
  }, []);

  const fetchStockItems = async () => {
    try {
      const response = await axios.get('/api/v1/user/stock');
      setStockItems(response.data);
    } catch (error) {
      console.error('Error fetching stock items:', error);
    }
  };

  const submitStockRequest = async () => {
    const patientId = localStorage.getItem('patient_id');

    try {
      await axios.post('/api/v1/user/stock/request', {
        patientId,
        stockItem: selectedStockItem,
        quantity: selectedQuantity,
      });
      console.log('Stock request submitted successfully');
      // Perform any additional actions after successful submission
    } catch (error) {
      console.error('Error submitting stock request:', error);
      // Handle error case
    }
  };

  return (
    <div>
      <h1>Stock Request Page</h1>

      <h2>Available Stock Items</h2>
      <ul>
        {stockItems.map((item) => (
          <li key={item._id}>
            Stock No: {item.stockNo}, Item: {item.stockItem}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>

      <h2>Make Stock Request</h2>
      <select value={selectedStockItem} onChange={(e) => setSelectedStockItem(e.target.value)}>
        <option value="">Select Stock Item</option>
        {stockItems.map((item) => (
          <option key={item._id} value={item.stockItem}>
            {item.stockItem}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Quantity"
        value={selectedQuantity}
        onChange={(e) => setSelectedQuantity(e.target.value)}
      />

      <button onClick={submitStockRequest}>Submit Request</button>
    </div>
  );
};

export default StockRequestPage;
