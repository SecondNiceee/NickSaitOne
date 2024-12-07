import {  useForm } from "react-hook-form";
import { TypeUser } from "../../../entitys/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { validation } from "../model/validation";
import FormInput from "../../../shared/ui/FormInput";
import { citysConfig } from "../config/citysConfig";
import RadioInput from "../../../shared/ui/RadioInput";
import { streetsConfig } from "../config/streetsConfig";
import { genderConfig } from "../config/genderConfig";
import NumberInput from "../../../shared/ui/NumberInput";
import { useAppDispatch } from "../../../shared/models/reduxHooks";
import { addUser } from "../../../entitys/users/models/usersSlice";
import { useNavigate } from "react-router";
import { routes } from "../../../shared/models/routes";
export const CreateUser = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm<Omit<TypeUser, "id">>({
    resolver: zodResolver(validation),
  });

  const dispath = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    dispath(addUser(data))
    navigate(routes.home)
  });

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="border-2 rounded-md p-6 flex flex-col gap-10 max-w-[800px] w-[100%] "
      action=""
    >
      <div className="flex flex-col gap-10 ">
        
        <FormInput
          error={errors.name}
          placeholder="Name"
          type="text"
          maxLength={20}
          id="name"
          labelText="User name"
          register={register}
          name="name"
        />

        <FormInput
          error={errors.email}
          register={register}
          id="email"
          labelText="Email"
          name="email"
          placeholder="Email"
          type="email"
        />

        <FormInput
          error={errors.phone}
          register={register}
          id="phone"
          labelText="Phone number"
          name="phone"
          placeholder="Phone"
          type="tel"
        />

        <FormInput
          error={errors.website}
          register={register}
          id="website"
          labelText="Website"
          name="website"
          
          placeholder="Website link"
          type="url"
        />

        <NumberInput  error={errors.budget}
          control={control}
          id="budget"
          labelText="Budget:"
          name="budget"
          placeholder="Budget"
          type="number" />

        <FormInput
          error={errors.company?.name}
          register={register}
          id="company"
          labelText="Company name"
          name="company.name"
          placeholder="Company name"
          type="text"
          maxLength={20}
        />

        <FormInput
          error={errors.company?.catchPhrase}
          register={register}
          id="company-phrase"
          labelText="Company phrase"
          name="company.catchPhrase"
          placeholder="Company phrase:"
          type="text"
          maxLength={20}
        />


        <div className="address grid max-w-[600px] gap-10 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 ml-auto mr-auto items-start w-[100%]">
          <RadioInput
            error={errors.address?.city}
            register={register}
            config={citysConfig}
            name="address.city"
            title="City : "
          />

          <RadioInput
            error={errors.address?.street}
            config={streetsConfig}
            register={register}
            name="address.street"
            title="Street : "
          />

          <RadioInput
            error={errors.gender}
            config={genderConfig}
            register={register}
            name="gender"
            title="Gender : "
          />
        </div>
      </div>
      <input
        type="submit"
        className="w-[100%] py-4 border-2 border-solid rounded-lg border-[#2d7aff] text-white md:text-2xl text-xl"
        value={"Создать юзерса"}
      />
    </form>
  );
};
