import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    console.log(res.json());
    return res.json();
  });

function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useFetch;
