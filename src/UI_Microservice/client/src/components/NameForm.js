// src/components/NameForm.js
import React, { useState } from 'react';
import axios from 'axios';

const NameForm = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Make a POST request to your API to enter the name
        await axios.post('http://localhost:3001/items', { name });

        // Now make a GET request to count occurrences of the name
        const response = await axios.get(`http://localhost:3001/items/count?name=${name}`);
        console.log(response.data)
        setCount(response.data.count); // This is now just a number
        setError(''); // Clear any previous error
    } catch (err) {
        setError('Error fetching the count. Please try again.');
        setCount(null); // Reset count in case of error
    }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {count !== null && (
        <p>
          The name "{name}" has been entered {count} time{count !== 1 ? 's' : ''}.
        </p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default NameForm;
