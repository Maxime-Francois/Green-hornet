'use client'
import { categories } from "@/app/utils/Categories";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");



  

  return (
    <div className="bg-white">
   
        <div className="flex flex-col font-medium  p-4 md:p-0  rounded-lg bg-gray-50 md:flex-row  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:gap-5 md:gap-3 xl:gap-14">
          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={
                category === item.label ||
                (Category === null && item.label === "All")
              }
            />
          ))}
        </div>
     
    </div>
  );
};

export default Categories;
