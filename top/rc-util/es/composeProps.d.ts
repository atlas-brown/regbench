declare function composeProps<T extends Record<string, any>>(originProps: T, patchProps: Partial<T>, isAll?: boolean): T;
export default composeProps;
