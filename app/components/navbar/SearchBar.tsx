'use client'
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
  // Vous pouvez ajouter ici la logique de recherche

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
   formState:{errors}
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/products",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );
    console.log(url)
    router.push(url);
    reset();
  };

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4 flex items-center justify-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Rechercher un produit ..."
        className="
        w-[70%]
        px-3
        py-2
        border
        focus:border-[0.5px]
        focus:border-green-400
         border-gray-300
          dark:border-gray-700
           rounded-l-md
            focus:outline"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-green-400 hover:opacity-80 text-white p-2 rounded-r-md"
      >
        Rechercher
      </button>
      {/* Vous pouvez ajouter ici la liste des résultats de recherche */}
    </div>
  );
};

export default SearchBar;
