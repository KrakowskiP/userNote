import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { styled } from "@mui/system";
import avatar from "../pictures/user.png";
import EditButton from "./EditButton";

const PreviewContainer = styled(Container)`
  width: 50%;
  min-width: 400px;
  padding: 20px;
`;

const Avatar = styled("img")`
  width: 50%;
  margin: 20px;
`;

export default function Preview() {
  const { id } = useParams();
  const { data } = useFetchData("http://localhost:3000/users/" + id);
  return (
    <>
      <PreviewContainer>
        <Avatar src={avatar} alt="User" />
        {data && (
          <ListGroup>
            {Object.entries(data).map(([key, value], index) => {
              return (
                <ListGroup.Item key={index}>
                  {key.toUpperCase()}: {value}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </PreviewContainer>
      <EditButton id={id} />
    </>
  );
}
