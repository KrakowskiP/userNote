import { useForm } from "react-hook-form";
export default function CreateUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name")} />
      <p></p>
      <input placeholder="Surename" {...register("surename")} />
      <p></p>
      <input placeholder="E-mail" {...register("mail")} />
      <p></p>
      <input placeholder="Login" {...register("login")} />
      <p></p>
      <input placeholder="Password" {...register("password")} />
      <p></p>

      <input type="submit" />
    </form>
  );
}
