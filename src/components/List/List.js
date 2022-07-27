import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import useFetchData from "../hooks/useFetchData";
import DeleteButton from "./DeleteButton";

export default function List() {
  const { data } = useFetchData("http://localhost:3000/users");
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>E-mail</th>
            <th>User type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.mail}</td>
                <td>{item.type}</td>
                <td>
                  <DeleteButton id={item.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
