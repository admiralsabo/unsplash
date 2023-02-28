"use client";
import React, { useRef } from "react";

const Addphoto = (props: any) => {
  const labelRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  console.log(labelRef);
  async function addPhoto() {
    props.setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        label: labelRef.current?.value,
        url: urlRef.current?.value,
      }),
    };
    fetch("/api/image", requestOptions).then((response) => response.json());
    if (labelRef.current?.value) labelRef.current.value = "";
    if (urlRef.current?.value) urlRef.current.value = "";
    props.setIsAddPhoto(false);
    props.setLoading(false);
  }
  return (
    <div {...props}>
      <div className="fixed top-20 left-0 right-0 w-full h-auto md:w-1/2 bg-white m-auto z-10 p-4 flex flex-col gap-4 rounded-xl">
        <div>
          <h3 className="font-semibold text-2xl">Add a new photo</h3>
        </div>
        <form onSubmit={() => addPhoto()}>
          <div className="flex flex-col gap-2">
            <label>Label</label>
            <input
              type={"text"}
              className="h-[55px] p-2 outline-none border-gray-400 border rounded-xl"
              placeholder="Suspendisse elit massa"
              ref={labelRef}
              required
            ></input>
            <label>Photo URL</label>
            <input
              required
              type={"text"}
              ref={urlRef}
              className="h-[55px] p-2 outline-none border-gray-400 border rounded-xl"
              placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            ></input>
            <div className="flex gap-4 place-self-end mt-4">
              <button onClick={() => props.setIsAddPhoto(false)}>Cancel</button>
              <button
                type="submit"
                className="p-4 px-6 bg-[#3DB46D] text-white rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        onClick={() => props.setIsAddPhoto(false)}
        className="fixed top-0 left-0 right-0 w-full h-full  bg-black m-auto z-0 opacity-50"
      ></div>
    </div>
  );
};

export default Addphoto;
