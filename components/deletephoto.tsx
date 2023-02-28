"use client";
import React, { useRef } from "react";

const deletephoto = (props: any) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLInputElement>(null);

  async function deletePhoto(e: any) {
    e.preventDefault();
    if (passwordRef.current?.value != "12345") {
      errorRef.current?.classList.replace("invisible", "visible");
      console.log("here");
    } else {
      props.setLoading(true);
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: props.photoId,
        }),
      };
      console.log(props.photoId);
      fetch("/api/image", requestOptions).then(() => {
        props.setIsDeletePhoto(false);
        props.setLoading(false);
      });
    }
  }
  return (
    <div {...props}>
      <div className="fixed top-20 left-0 right-0 w-full h-auto md:w-1/4 bg-white m-auto z-10 p-4 flex flex-col gap-4 rounded-xl">
        <form onSubmit={(e) => deletePhoto(e)}>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Are you sure?</h3>
            <div className="flex flex-col gap-4">
              <label>Password</label>
              <input
                type={"password"}
                className="h-[55px] p-2 outline-none border-gray-400 border rounded-xl"
                ref={passwordRef}
                required
              ></input>
              <p ref={errorRef} className="invisible text-red-700 font-light">
                Incorrect Password <br />
                hint: 12345
              </p>
            </div>
            <div className="flex gap-4 place-self-end mt-4">
              <button onClick={() => props.setIsDeletePhoto(false)}>
                Cancel
              </button>
              <button
                type="submit"
                className="p-4 px-6 bg-[#EB5757] text-white rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        onClick={() => props.setIsDeletePhoto(false)}
        className="fixed top-0 left-0 right-0 w-full h-full  bg-black m-auto z-0 opacity-50"
      ></div>
    </div>
  );
};

export default deletephoto;
