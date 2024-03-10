import Card from "../components/home/Card";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";

function DetailPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResources = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resource"));
        const resourceData = querySnapshot.docs.map((doc) => doc.data());
        setResources(resourceData);
      } catch (error) {
        setError("Error fetching resources: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    getResources();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pt-20 px-10">
      <div className="">Resource list</div>

      <div className="flex flex-wrap gap-2 justify-center py-20">
        {resources.map((resource, index) => (
          <div key={index}>
            <Card title={resource.siteName} imgPath={resource.logo} link={resource.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
