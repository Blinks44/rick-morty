import { keepPreviousData, useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import { axiosClient } from "@/lib/api";
import type { Characters } from "@/lib/types";

// const fetchData = async (filter: string) => {
//   let url = `https://rickandmortyapi.com/api/character/${filter ? filter : ""}`;
//   try {
//     return await axios.get(url).then((response) => response.data);
//   } catch (ex) {
//     console.log(ex);
//   }
// };

export const useCharactersQuery = (enabled = true) => {
  const filtersRef = ref("");
  const currentPage = ref(1);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: (): Promise<Characters> =>
      axiosClient.get(`/character/?page=${currentPage.value}`).then((response) => response.data),
    enabled,
    placeholderData: keepPreviousData,
  });

  function updateFilters(filters: any) {
    filtersRef.value = filters;
    refetch();
  }

  function prevPage() {
    currentPage.value = Math.max(currentPage.value - 1, 1);
  }

  function nextPage() {
    currentPage.value += 1;
  }

  return {
    data,
    isLoading,
    isError,
    error,
    currentPage,
  };
};
