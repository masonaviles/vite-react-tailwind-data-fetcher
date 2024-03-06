import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface DataFetchingComponentProps {
  apiUrl: string;
}

const DataFetchingComponent: React.FC<DataFetchingComponentProps> = ({ apiUrl }) => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiUrl]); // Include apiUrl in the dependency array to refetch if the prop changes

  return (
    <div className="flex flex-col items-center justify-center my-8">
        {data.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-xl">
                <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                <p className="text-gray-700 text-base">{item.body}</p>
            </div>
        ))}
    </div>
  );
};

export default DataFetchingComponent;