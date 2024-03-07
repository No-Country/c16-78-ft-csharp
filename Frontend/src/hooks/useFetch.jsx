import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Variable para verificar si el componente está montado

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error 400");
        }
        const json = await response.json();
        if (isMounted) {
          setData(json); // Solo actualiza el estado si el componente está montado
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error); // Solo actualiza el estado si el componente está montado
          setLoading(false);
        }
      }
    };

    fetchData();

    // Función de limpieza: se ejecuta cuando el componente se desmonta
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
