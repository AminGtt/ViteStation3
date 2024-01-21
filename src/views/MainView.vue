<script setup>
// import { useRouter } from 'vue-router' ---- Keep this as exemple of useRouter()
import router from "../router/router";
import { useEventListener } from '@vueuse/core';

import { useWelcomeStore } from '../stores/WelcomeStore';
import { useSelectedIndexStore } from '../stores/SelectedIndexStore';
import { useColumnsStore } from '../stores/ColumnsStore';
import { useRowsStore } from '../stores/RowsStore';

import XmbColumn from '../components/XmbColumnComponent.vue'
import Clock from '../components/ClockComponent.vue'
import { onMounted } from "vue";

const welcomeStore = useWelcomeStore(),
selectedIndexStore = useSelectedIndexStore(),
columnsStore = useColumnsStore(),
rowsStore = useRowsStore();


if (welcomeStore.isWelcomeValid === false) {
    //useRouter().push('welcome') ---- Keep this as exemple of useRouter()
    router.push('/welcome');
};

const navSound = new Audio('./src/assets/sounds/nav.mp3');

let xmbMenu = '',
xmbCols = '',
leftValMenu = 29,
topValRow = 0;

onMounted(()=>{
    xmbMenu = document.getElementById('xmb');
    xmbCols = document.querySelectorAll('.xmb_col_body');

    xmbMenu.style.left = leftValMenu+'%';

    return xmbMenu, xmbCols
})


function playNavSound() {
    navSound.cloneNode(true).play();
};

useEventListener(document.body, 'keydown', (e) => {
    if(e.key === 'ArrowRight'){
        playNavSound();
        e.preventDefault();
        
        right();
    }
    else if(e.key === 'ArrowLeft'){
        playNavSound();
        e.preventDefault();
        
        left();
    }
    else if(e.key === 'ArrowDown'){
        playNavSound();
        e.preventDefault();

        down();
    }
    else if(e.key === 'ArrowUp'){
        playNavSound();
        e.preventDefault();

        up();
    }
    else if(e.key === 'Enter'){
        playNavSound();
        e.preventDefault();
        
        open();
    }
    else if(e.key === 'Escape'){
        playNavSound();
        e.preventDefault();
        
        close();
    }
});

function right() { // left: -10%
    moveMenu('-', columnsStore.cols.length)
    
    selectedIndexStore.changeColIndex('+', columnsStore.cols.length);
}

function left() { // left: +10%
    moveMenu('+')
    
    selectedIndexStore.changeColIndex('-');
}

function down() { // top: -110px && -220 for the one that go top
    moveRows('-', rowsStore.maxRowsLength[selectedIndexStore.selectedColIndex])
    
    selectedIndexStore.changeRowIndex('+', rowsStore.maxRowsLength[selectedIndexStore.selectedColIndex]);
}

function up() { // top: +110px && +220 for the one that go top
    moveRows('+')
    
    selectedIndexStore.changeRowIndex('-');
}

function open() {
    console.log('open');
}

function close() {
    console.log('close');
}

function moveRows(sign, maxRowsForCurrentCol) {

    if (sign == '-' && selectedIndexStore.selectedRowIndex < maxRowsForCurrentCol-1 ) {
        topValRow -= 110
    } else if (sign == '+' &&  selectedIndexStore.selectedRowIndex > 0 ) {
        topValRow += 110
    }

    xmbCols[selectedIndexStore.selectedColIndex].style.top = topValRow+'px'
}

function moveMenu(sign, maxCol) {

    topValRow = 0

    if (sign == '-' && selectedIndexStore.selectedColIndex < maxCol-1) {
        leftValMenu -= 10;
    } else if (sign == '+' && selectedIndexStore.selectedColIndex > 0) {
        leftValMenu += 10
    }
    xmbMenu.style.left = leftValMenu+'%';
    xmbCols[selectedIndexStore.selectedColIndex].style.top = topValRow+'px';
}

</script>

<template>

    <Clock />

    <main class="menu" id="menu">
        <p id="wip">
            WIP
        </p>
        <section id="xmb">

            <XmbColumn v-for="(col, index) in columnsStore.cols" :key="index" :wantedCol="col" :index="index"/>

        </section>

    </main>
</template>

<style scoped lang="scss">

#wip{
    text-align: center;
    font-size: 70px;
    position: relative;
    top: 300px;
}

main {
    height: inherit;
    // opacity: 0;
    transition: ease 500ms;

    li,h1,p {
        opacity: 80%;
    }
}

#xmb {
    display: flex;
    position: relative;
    top: 27%;
    //left: 29%;
    transition: left .5s ease;
    
}

</style>