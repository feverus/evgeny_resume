import * as I from '~/store/storeInterfaces';

export type StateType = {
    sample: number;
};

export type ApiType = {
    sampleApi: () => void;
};

export type UseMyWorks = () => [
    state: StateType,
    api: ApiType
];

/** 
 * @param {string} name - заголовок
 * @param {string} text - html код с описанием
 * @param {string} platform - обычно web
 * @param {string[]} tech - использованный в работе стек в виде массива
 * @param {string} link - полная ссылка на работу
 * @param {string} git_link - ссылка на гитххаб без `https://github.com`
 * @param {string[]} screenshots = массив скринов
 *  */

export interface WorkItemProps {
    name: string,
    text: string,
    platform: string,
    tech: string[],
    link: string,
    git_link: string,
    screenshots: string[],
}