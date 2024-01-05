import { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Отримані дані:</h2>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <div>
          <p>Title: {data ? data.title : 'Немає даних'}</p>
        </div>
      )}
    </div>
  );
};

export default DataFetchingComponent;