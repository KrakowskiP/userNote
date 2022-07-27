import Button from "react-bootstrap/Button";

export default function DeleteButton({ id }) {
  const deleteNote = () => {
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE",
    });
  };

  return (
    <Button variant="warning" onClick={deleteNote}>
      Delete note
    </Button>
  );
}
