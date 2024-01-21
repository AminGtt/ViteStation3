import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRowsStore = defineStore('rows', () => {
    let maxRowsLength = [];
    const rows = {
        home: [
            {text: 'Power'},
            {text: 'Me'},
            {text: 'Gandalf'},
            {text: 'Add User'}
        ],
        settings: [
            {
                text: 'Search updates', 
                info: 'Update the VS3 system'
            },
            {
                text: 'System settings', 
                info: 'Adjust settings for this VS3 system'
            },
        ],
        photos: [
            {
                text: 'My photos',
            },
        ],
        musics: [
            {
                text: 'My musics',
            },
        ],
        videos: [
            {
                text: 'My videos',
            },
        ],
        games: [
            {
                text: 'My games',
            },
            {
                text: 'My saves',
            },
        ],
        web: [
            {
                text: 'Web browser',
            },
            {
                text: 'Downloads',
            },
            {
                text: 'Playstation store',
            },
        ],
        contacts: [
            {
                text: 'Friends',
            },
            {
                text: 'Add a friend',
            },
        ],
    };

    return {
        rows,
        maxRowsLength
    }
})
