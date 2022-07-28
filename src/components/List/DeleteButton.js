import Button from "react-bootstrap/Button";

export default function DeleteButton({ id }) {
  const deleteNote = () => {
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE",
    }).then(window.location.reload(false));
  };

  return (
    <>
      <Button variant="danger" onClick={deleteNote}>
        Delete <i className="bi-trash"></i>
      </Button>
    </>
  );
}
