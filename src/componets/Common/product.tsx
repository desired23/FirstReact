
interface ImageListProps {
  images: string[]; // Chỉ định kiểu dữ liệu là một mảng các chuỗi
}

function ImageList({ images }: ImageListProps) {
  console.log(images);
  return (
    <div>
      {images.map((imageUrl, index) => (
        <img key={index} width={100} src={imageUrl} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default ImageList;