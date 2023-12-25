type DirtyFields<T> = Partial<Readonly<{
    [K in keyof T]?: boolean | [] | { group?: boolean; value?: boolean }[];
}>>;

export const getDirtyFields = <T>(
    formValues: Partial<T>,
    dirtyItems: DirtyFields<T>,
): Partial<T> => {
    const dirtyFields: Partial<T> = {};

    for (const key in dirtyItems) {
        const value = dirtyItems[key];
        if (value) {
            dirtyFields[key] = formValues[key];
        }
    }

    return dirtyFields;
};
