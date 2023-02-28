"use client";
import NavBar from "@/components/navbar";
import Gallery from "@/components/gallery";
import Addphoto from "@/components/addphoto";
import Deletephoto from "@/components/deletephoto";
import { useEffect, useState } from "react";

interface dataProps {
  label: string;
  url: string;
}
export default function Home() {
  const [data, setData] = useState<dataProps[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isAddPhoto, setIsAddPhoto] = useState(false);
  const [isDeletePhoto, setIsDeletePhoto] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/image");
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    fetchData();
  }, [loading]);
  const filtered = data.filter((x) => {
    return x.label.toLowerCase().includes(searchText);
  });
  console.log(filtered);
  return (
    <main className="mx-10 md:mx-40 flex flex-col gap-12">
      <NavBar setSearchText={setSearchText} setIsAddPhoto={setIsAddPhoto} />
      <div>
        <Gallery
          data={filtered}
          setPhotoId={setPhotoId}
          setIsDeletePhoto={setIsDeletePhoto}
        />
        <Addphoto
          className={`${isAddPhoto ? "" : "hidden"}`}
          setIsAddPhoto={setIsAddPhoto}
          setLoading={setLoading}
        />
        <Deletephoto
          className={`${isDeletePhoto ? "" : "hidden"}`}
          setIsDeletePhoto={setIsDeletePhoto}
          photoId={photoId}
          setLoading={setLoading}
        />
      </div>
    </main>
  );
}
