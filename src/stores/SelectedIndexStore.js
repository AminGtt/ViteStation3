import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectedIndexStore = defineStore('selectedIndex', () => {
    const selectedRowIndex = ref(0),
    selectedColIndex = ref(0);

    function changeRowIndex(sign, maxRowForCurrentCol) {
        if (sign == '-' && selectedRowIndex.value > 0) {
            selectedRowIndex.value--
        } else if (sign == '+' && selectedRowIndex.value < maxRowForCurrentCol - 1) {
            selectedRowIndex.value++
        }
    }

    function changeColIndex(sign, maxCol) {
        if (sign == '-' && selectedColIndex.value > 0) {
            selectedColIndex.value--
            selectedRowIndex.value = 0 // reset row between each col
        } else if (sign == '+' && selectedColIndex.value < maxCol-1) {
            selectedColIndex.value++
            selectedRowIndex.value = 0 // reset row between each col
        }
    }

    return {
        selectedRowIndex,
        selectedColIndex,
        changeRowIndex,
        changeColIndex,
    }
})
