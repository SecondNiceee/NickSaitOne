import { useState } from "react";
import { useParams } from "react-router";
import { TypeUser } from "../../../entitys/users";
import { TypeStatus } from "../../../shared/models/typeStatus";
import useGetUsers from "../hooks/useGetUsers";
import UserProfile from "./UserProfile";
import Spinner from "../../../shared/ui/Spinner";

type ParamsType = {
  id: string;
};
export const Profile = () => {
  const id = useParams<ParamsType>().id;
  const [user, setUser] = useState<TypeUser | null>(null);
  const [userStatus, setUserStatus] = useState<TypeStatus>("pending");

  useGetUsers({ setUser, setUserStatus, id });

  return (
    <div className="flex justify-center w-[100%]">
      {userStatus === "rejected" ? (
        <h2 className="text-white text-xl md:text-2xl text-bold">Server Error</h2>
      ) : userStatus === "pending" ? (
        <h2 className="text-white text-xl md:text-2xl text-bold"><Spinner/></h2>
      ) : (
        user ? <UserProfile user={user} />
        : <h2 className="text-white text-xl md:text-2xl text-bold">The user does not match with loading status!</h2>
      )}
    </div>
  );
};
