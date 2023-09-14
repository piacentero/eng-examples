export interface IMovie {
  id: string;
  name: string;
  director: string;
  genre: string;
  releaseDate: number;
  runningTime: number;
  actors: IActor[];
}

export interface IActor {
  name: string;
  surname: string;
}
