import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import api from '../../components/api';


const StockManagementPage = () => {
  const [stockItems, setStockItems] = useState([]);
  const [stockRequests, setStockRequests] = useState([]);
  const [newStockItem, setNewStockItem] = useState('');
  const [newStockQuantity, setNewStockQuantity] = useState('');
 


  useEffect(() => {
    fetchStockItems();
    fetchStockRequests();
  }, []);

  const fetchStockItems = async () => {
    try {
      const response = await api.get('/api/v1/user/stock');
      setStockItems(response.data);
    } catch (error) {
      console.error('Error fetching stock items:', error);
    }
  };

  const fetchStockRequests = async () => {
    try {
      const response = await api.get('/api/v1/user/requests');
      setStockRequests(response.data);
    } catch (error) {
      console.error('Error fetching stock requests:', error);
    }
  };

  const addStockItem = async () => {
    try {
      const response = await api.put(`/api/v1/user/stockupdate`, {
        stock_name: newStockItem,
        quantity: newStockQuantity,
      });
      console.log('Stock item added:', response.data);
      setNewStockItem('');
      setNewStockQuantity('');
      fetchStockItems();
      if(response.success)
      {
        message.success('added successfully')
      }
    } catch (error) {
      console.error('Error adding stock item:', error);
    }
  };

  const approveStockRequest = async (request) => {
    console.log(request)
    try {
      await api.put(`/api/v1/user/requests/${request.stock_name}`, {
        status: 'approved',
      });
      console.log('Stock request approved');
      fetchStockRequests();
    } catch (error) {
      console.error('Error approving stock request:', error);
    }
  };

  return (
    <div>
      <h1>Stock Management Page</h1>

      <h2 className='option'>Stock Items</h2>
      <ul>
        {stockItems.map((item) => (
          <li className='option 'key={item._id}>
             Item: {item.stock_name}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>

      <h2 className='option'>Stock Requests</h2>
      <ul>
        {stockRequests.map((request) => (
          <li key={request._id} className='option'>
            Request No: {request.requestNo}, Stock Item: {request.stockItem}, Quantity: {request.quantity}, Status: {request.status}
            {request.status === 'pending' && (
              <button onClick={() => approveStockRequest(request)}>Approve</button>
              
            )}
          </li>
        ))}
      </ul>

      <h2 className='option'>Add Stock Item</h2>
      <input
        type="text"
        placeholder="Stock Item"
        name="stockname"
        value={newStockItem}
        onChange={(e) => setNewStockItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        name="quantity"
        value={newStockQuantity}
        onChange={(e) => setNewStockQuantity(e.target.value)}
      />
      <button onClick={addStockItem}>Add</button>
    </div>
  );
};

export default StockManagementPage;
