"use client"

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { getFilterValues } from "./filteringOptions";
import { IFilterValues } from "@types";
import { ReadonlyURLSearchParams } from "next/navigation";

export const findProducts = async (filterValues: IFilterValues, router: AppRouterInstance, pathname: string, searchParams: ReadonlyURLSearchParams) => {
  const values = getFilterValues(filterValues);
  
  // Convert searchParams to a mutable URLSearchParams object
  const mutableSearchParams = new URLSearchParams(searchParams.toString());

  values.forEach(({ value, name }) => {
    if (value && filterValues[name]) {
      // Allow URL to only show selected query, not all.
      if (value) {
        mutableSearchParams.set(name, value.toString());
        if(name === 'category') mutableSearchParams.delete('brand');
      } else {
        mutableSearchParams.delete(name);
      }
    }
    if(value === '') mutableSearchParams.delete(name);
  });

  // Convert mutableSearchParams back to a string
  const updatedSearchParams = mutableSearchParams.toString();

  // Use router.push with the updated searchParams
  router.push(`${pathname}?${updatedSearchParams}`);
};
