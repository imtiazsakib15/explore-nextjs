export const metadata = {
  title: "Dynamic product",
  description: "This is Products page",
};

const Product = ({ params, searchParams }) => {
  // console.log(params, searchParams);
  return (
    <div>
      <h1 className="text-3xl font-bold">
        This is Dynamic Product - {params?.id}
      </h1>
      <p>Category = {searchParams?.category}</p>
    </div>
  );
};

export default Product;
