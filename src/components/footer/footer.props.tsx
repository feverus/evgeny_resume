import * as I from '~/store/storeInterfaces';

export type StateType = {
    sample: number;
};

export type ApiType = {
    sampleApi: () => void;
};

export type UseFooter = () => [
    state: StateType,
    api: ApiType
];