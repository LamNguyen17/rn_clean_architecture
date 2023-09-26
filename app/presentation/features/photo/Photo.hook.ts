import {useEffect, useState} from 'react';

import {of} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';

import {container, TYPES} from 'di';
import {GetPhotoUseCase} from 'domain/usecases/photo/GetPhotoUseCase';

export function useBloc() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [photos, setPhotos] = useState([]);
  const getPhotoUseCase = container.get<GetPhotoUseCase>(TYPES.GetPhotoUseCase);

  useEffect(() => {
    getPhotoPixabay();
  }, []);

  const getPhotoPixabay = () => {
    setLoading(true);
    const result = of(getPhotoUseCase.execute()).pipe(
      exhaustMap(value => value),
    );
    result.subscribe((result: any) => {
      setLoading(false);
      if (result.status === 'success') {
        setPhotos(result?.result?.hits || []);
      }
    });
  };

  return {
    photos,
    isLoading,
  };
}
