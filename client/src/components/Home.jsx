import { useGetAllProductsQuery } from "../features/productsAPI";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>An error has occured...</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => {
              return (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.description}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button>Add to cart</button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
