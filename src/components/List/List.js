import useFetchData from "../hooks/useFetchData";

export default function List() {
  const { data } = useFetchData("http://localhost:3000/user");
  return (
    //przemek, dodac obsluge bledow
    <div>
      {data &&
        data.map((item) => (
          <div>
            {item.mail} || {item.type}
          </div>
        ))}
    </div>
  );
}
