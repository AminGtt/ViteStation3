import { defineStore } from 'pinia'

export const useRowsStore = defineStore('rows', () => {
    let maxRowsLength = [];
    const rows = {
        home: [
            {
                icon: 'power',
                text: 'Power'
            },
            {
                icon: 'user',
                text: 'Me'
            },
            {
                icon: 'user',
                text: 'Gandalf'
            },
            {
                icon: 'adduser',
                text: 'Add User'
            }
        ],
        settings: [
            {
                icon: 'update',
                text: 'Search updates', 
                info: 'Update the VS3 system'
            },
            {
                icon: 'background',
                text: 'System settings', 
                info: 'Adjust settings for this VS3 system'
            },
        ],
        photos: [
            {
                icon: 'folder',
                text: 'My photos',
            },
        ],
        musics: [
            {
                icon: 'folder',
                text: 'My musics',
            },
        ],
        videos: [
            {
                icon: 'folder',
                text: 'My videos',
            },
        ],
        games: [
            {
                icon: 'folder',
                text: 'My games',
            },
            {
                icon: 'folder',
                text: 'My saves',
            },
        ],
        web: [
            {
                icon: 'browser',
                text: 'Web browser',
            },
            {
                icon: 'browser',
                text: 'Downloads',
            },
            {
                icon: 'browser',
                text: 'Playstation store',
            },
        ],
        contacts: [
            {
                icon: 'friend',
                text: 'Merry',
            },
            {
                icon: 'addfriend',
                text: 'Add a friend',
            },
        ],
    };

    return {
        rows,
        maxRowsLength
    }
})
