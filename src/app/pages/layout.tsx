'use client'
import Navbar from "../components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";



export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, 
      },
    },
  });
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </div>
  );
}