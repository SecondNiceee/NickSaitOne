import { Link } from "react-router";
import Filters from "../../../widgets/FiltersAside/ui/components/Filters";

export const MobileFilters = () => {

  return (
    <>
      <h2 className="mx-auto text-3xl font-bold text-white mb-6">Filters</h2>
      <div className="ml-auto mr-auto grid xs:gap-10 gap-4 w-[100%] xs:grid-cols-[1fr_1fr] sm:grid-cols-2">
        <Filters />
      </div>
      <Link to={"/"} className="xs:w[70%] w-[100%] flex justify-center mx-auto px-4 py-2 mt-8 rounded-md mb-8 bg-[#2d7aff] text-white text-3xl font-bold">Done!</Link>
    </>
  );
};
