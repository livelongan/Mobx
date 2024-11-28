export const closest = (element: HTMLElement, selector: string) => {
    return element.closest(selector)
}
export const getId = (id: string, page = '') => {
    return `${page}${id}`.replace(/\s/g, '').toLocaleLowerCase()
}
