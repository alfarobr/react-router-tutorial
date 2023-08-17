import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error...</p>;

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter: filter });
    } else {
      setSearchParams({});
    }
    console.log(e.target.value);
  };

  return (
    <>
      <h1 className="mb-4">Bog</h1>
      <div className="mb-3">
        <input
          type="text"
          name=""
          value={searchParams.get("filter") || ""}
          onChange={handleChange}
          className="form-control"
          placeholder="Buscar un post..."
        />
      </div>
      <div className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item list-group-item-action"
            >
              {item.id} - {item.title}
            </Link>
          ))}
      </div>
    </>
  );
};

export default Blog;
