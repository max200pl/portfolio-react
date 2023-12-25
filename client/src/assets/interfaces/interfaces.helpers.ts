export type SetStateAction<S> = S | ((prevState: S) => S);

