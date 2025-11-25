// useDataBdd.js
import { useEffect, useState } from "react";

// Fonction utilitaire qui récupère les données depuis l'API
async function DataBdd() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
    return [];
  }
}

// Hook personnalisé qui utilise la fonction ci-dessus
export function useOffresDatasBdd() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndStore = async () => {
      const res = await DataBdd();
      setDatas(res);
      setLoading(false);
    };
    fetchAndStore();
  }, []);

  return { datas, loading };
}
