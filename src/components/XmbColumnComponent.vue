<script setup>
import { useSelectedIndexStore } from '../stores/SelectedIndexStore';

import XmbColBody from './XmbColBodyComponent.vue'

const selectedIndexStore = useSelectedIndexStore();


const props = defineProps(['wantedCol', 'index'])

</script>

<template>
    <ul class="xmb_col">
        <ul class="xmb_col_header">
            <img :src='`./src/assets/icons/xmb-icons/`+props.wantedCol+`/xmb-`+props.wantedCol+`.png`' alt="xmb_home" class="xmb_col_icons">

            <li class="xmb_col_title">{{props.wantedCol.charAt(0).toUpperCase()+props.wantedCol.slice(1)}}</li>
        </ul>
            
        <XmbColBody :class="{active: props.index == selectedIndexStore.selectedColIndex}" :wantedRow="props.wantedCol"/>
        
    </ul>
</template>

<style lang="scss">

.xmb_col{
    position: relative;
    width: 10%;
    margin-right: 10px;
}

.xmb_col_header{
    list-style: none;
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
    
}

.xmb_col_icons {
    position: relative;
    height: 90px;
    width: 90px;
    object-fit: contain;
    margin-bottom: 15px;
}

.xmb_col_title{
    //visibility: hidden;
    font-size: 18px;
}

.active{
    visibility: visible;
}

</style>