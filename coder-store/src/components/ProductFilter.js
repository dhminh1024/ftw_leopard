import { Box, Button, Stack, Typography } from "@mui/material";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import React from "react";
import { FMultiCheckbox, FRadioGroup } from "./form";

const FILTER_GENDER_OPTIONS = ["Men", "Women", "Kids"];
const FILTER_CATEGORY_OPTIONS = ["All", "Shose", "Apparel", "Accessories"];
const FILTER_PRICE_OPTIONS = [
  { value: "below", label: "Below $25" },
  { value: "between", label: "Between $25 - $75" },
  { value: "above", label: "Above $75" },
];

function ProductFilter({ resetFilter }) {
  return (
    <Stack spacing={3} sx={{ p: 3, width: 150 }}>
      <Stack>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Gender
        </Typography>
        <FMultiCheckbox name="gender" options={FILTER_GENDER_OPTIONS} />
      </Stack>

      <Stack>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Category
        </Typography>
        <FRadioGroup name="category" options={FILTER_CATEGORY_OPTIONS} />
      </Stack>

      <Stack>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Price
        </Typography>
        <FRadioGroup
          name="priceRange"
          options={FILTER_PRICE_OPTIONS.map((item) => item.value)}
          getOptionLabel={FILTER_PRICE_OPTIONS.map((item) => item.label)}
        />
      </Stack>

      <Box>
        <Button
          variant="outlined"
          onClick={() => resetFilter()}
          startIcon={<ClearAllIcon />}
        >
          Clear All
        </Button>
      </Box>
    </Stack>
  );
}

export default ProductFilter;
