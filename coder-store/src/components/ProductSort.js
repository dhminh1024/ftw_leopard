import React from "react";
import { FSelect } from "./form";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "priceDesc", label: "Price: High-Low" },
  { value: "priceAsc", label: "Price: Low-High" },
];
function ProductSort() {
  return (
    <div>
      <FSelect name="sortBy" size="small" sx={{ width: 300 }}>
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FSelect>
    </div>
  );
}

export default ProductSort;
