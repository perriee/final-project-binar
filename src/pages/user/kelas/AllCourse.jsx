import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Component
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { NavbarHome } from "../../../assets/components/navbar/NavbarHome";
import { CardGlobal } from "../../../assets/components/cards/CardGlobal";
import CardCoursesSkeleton from "../../../assets/components/skeleton/CardCourseSkeleton";
import { getAllCoursesAction } from "../../../redux/action/courses/getAllCoursesAction";

export const AllCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const storeAuthUser = useSelector((state) => state.authLogin);
  const storeCourses = useSelector((state) => state.dataCourses.courses);

  const getCourses = () => {
    dispatch(getAllCoursesAction());
  };

  useEffect(() => {
    getCourses();
  }, [dispatch]);

  console.log("storeCourses", storeCourses);
  console.log("storeAuthUser", storeAuthUser);
  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}
      <div className="flex h-full flex-col justify-between bg-secondary">
        <div className="flex flex-col justify-center px-2 pt-16 md:px-4 md:pt-20 lg:px-24 lg:pt-28">
          {/* Search */}
          <div className="flex items-center justify-between">
            <div className="px-4 py-6 text-3xl font-bold">Topik Kelas</div>
            <div className="relative flex items-center">
              <input
                type="text"
                className="cursor-pointer rounded-3xl border-2 border-primary px-1 py-2 md:px-4 lg:px-4"
                placeholder="Cari Kelas..."
              />
              <BiSearchAlt
                size={25}
                className="absolute inset-y-2 right-4 cursor-pointer rounded-lg bg-primary p-1 text-white"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-start justify-center py-4 md:justify-between lg:justify-between">
            <div className="hidden w-[30%] flex-col rounded-xl bg-white md:flex lg:flex">
              {/* Filter */}
              <div className="flex px-4 py-4 text-xl font-bold">Filter</div>
              <div className="flex flex-col space-y-3 font-medium">
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Paling Baru
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Paling Populer
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Promo
                </div>
              </div>

              {/* Kategori */}
              <div className="flex px-4 py-3 text-xl font-bold">Kategori</div>
              <div className="flex flex-col space-y-3 font-medium">
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  UI/UX Design
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Web Development
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Android Development
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Data Science
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Business Intelligence
                </div>
              </div>

              {/* Level Kesulitan */}
              <div className="flex px-4 py-3 text-xl font-bold">
                Level Kesulitan
              </div>
              <div className="flex flex-col space-y-3 font-medium">
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Semua Level
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Beginner Level
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Intermediate Level
                </div>
                <div className="flex items-center px-6">
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] cursor-pointer"
                  />
                  Advanced Level
                </div>
              </div>

              {/* Hapus Filter */}
              <button className="py-10 font-medium text-red-600">
                Hapus Filter
              </button>
            </div>

            {/* Button */}
            <div className="flex w-[65%] flex-wrap items-center justify-between font-semibold">
              <div className="flex w-full gap-4 text-center">
                <div className="w-[20%] cursor-pointer rounded-xl bg-primary py-2 text-white hover:bg-white hover:text-black">
                  <button>All</button>
                </div>
                <div
                  className="w-[40%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white md:w-[50%] lg:w-[60%]"
                  onClick={() => {
                    navigate("/pilih-premium");
                  }}
                >
                  <button>Kelas Premium</button>
                </div>
                <div className="w-[30%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white md:w-[40%] lg:w-[30%]"
                onClick={()=>{navigate("/pilih-gratis")}}>
                  <button>Kelas Gratis</button>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid w-full grid-cols-2 gap-6 py-4 md:grid-cols-1 lg:grid-cols-2">
              {storeCourses == null ? (
              <CardCoursesSkeleton />
            ) : (
              storeCourses.map((value) => (
                <CardGlobal
                  key={value.id}
                  image={value.courseImg}
                  category={value.category.categoryName}
                  rating={value.averageRating}
                  title={value.courseName}
                  author={value.mentor}
                  level={value.level}
                  modul={value.modul}
                  duration={value.duration}
                  kelas={"Mulai Kelas"}
                />
              ))
            )}
              </div>
            </div>
          </div>
        </div>
        <NavbarKelas style={{ zIndex: 1 }} />
      </div>
    </>
  );
};