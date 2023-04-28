import { useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //console.log(register('name'));

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  //const [person, setPerson] = useState({ name: "", age: "" });
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  //   const handleSubmit = (event: React.FormEvent) => {
  //     event.preventDefault();
  //     // if (nameRef.current != null && ageRef.current != null) {
  //     //    person.name=  nameRef.current.value
  //     //    person.age = parseInt(ageRef.current.value);
  //     // }
  //     //console.log(person);
  //   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* ref={nameRef} */}
        {/* onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          } */}
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is Required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Atleast 3 Chars</p>
        )}
      </div>
      <div className="mb3">
        <label htmlFor="id" className="form-label">
          Number
        </label>
        {/* ref={ageRef} */}
        <input
          {...register("age", { valueAsNumber: true, required:true, minLength:2 , maxLength:3 })}
          id="age"
          type="number"
          className="form-control"
        />
         {errors.age?.type === "required" && <p className="text-danger">Age is Required</p>}
      </div>
      <br />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
