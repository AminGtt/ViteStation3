import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columns', () => {
    const cols = [
        'home',
        'settings',
        'photos',
        'musics',
        'videos',
        'games',
        'web',
        'contacts'
    ];

    return {
        cols,
    }
})
