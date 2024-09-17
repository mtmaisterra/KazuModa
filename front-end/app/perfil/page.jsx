"use client";

import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";


export default function ProfilePage() {
  const [data, setData] = useState();


  // Data fetching of profile data.
  useEffect( () => {
    axiosInstance.get("/api/v1/profile")
      .then( res => {
        setData(res.data)
      })
      .catch( err => console.error(err.response))
  },[])


  return (
    <main>
      <h1>Bienvenido! {`${data?.name || "Usuario"}`}</h1>
      <small>{data?.email}</small>
    </main>
  );
}
