export type Cats = {
  id: string,
  cat: string,
  value: string,
  upside: boolean,
}

export type CatsArray = Array<Cats | null>;