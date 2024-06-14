// hooks/useCustomSWR.ts
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

// Define a fetcher function
// Define a custom error class
class FetchError extends Error {
  status: number;
  info: any;

  constructor(message: string, status: number, info: any) {
    super(message);
    this.status = status;
    this.info = info;
  }
}

// Update the fetcher function to use the custom error class
const fetcher = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const info = await response.json();
    throw new FetchError('An error occurred while fetching the data.', response.status, info);
  }
  return response.json();
};

// Define types for the custom hook
interface CustomSWRResponse<T> extends SWRResponse<T, any> {
  isLoading: boolean;
  isError: any;
}

// Create a custom hook
const useCustomSWR = <T>(endpoint: string, options: SWRConfiguration & { fetcherOptions?: RequestInit } = {}): CustomSWRResponse<T> => {
  const { data, error, mutate, isValidating } = useSWR<T>(endpoint, (url) => fetcher(url, options.fetcherOptions), options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
    error,
    isValidating,
  };
};

export default useCustomSWR;
