<script setup>
import XmbRow from './XmbRowComponent.vue'

import { useRowsStore } from '../stores/RowsStore';

const props = defineProps(['wantedRow']),
rowsStore = useRowsStore();

    
rowsStore.maxRowsLength.push(rowsStore.rows[props.wantedRow].length)

</script>

<template>
    
    <ul class="xmb_col_body">   
             
        <XmbRow v-for="(row, index) in rowsStore.rows[props.wantedRow]" :key="index" :row="row" :index="index" />

    </ul>

</template>

<style lang="scss">

.xmb_col_body{
    visibility: hidden;
    position: relative;
    transition: top .5s;
    top: 0;
}
    
</style>