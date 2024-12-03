import { GridLayoutColumnProps } from '@progress/kendo-react-layout'
import { FIELD_GAP, FIELD_MIN_WIDTH, FIELD_MAX_COLUMN } from '../constants'

export const closest = (element: HTMLElement, selector: string) => {
    return element.closest(selector)
}

export const getId = (id: string, page = 'page') => {
    return `${page}-${id}`.replace(/\s/g, '').toLocaleLowerCase()
}

export const getGridLayout = (width: number, column = FIELD_MAX_COLUMN, min = FIELD_MIN_WIDTH) => {
    const OFFSET = 32
    const gap = FIELD_GAP
    if (width > OFFSET + gap) {
        const cols: GridLayoutColumnProps[] = []
        const all = width - OFFSET

        const limited = Math.floor((all - gap) / (min + gap)) ?? 1
        const col = limited > column ? column : limited
        const field = (all - gap * (col - 1)) / col

        for (let count = 0; count < col; count++) {
            cols.push({
                width: col === 1 ? '100%' : `${(field / all) * 100}%`,
            })
        }
        return {
            max: col,
            cols,
        }
    }
    return null
}
