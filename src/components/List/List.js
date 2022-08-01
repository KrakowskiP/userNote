import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import useFetchData from "../hooks/useFetchData";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const Title = styled("h2")`
  margin: 10px;
`;

export default function List() {
  const { data, error } = useFetchData("http://localhost:3000/users");
  return (
    <Container>
      <Title>List of available users</Title>
      {error && <div>{error}</div>}

      <Table responsive>
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
                <td>
                  <Link to={`/preview/${item.id}`}>{item.mail}</Link>
                </td>
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
