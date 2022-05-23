import React, { useState, useEffect} from 'react';

export default function useAsyncStorageCRUD() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("data").then((savedData) => {

    });
}, []);

return { data };
}