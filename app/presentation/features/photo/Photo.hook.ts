import {useEffect, useRef, useState} from 'react';

import {of} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';

import {container, TYPES} from 'di';
import {GetPhotoUseCase} from 'domain/usecases/photo/GetPhotoUseCase';
import {Hit} from 'domain/entities/photo';

export function useBloc() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Array<Hit>>([]);
  const [keyword, setKeyword] = useState<string>();
  const [canLoadMore, setLoadMore] = useState<boolean>(false);
  const getPhotoUseCase = container.get<GetPhotoUseCase>(TYPES.GetPhotoUseCase);
  let currentPageRef = useRef<number>(1);
  let appendPhotoRef = useRef<Array<any>>([]);

  useEffect(() => {
    appendPhotoRef.current = [];
    getPhotoPixabay(1);
    return () => {
      appendPhotoRef.current = [];
    };
  }, []);

  const getPhotoPixabay = (page: number, query?: string) => {
    setLoading(true);
    const resultPhoto = of(
      getPhotoUseCase.execute({page: page, query: query}),
    ).pipe(exhaustMap(value => value));
    resultPhoto.subscribe({
      next: (result: any) => {
        if (result.status === 'success') {
          if (page === 1) {
            appendPhotoRef.current = result?.result?.hits;
            setPhotos(result?.result?.hits);
          } else {
            appendPhotoRef.current.push(...result?.result?.hits);
            setPhotos(appendPhotoRef.current);
          }
          if (result?.result?.hits.length < 20) {
            setLoadMore(false);
          } else {
            setLoadMore(true);
          }
        }
      },
      complete: () => {
        setLoading(false);
      },
    });
  };

  const onLastValueChange = (text?: string) => {
    currentPageRef.current = 1;
    setKeyword(text);
    getPhotoPixabay(1, text);
  };

  const onEndReached = () => {
    if (canLoadMore) {
      currentPageRef.current += 1;
      getPhotoPixabay(currentPageRef.current, keyword);
    }
  };

  const onRefresh = () => {
    currentPageRef.current = 1;
    getPhotoPixabay(currentPageRef.current, keyword);
  };

  return {
    isLoading,
    photos,
    onLastValueChange,
    onEndReached,
    onRefresh,
  };
}
