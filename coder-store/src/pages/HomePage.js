import { Alert, Box, Container, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import apiService from "../app/apiService";
import LoadingScreen from "../components/LoadingScreen";
import Logo from "../components/Logo";
import ProductFilter from "../components/ProductFilter";
import ProductSearch from "../components/ProductSearch";
import ProductSort from "../components/ProductSort";
import { useForm } from "react-hook-form";
import { FormProvider } from "../components/form";
import orderBy from "lodash/orderBy";

const defaultValues = {
  gender: [],
  category: "All",
  priceRange: "",
  sortBy: "featured",
  searchQuery: "",
};

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const methods = useForm({ defaultValues });
  const { watch, reset } = methods;
  // derived state
  const filters = watch();
  console.log(filters);
  const filteredProducts = applyFilter(products, filters);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await apiService.get("/products");
        setProducts(response.data);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <Stack>
        <FormProvider methods={methods}>
          <ProductFilter resetFilter={reset} />
        </FormProvider>
      </Stack>
      <Stack sx={{ flexGrow: 1 }}>
        <FormProvider methods={methods}>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <ProductSearch />
            <ProductSort />
          </Stack>
        </FormProvider>
        <Box sx={{ position: "relative", height: 1 }}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <ProductList products={filteredProducts} />
              )}
            </>
          )}
        </Box>
      </Stack>
    </Container>
  );
}

function applyFilter(products, filters) {
  let filteredProducts = products;

  if (filters.gender.length) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.gender.includes(product.gender)
    );
  }

  if (filters.category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filters.category
    );
  }

  if (filters.priceRange) {
    filteredProducts = filteredProducts.filter((product) => {
      if (filters.priceRange === "below") {
        return product.price < 25;
      }
      if (filters.priceRange === "between") {
        return product.price >= 25 && product.price <= 75;
      }
      if (filters.priceRange === "above") {
        return product.price > 75;
      }
    });
  }

  if (filters.searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    );
  }

  if (filters.sortBy === "featured") {
    filteredProducts = orderBy(filteredProducts, ["sold"], ["desc"]);
  }
  if (filters.sortBy === "newest") {
    filteredProducts = orderBy(filteredProducts, ["createdAt"], ["desc"]);
  }
  if (filters.sortBy === "priceDesc") {
    filteredProducts = orderBy(filteredProducts, ["price"], ["desc"]);
  }
  if (filters.sortBy === "priceAsc") {
    filteredProducts = orderBy(filteredProducts, ["price"], ["asc"]);
  }

  return filteredProducts;
}

export default HomePage;
