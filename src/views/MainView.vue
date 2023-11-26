<script setup>
import SettingsComponant from '../components/SettingsComponant.vue';
import ClockComponant from "../components/ClockComponant.vue";
import { useWelcomeStore } from '../stores/WelcomeStore';
// import { useRouter } from 'vue-router'
import router from "../router/index.js";

const welcomeStore = useWelcomeStore();

if (welcomeStore.isWelcomeValid === false) {
    //useRouter().push('welcome')
    router.push('/welcome');
}

</script>

<template>

    <ClockComponant />

    <main class="menu" id="menu">
        <p id="wip">
            <router-link to="/disclaimer">Link</router-link>
        </p>
        <section id="xmb">

            <ul class="xmb_col">
                <ul class="xmb_col_header">
                    <img src="../assets/icons/xmb_home.png" alt="xmb_home" class="xmb_col_icons">
                    <li class="xmb_col_title">Home</li>
                </ul>

                <ul class="xmb_row active">
                    <!-- if one row need infowrapper, the full col need infowrapper div
                    to avoid bugs. -->

                    <!-- to "activate" the infowrapper display, 
                    "infos" class is needed in "xmb_row_content" <ul> -->
                    <ul class="xmb_row_content focus" id="welcomeTile"> 
                        <img src="../assets/icons/xmb_welcome.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Welcome!</li>
                        </ul>

                        <div class="infowrapper">
                        </div>

                        <div id="maininfo">
                            <h1>Welcome to AminStation 3!</h1>
                            <p>
                                Navigate through the XMB menu using the arrow keys to have a look around. <br>
                                Press Enter/Esc to open/close a menu. <br>
                                You can also navigate with an Xbox controller. <br>
                                Use the D-Pad 
                                <span>
                                    <img class="details_main_icon d-pad" src="../assets/icons/d-pad.png" alt="d-pad_icon">
                                </span> 
                                to move and 
                                <span>
                                    <img class="details_main_icon a-btn" src="../assets/icons/Akey_xbox_controller.png" alt="d-pad_icon">
                                </span>
                                /
                                <span>
                                    <img class="details_main_icon b-btn" src="../assets/icons/Bkey_xbox_controller.png" alt="d-pad_icon">
                                </span> to open/close menus.
                            </p>
                            <p>Made by Amin Gatta</p>
                        </div>

                    </ul>

                    <ul class="xmb_row_content infos">
                        <img src="../assets/icons/user.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Who am I?</li>
                        </ul>

                        <div class="infowrapper">
                            <h1>Test</h1>
                            <p>Toto tata</p>
                        </div>
                    </ul>
                </ul>
            </ul>

            <ul class="xmb_col">
                <ul class="xmb_col_header">
                    <img src="../assets/icons/xmb_skills.png" alt="xmb_contact" class="xmb_col_icons">
                    <li class="xmb_col_title">Compétences</li>
                </ul>

                <ul class="xmb_row">
                    <ul class="xmb_row_content ">
                        <img src="../assets/icons/xmb_angular.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Angular</li>
                            <li class="xmb_row_info">My Angular skills</li>
                        </ul>

                        <div class="infowrapper">
                        </div>
                    </ul>


                    <ul class="xmb_row_content ">
                        <img src="../assets/icons/xmb_symfony.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Symfony</li>
                            <li class="xmb_row_info">My Symfony skills</li>
                        </ul>
                        
                        <div class="infowrapper">
                        </div>
                    </ul>


                    <ul class="xmb_row_content infos">
                        <img src="../assets/icons/xmb_docker.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Docker</li>
                            <li class="xmb_row_info">My Docker skills</li>
                        </ul>

                        <div class="infowrapper">
                            <h1>Test</h1>
                            <p>Toto tata</p>
                        </div>
                    </ul>
                    <ul class="xmb_row_content ">
                        <img src="../assets/icons/xmb_vr.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">WebXR</li>
                            <li class="xmb_row_info">My VR/AR skills</li>
                        </ul>

                        <div class="infowrapper">
                        </div>
                    </ul>
                </ul>
            </ul>

            <ul class="xmb_col">
                <ul class="xmb_col_header">
                    <img src="../assets/icons/xmb_projects.png" alt="xmb_projects" class="xmb_col_icons">
                    <li class="xmb_col_title">Projets</li>
                </ul>

                <ul class="xmb_row">
                    <ul class="xmb_row_content infos">
                        <img src="../assets/icons/xmb_folder.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">ISS live tracker</li>
                            <li class="xmb_row_info">Angular/TypeScript/Scss</li>
                        </ul>
                        

                        <div class="infowrapper">
                            <h1>Test</h1>
                            <p>Toto tata</p>
                        </div>
                    </ul>

                    <ul class="xmb_row_content">
                        <img src="../assets/icons/xmb_folder.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Projet 2</li>
                            <li class="xmb_row_info">My wonderfull project</li>
                        </ul>
                        
                        <div class="infowrapper">
                        </div>
                    </ul>


                    <ul class="xmb_row_content infos">
                        <img src="../assets/icons/xmb_folder.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Projet 3</li>
                            <li class="xmb_row_info">My wonderfull project</li>
                        </ul>
                        
                        <div class="infowrapper">
                            <h1>Test</h1>
                            <p>Toto tata</p>
                        </div>
                    </ul>


                    <ul class="xmb_row_content">
                        <img src="../assets/icons/xmb_folder.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Projet 4</li>
                            <li class="xmb_row_info">My wonderfull project</li>
                        </ul>
                        
                        <div class="infowrapper">
                        </div>
                    </ul>

                </ul>
            </ul>

            <ul class="xmb_col">
                <ul class="xmb_col_header">
                    <img src="../assets/icons/xmb_contact.png" alt="xmb_contact" class="xmb_col_icons">
                    <li class="xmb_col_title">Contacts</li>
                </ul>

                <ul class="xmb_row">
                    <ul class="xmb_row_content social">
                        <img src="../assets/icons/xmb_linkedin.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">
                                <a hidden href="https://www.linkedin.com/in/amin-gatta-4547a41b7/"></a>
                                Linkedin
                            </li>
                            <li class="xmb_row_info">Add me &#128512;</li>
                        </ul>
                    </ul>

                    <ul class="xmb_row_content social">
                        <img src="../assets/icons/xmb_github.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">
                                <a hidden href="https://github.com/AminGtt"></a>
                                Github
                            </li>
                            <li class="xmb_row_info">My amazing code</li>
                        </ul>
                    </ul>

                    <ul class="xmb_row_content social">
                        <img src="../assets/icons/contact_me.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">
                                <a hidden href="mailto:gatta.amin38@gmail.com"></a>
                                Mail
                            </li>
                            <li class="xmb_row_info">Wanna mail me?</li>
                        </ul>
                    </ul>
                </ul>
            </ul>

            <ul class="xmb_col">
                <ul class="xmb_col_header">
                    <img src="../assets/icons/xmb_settings.png" alt="xmb_settings" class="xmb_col_icons">
                    <li class="xmb_col_title">Settings</li>
                </ul>

                <ul class="xmb_row">
                    <ul class="xmb_row_content settings">
                        <img src="../assets/icons/bg_settings.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Theme Settings</li>
                            <li class="xmb_row_info">Adjust theme settings</li>
                        </ul>
                    </ul>

                    <ul class="xmb_row_content settings">
                        <img src="../assets/icons/sound_settings.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Sounds Settings</li>
                            <li class="xmb_row_info">Adjust sounds settings</li>
                        </ul>
                    </ul>

                    <ul class="xmb_row_content settings">
                        <img src="../assets/icons/xmb_date_settings.png" alt="xmb_folder" class="xmb_row_icons">
                        <ul>
                            <li class="xmb_row_text">Date & time</li>
                            <li class="xmb_row_info">Adjust date & time settings</li>
                        </ul>
                    </ul>
                </ul>
            </ul>
        </section>

        <SettingsComponant />
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

ul {
        list-style: none;
        display: inline;
}

#xmb {
    display: flex;
    position: relative;
    top: 27%;
    left: 29%;
    transition: left .5s ease;
    
}

.xmb_col{
    position: relative;
    width: 10%;
    margin-right: 10px;

}

.xmb_col_icons {
    position: relative;
    height: 90px;
    width: 90px;
    object-fit: contain;
    margin-bottom: 15px;
}

.xmb_col_header{
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
    
}

.xmb_col_title{
    visibility: hidden;
    font-size: 18px;
}

.xmb_row{
    visibility: hidden;
    position: relative;
    transition: top .5s;
    top: 0;
}

.xmb_row_content{
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

.details_icon, .details_main_icon{
    height: 30px;
    width: 30px;
    margin-right: 10px;
}

.xbox_key_icon{
    position: absolute;
    opacity: 0;
}

.active{
    visibility: visible;
}

.focus{
    animation: glow 1s ease-in-out infinite alternate;
    scale: 1;
}

.infowrapper{
    opacity: 0;
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
    
    h1{
        border-bottom: 2px solid white;
        padding: 10px 0 20px;
    }

}

#maininfo{
    opacity: 1;
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

</style>