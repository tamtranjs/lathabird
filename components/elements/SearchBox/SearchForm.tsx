"use client";

import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import SearchBox from "@/components/elements/SearchBox/SearchBox";
import { CityList } from "@/lib/data";
import { generateMonthYearList } from "@/lib/utils";

export default function SearchForm() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setValue,
  } = useForm()

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4"
    >
      <div>
        <label htmlFor="fromPlace" className="form-label font-medium text-slate-900 dark:text-white">From:</label>
        <div className="w-[198px] mt-2">
          <input
            type="text"
            className="hidden"
            {...register("fromPlace", {
              required: "From places is required",
            })}
          />
          <div className="w-full min-h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
            <SearchBox
              placeholder="City/Country"
              onChange={(value: string) => {setValue("fromPlace", value)}}
              sourceList={CityList}
            />
          </div>
          {errors.fromPlace && <p className="text-red-500 mt-2">{`${errors.fromPlace.message}`}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="toPlace" className="form-label font-medium text-slate-900 dark:text-white">To:</label>
        <div className="w-[198px] mt-2">
          <input
            type="text"
            className="hidden"
            {...register("toPlace")}
          />
          <div className="w-full min-h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
            <SearchBox
              placeholder="Anywhere"
              onChange={(value: string) => {setValue("toPlace", value)}}
              sourceList={CityList}
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="monthYear" className="form-label font-medium text-slate-900 dark:text-white">When:</label>
        <div className="w-[198px] mt-2">
          <input
            type="text"
            className="hidden"
            {...register("monthYear")}
          />
          <div className="w-full min-h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
            <SearchBox
              placeholder="All upcoming months"
              onChange={(value: string) => {setValue("monthYear", value)}}
              sourceList={generateMonthYearList()}
              dataType="static"
            />
          </div>
        </div>
      </div>
      <div>Show past deals</div>
      <div><Button type="submit" disabled={isSubmitting}>Search</Button></div>

      
      
    </form>
  )
}
