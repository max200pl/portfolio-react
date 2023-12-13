export type SetStateAction<S> = S | ((prevState: S) => S);

export interface TypeAction {
    type: "update" | "create" | "delete";
}
