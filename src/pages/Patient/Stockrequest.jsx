import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockRequestsPage = () => {
  const [stockItems, setStockItems] = useState([]);
  const [selectedStock, setSelectedStock] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchStockItems();
  }, []);

  const fetchStockItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user/stock');
      setStockItems(response.data);
    } catch (error) {
      console.error('Error fetching stock items:', error);
    }
  };

  const handleStockSelect = (event) => {
    setSelectedStock(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleRequestSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/requests', {
        stock_name: selectedStock,
        quantity: quantity,
        patient_id: localStorage.getItem('patient_id'),
        status: 'pending',
      });

      console.log('Stock request submitted:', response.data);

      // Reset form fields
      setSelectedStock('');
      setQuantity('');
    } catch (error) {
      console.error('Error submitting stock request:', error);
    }
  };

  return (
    <div>
      <h1>Stock Requests</h1>
      <form onSubmit={handleRequestSubmit}>
        <label>
          Select Stock:
          <select value={selectedStock} onChange={handleStockSelect}>
            <option value="">-- Select Stock --</option>
            {stockItems.map((item) => (
              <option key={item._id} value={item.stock_name}>
                {item.stock_name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label>
        <br />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default StockRequestsPage;
