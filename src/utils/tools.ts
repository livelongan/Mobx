import { GridLayoutColumnProps } from '@progress/kendo-react-layout'
import { FIELD_MIN_WIDTH, MAX_GRID_COLUMN } from '../constants'

export const closest = (element: HTMLElement, selector: string) => {
    return element.closest(selector)
}

export const getId = (id: string, page = '') => {
    return `${page}${id}`.replace(/\s/g, '').toLocaleLowerCase()
}

export const getGridLayout = (width: number, column = MAX_GRID_COLUMN, min = FIELD_MIN_WIDTH) => {
    const OFFSET = 32
    const gap = 12
    if (width > OFFSET + gap) {
        const all = width - OFFSET
        const cols: GridLayoutColumnProps[] = []

        const limited = Math.floor((all - gap) / (min + gap))
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
