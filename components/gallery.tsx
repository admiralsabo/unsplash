import Image from "next/image";

const Gallery = ({
  data,
  setPhotoId,
  setIsDeletePhoto,
}: {
  data: any[];
  setPhotoId: any;
  setIsDeletePhoto: any;
}) => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3  lg:grid-cols-4 gap-6 auto-rows-[minmax(0,_200px)] p-4">
      {data &&
        data.map((photo: any, index: any) => {
          return (
            <div
              key={`photo-${index}`}
              className={`group w-full relative gallery ${
                index % 2 ? "sm:row-span-2 " : ""
              }`}
            >
              <Image
                src={photo.url}
                className={`h-full w-full object-cover object-center  rounded-2xl`}
                alt=""
              />
              <div className="opacity-0 rounded-2xl bg-black  group-hover:opacity-70 duration-500 h-full  absolute top-0 left-0 right-0  flex flex-col justify-between">
                <button
                  onClick={() => {
                    setIsDeletePhoto(true);
                    setPhotoId(photo._id);
                  }}
                  className="text-red-500 w-14 border border-red-500 place-self-end m-4 rounded "
                >
                  delete
                </button>
                <h1 className="text-white font-semibold m-4">{photo.label}</h1>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
