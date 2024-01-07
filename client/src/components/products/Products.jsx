const Products = () => {
  return (
    <div className="product-wrapper grid grid-cols-card gap-4">
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img
            src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
            alt=""
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">Elma</span>
          <span>12tl</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
