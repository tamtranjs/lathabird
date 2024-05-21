"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TripSchema } from "@/models/trip";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import SearchBox from "@/components/elements/SearchBox/SearchBox";

export default function SearchForm() {

  const form = useForm<z.infer<typeof TripSchema>>({
    resolver: zodResolver(TripSchema),
    defaultValues: {
      fromPlaces: [],
      toPlaces: [],
      dates: [],
    }
  });

  const onSubmit = (values: z.infer<typeof TripSchema>) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fromPlaces"
          rules={{
            required: "From is required",
            validate: value => value.length <= 5 || "From can have at most 5 places"
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>From</FormLabel>
              <FormControl>
                {/* <Input placeholder="City/Country" {...field} /> */}
                <div className="w-[198px] border rounded">
                  <SearchBox/>
                </div>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
