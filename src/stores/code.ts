import { writable, type Writable } from 'svelte/store'

export const pyCode: Writable<string> = writable('')
export const jsCode: Writable<string> = writable('')