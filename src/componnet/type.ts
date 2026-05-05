export type Game = {
  id?: number;
  img?: string;
  name?: string;
  desc?: string;
  fullDesc?: string;
  youtube?: string;
};

export type GalleryItem = {
  img: string | undefined;
  id: number;
  type: "Top Games" | "Trend Games" | "Wallpaper";
  count: number;
  image: string;
};