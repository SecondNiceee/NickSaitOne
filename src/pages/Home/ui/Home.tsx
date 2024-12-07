import { useAppSelector } from "../../../shared/models/reduxHooks";
import { User } from "../../../entitys/users";
import { useFilters } from "../../../features/filters";
import Spinner from "../../../shared/ui/Spinner";

export const Home = () => {
  const users = useAppSelector((state) => state.usersSlice.users);
  const status = useAppSelector((state) => state.usersSlice.status);

  const filteredUsers = useFilters(users);

  return (
    <div className="flex flex-col gap-5 mt-5 mb-5">
      {status === "pending" ? (
        <Spinner />
      ) : status === "rejected" ? (
        <h2 className="text-white text-xl md:text-2xl text-bold">
          Server Error
        </h2>
      ) : (
        filteredUsers
          .reverse()
          .map((user, index) => <User key={index} {...user} />)
      )}
      {/* // Переворачиваем для того чтобы новые юзеры были первыми */}
    </div>
  );
};
