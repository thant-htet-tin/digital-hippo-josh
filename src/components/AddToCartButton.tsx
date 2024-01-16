"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AddToCartButton = () => {
  const [isSuccess, setIsSuccess] = useState<Boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      size="lg"
      className="w-full"
      onClick={() => {
        setIsSuccess(true);
      }}
    >
      {isSuccess ? "Added" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;