import React, { useEffect, useState } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState([]);

  useEffect(async () => {
    setLoading(true);
    setError([]);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError([...errors, error]);
    }
  }, []);
  return {
    data,
    loading,
    errors
  };
};

export default () => {
  const stuff = useFetch("https://api.randomuser.me/");

  const { data, loading, errors } = stuff;

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (errors && errors.length > 0) {
    return (
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  const user = data ? data.results[0] : null;
  return (
    <div>
      {!user ? (
        <h3>No user</h3>
      ) : (
        <div>
          <p>Firstname: {user.name.first}</p>
          <p>Lastname: {user.name.last}</p>
        </div>
      )}
    </div>
  );
};
