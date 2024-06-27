"use client";

import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import SearchBox from "@/components/elements/SearchBox/SearchBox";
import SearchCitiesBox from "./SearchCitiesBox";
import { generateMonthYearList } from "@/lib/utils";

export default function SearchForm() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      fromPlace: "",
      toPlace: "",
      monthYear: "",
      showPastDeal: true,
    }
  })

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4"
    >
      <div className="flex items-center space-x-2">
        <label htmlFor="fromPlace" className="form-label font-medium text-slate-900 dark:text-white">From</label>
        <div className="w-full mt-2">
          <input
            type="text"
            className="hidden"
            {...register("fromPlace", {
              required: "From places is required",
            })}
          />
          <div className="w-full min-h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
            <SearchCitiesBox
              placeholder="City/Country"
              onChange={(value: string) => {setValue("fromPlace", value)}}
            />
          </div>
          {errors.fromPlace && <p className="text-red-500 mt-2">{`${errors.fromPlace.message}`}</p>}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="toPlace" className="form-label font-medium text-slate-900 dark:text-white">To</label>
        <div className="w-full mt-2">
          <input
            type="text"
            className="hidden"
            {...register("toPlace")}
          />
          <div className="w-full min-h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
            <SearchCitiesBox
              placeholder="Anywhere"
              onChange={(value: string) => {setValue("toPlace", value)}}  
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="monthYear" className="form-label font-medium text-slate-900 dark:text-white">When</label>
        <div className="w-full mt-2">
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
      <div className="flex justify-between items-center space-x-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="show-pass-deal"
            {...register("showPastDeal")}
            defaultChecked={true}
            onCheckedChange={(value: boolean) => {
              setValue("showPastDeal", value)}
            }
          />
          <label htmlFor="show-pass-deal" className="select-none text-slate-900 dark:text-white">Show past deals</label>
        </div>
        <div><Button type="submit" disabled={isSubmitting}>Search</Button></div>
      </div>
    </form>
  )
}
