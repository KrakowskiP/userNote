import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { styled } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";

const FormContainer = styled(Form)`
  width: 50%;
  min-width: 400px;
  margin: 20px auto;
`;

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:3000/users/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          placeholder="Enter email"
          required
          type="email"
          {...register("mail")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          placeholder="Password"
          required
          type="password"
          {...register("password")}
        />
      </Form.Group>
      <input type="submit" />
    </FormContainer>
  );
}
