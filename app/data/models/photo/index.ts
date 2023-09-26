export interface Hit {
  id?: number;
  pageURL?: string;
  type?: string;
  tags?: string;
  previewURL?: string;
  previewWidth?: number;
  previewHeight?: number;
  webformatURL?: string;
  webformatWidth?: number;
  webformatHeight?: number;
  largeImageURL?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageSize?: number;
  views?: number;
  downloads?: number;
  collections?: number;
  likes?: number;
  comments?: number;
  userId?: number;
  user?: number;
  userImageURL?: number;
}

export interface Photos {
  total?: number;
  totalHits?: number;
  hits?: Array<Hit>;
}
