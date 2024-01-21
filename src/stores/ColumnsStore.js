import { defineStore } from 'pinia'
import { ref } from 'vue'

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
