import { Outlet } from "react-router";
import { Header } from "../../widgets/Header";
import { FilterButton } from "../../widgets/FilterButton";
import { FilterInput, FiltersAside } from "../../features/filters";

const BaseLayout = ({ menuOnly = false }: { menuOnly?: boolean }) => {
  return (
    <>
      <Header />
      <main className="container grid grid-cols-12  md:mt-5">

        {!menuOnly && (
          <>
            <h3 className="sticky md:flex hidden top-[107.2px] col-start-1 text-white col-end-5 justify-center items-center text-2xl font-bold bg-[#14131a] z-20">
              Фильтры
            </h3>
            <FilterInput />
            <FiltersAside />
            <FilterButton />
          </>
        )}

        <div className={`col-start-1 col-end-13 ${!menuOnly && 'md:col-start-5 md:col-end-13'} flex flex-col`}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default BaseLayout;
