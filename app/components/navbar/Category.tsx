
'use client'

import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryProps {
    label: string;
    icon: IconType
    selected?: boolean
}

const Category:React.FC<CategoryProps> = ({label, icon: Icon, selected}) => {
    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        if(label === 'All') {
            router.push('/')
        }else {
            let currentQuery = {}

            if (params) {
                currentQuery = queryString.parse(params.toString())
            }
            const updatedQuery: any = {
                ...currentQuery,
                category: label
            }

            const url = queryString.stringifyUrl (
                {
                    url: '/products',
                    query: updatedQuery
                },
                {
                    skipNull:true
                }
            )
            router.push(url)
        }
    }, [label, params, router])


  return (
    <div
      onClick={handleClick}
      className={`flex items-center lg:justify-center text-center
    gap-1 p-2 border-b-2 md:hover:text-green-400 transition cursor-pointer md:flex-row md:justify-start md:w-full hover:bg-gray-100 hover:bg-transparent border-0
    ${
      selected
        ? "border-green-400 text-green-400"
        : "border-transparent text-b-400"
    }
    `}
    >
      <Icon size={20} />
      <div className="font-normal text-xl ">{label}</div>
    </div>
  );
}

export default Category