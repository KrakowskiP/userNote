import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { styled } from "@mui/system";
import { Button } from "react-bootstrap";

const FormContainer = styled(Form)`
  width: 50%;
  min-width: 400px;
  margin: 20px auto;
`;

const SubmitContainer = styled("div")`
  margin: 20px;
`;

export default function UserForm() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/");
    });
  };

  const location = useLocation();
  const currentUser = location.pathname.slice(8);
  const isUser = currentUser === "user";
  const isAdmin = currentUser === "admin";

  const generatePassword = () => {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 8; ++i) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setValue("password", password);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label>User type</Form.Label>
          <Form.Control
            defaultValue={currentUser}
            type="text"
            required
            {...register("type")}
          />
        </Form.Group>
      </fieldset>
      {isAdmin && (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Name"
              required
              type="text"
              {...register("name")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Surename</Form.Label>
            <Form.Control
              placeholder="Surename"
              required
              type="text"
              {...register("surename")}
            />
          </Form.Group>
        </>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          placeholder="Enter email"
          required
          type="email"
          {...register("mail")}
        />
      </Form.Group>
      {isUser && (
        <Form.Group className="mb-3">
          <Form.Label>Login</Form.Label>
          <Form.Control
            placeholder="Login"
            required
            type="text"
            {...register("login")}
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          placeholder="Password"
          required
          type="password"
          {...register("password")}
        />
      </Form.Group>
      <Button onClick={generatePassword}>Generate password</Button>
      <SubmitContainer>
        <Button type="submit">Submit</Button>
      </SubmitContainer>
    </FormContainer>
  );
}
