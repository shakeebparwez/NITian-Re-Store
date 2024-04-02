import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../../apicalls/products";
import { SetLoader } from "../../redux/loadersSlice";
import { message } from "antd";
import Divider from "../../components/Divider";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showFilters, setShowFilters] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState({
    status: "approved",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts(filters);
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [filters]);

  return (
    <div
      className={`
        grid gap-5 ${showFilters ? "grid-cols-4" : "grid-cols-5"}
      `}
    >
      {products?.map((product) => {
        return (
          <div
            className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2 cursor-pointer"
            key={product._id}
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <img
              src={product.images[0]}
              className="w-full h-52 p-2 rounded-md object-cover"
              alt=""
            />
            <div className="px-2 flex flex-col">
              <h1 className="text-lg font-semibold">{product.name}</h1>
              <p className="text-sm">
                {product.age} {' '}
                {product.age === 1 ? " year" : " years"} {' '}
                old
              </p>
              <Divider />
              <span className="text-xl font-semibold text-green-700">
                ₹ {product.price}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
