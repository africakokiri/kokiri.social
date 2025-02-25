"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";

const queryClient = new QueryClient();

export const ReactQueryProvider = ({
  children
}: {
  readonly children: ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
