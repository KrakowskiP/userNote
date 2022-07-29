import { Button } from "react-bootstrap";

export default function EditButton({ id }) {
  return <Button href={"/edit/user/" + id}>Edit user</Button>;
}
