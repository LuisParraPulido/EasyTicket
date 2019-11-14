import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);
  return tickets;
};

export default useInitialState;
