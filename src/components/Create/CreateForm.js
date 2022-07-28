import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { styled } from "@mui/system";

const FormContainer = styled(Form)`
  width: 50%;
  min-width: 400px;
  margin: 20px auto;
`;

export default function UserForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log(data);
    });
  };

  const location = useLocation();
  const currentUser = location.pathname.slice(8);
  const isUser = currentUser === "user";
  const isAdmin = currentUser === "admin";

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label>User type</Form.Label>
          <Form.Control
            type="text"
            {...register("type")}
            defaultValue={currentUser}
          />
        </Form.Group>
      </fieldset>
      {isAdmin && (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              {...register("name")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Surename</Form.Label>
            <Form.Control
              type="text"
              placeholder="Surename"
              {...register("surename")}
            />
          </Form.Group>
        </>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("mail")}
        />
      </Form.Group>
      {isUser && (
        <Form.Group className="mb-3">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Login"
            {...register("login")}
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </Form.Group>
      <input type="submit" />
    </FormContainer>
  );
}
