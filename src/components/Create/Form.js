import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export default function Form() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled>
        <input {...register("type")} defaultValue={currentUser} />
      </fieldset>
      <p></p>
      {isAdmin && (
        <>
          <input placeholder="Name" {...register("name")} defaultValue="name" />
          <p></p>
          <input
            placeholder="Surename"
            {...register("surename")}
            defaultValue="surename"
          />
          <p></p>
        </>
      )}
      <input
        placeholder="E-mail"
        {...register("mail")}
        defaultValue="kabanos@wp.pl"
      />
      <p></p>
      {isUser && (
        <>
          <input
            placeholder="Login"
            {...register("login")}
            defaultValue="login"
          />
          <p></p>
        </>
      )}
      <input
        placeholder="Password"
        {...register("password")}
        defaultValue="qwerty123"
      />
      <p></p>

      <input type="submit" />
    </form>
  );
}
