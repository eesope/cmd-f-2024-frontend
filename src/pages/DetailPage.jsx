import Card from "../components/home/Card";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import firestore from firebase.js

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
  }, [db]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pt-20 px-10">
      <div className="flex justify-center pt-20 ">
        <h2 className="text-2xl">Resource list</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 py-20 px-10">
        {resources.map((resource, index) => (
          <div key={index}>
            <Card
              title={resource.siteName}
              imgPath={resource.logo}
              link={resource.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
