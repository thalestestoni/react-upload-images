import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

// import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { api } from '../services/api';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

type FetchImagesResponse = {
  after?: string;
  data: {
    ts: number,
    id: string;
    title: string;
    description: string;
    url: string;
  }[]
}

export default function Home(): JSX.Element {
  const fetchImages = async ({ pageParam = null }) => {
    return await api.get<FetchImagesResponse>('/api/images', { 
      params: { after: pageParam }
    }).then(response => response.data)
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetched
  } = useInfiniteQuery(
    'images',
    fetchImages, 
    {
      getNextPageParam: (lastPage) => lastPage.after ?? null
    }
  );

  const formattedData = useMemo(() => {
      return isFetched 
        ? data.pages.map(image => image.data).flat() 
        : null
  }, [data]);

  const [setRef] = useIntersectionObserver({ 
    onIntersect: fetchNextPage, 
    enabled: hasNextPage
  });

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
      <>
        <Header />

        <Box maxW={1120} px={20} mx="auto" my={20}>
          <CardList cards={formattedData} />
          
          { hasNextPage && (
            <Button
              ref={setRef}
              onClick={() => fetchNextPage()}
              mt="40px"
            >
              { isFetchingNextPage
                ? 'Carregando...'
                : 'Carregar mais'}
            </Button>
          )}
        </Box>
      </>
    );
}
