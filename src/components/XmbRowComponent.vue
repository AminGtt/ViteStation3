<script setup>
import { useSelectedIndexStore } from '../stores/SelectedIndexStore';


const selectedIndexStore = useSelectedIndexStore();
const props = defineProps(['row', 'index', 'currentCol'])

let iconPath = props.currentCol.split(' ').join('')

</script>

<template>
    <ul class="xmb_row" id="welcomeTile" :class="{focus: props.index == selectedIndexStore.selectedRowIndex}">
        <img :src="'/xmb-icons/'+iconPath+'/xmb-'+iconPath+'-'+props.row.icon+'.png'" alt="xmb_folder" class="xmb_row_icons">
        <ul>
            <li class="xmb_row_text">{{ props.row.text }}</li>
            <li class="xmb_row_info" v-if="props.row.info">{{ props.row.info }}</li>
        </ul>

        <div id="maininfo" v-if="props.row.text == 'Power' && selectedIndexStore.selectedRowIndex == 0">
            <h1>Welcome to ViteStation 3!</h1>
            <p>
                Navigate through the XMB menu using the arrow keys to have a look around. <br>
                Updates are coming to make it even better and realistic 🔧 <br>
                <!-- Press Enter/Esc to open/close a menu. <br> -->
                <!-- You can also navigate with an Xbox controller. <br>
                Use the D-Pad
                <span>
                    <img class="details_main_icon d-pad" src="../assets/icons/xbox-keys/d-pad.png" alt="d-pad_icon">
                </span>
                to move and
                <span>
                    <img class="details_main_icon a-btn" src="../assets/icons/xbox-keys/Akey_xbox_controller.png"
                        alt="xbox_A_icon">
                </span>
                /
                <span>
                    <img class="details_main_icon b-btn" src="../assets/icons/xbox-keys/Bkey_xbox_controller.png"
                        alt="xbox_B_icon">
                </span> to open/close menus. -->
            </p>
            <p>Made with 💖 by Amin Gatta</p>
        </div>

    </ul>
</template>

<style lang="scss">

ul {
    list-style: none;
    display: inline;
}

.xmb_row{
    display: flex;
    align-items: center;
    margin: 0 0 40px 15px;
    scale: 0.9;
    position: relative;
    transition: top .5s;
    top: 0;
    white-space: nowrap;
}

.xmb_row_icons {
    position: relative;
    height: 70px;
    width: 70px;
    object-fit: contain;
}

.xmb_row_text{
    margin-left: 20px;
    
}

.xmb_row_info{
    margin-left: 20px;
    font-size: 14px;
}

#maininfo{
    // opacity: 0;
    position: absolute;
    width: 350%;
    height: auto;
    top: 0;
    left: 250px;
    padding: 20px;
    border: 1px solid;
    border-radius: 15px;
    z-index: -1;
    text-shadow: none;
    background-color: dodgerblue;
    transition: opacity .1s ease;
    font-size: 18px;
    white-space: normal;
    line-height: 2em;
    
    h1{
        border-bottom: 2px solid white;
        padding: 10px 0 20px;
    }

    .d-pad, .a-btn, .b-btn{
        position: relative;
        top: 5px;
        margin: 0;
    }
}

.focus{
    animation: glow 1s ease-in-out infinite alternate;
    scale: 1;
}

</style>