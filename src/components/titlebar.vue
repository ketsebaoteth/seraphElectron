<script setup>
import { IconArrowsDiagonalMinimize2, IconMaximize, IconX } from '@tabler/icons-vue';
import { Button } from "./ui/button";
import { IconUserCircle } from '@tabler/icons-vue';
import { disableAllWindows, windowstatus } from './windowstate';

function maxmaize(){
    window.electron.maximize();
}
function minimize(){
    window.electron.minimize()
}
function close(){
    window.electron.close()
}

function accountpg(){
    disableAllWindows();
    windowstatus.value.accountPage = !windowstatus.value.accountPage;
    windowstatus.value.logginscreen = true;
}
</script>

<template>
    <div class="titlebar w-screen h-[50px] bg-transparent flex place-items-center pl-5 [&>Button]:w-12 [&>Button]:rounded-none">
        <h1 class=" text-sm">Seraph Editor Biki</h1>
        <div @click="accountpg" class="accoutn ml-auto w-8 h-8 rounded flex place-items-center justify-center cursor-pointer">
            <IconUserCircle stroke={2} class="w-6 h-6"/>
        </div>
        <Button variant="ghost" size="icon">
            <IconArrowsDiagonalMinimize2  stroke={2} class="w-5 h-5" @click="minimize"/>
        </Button>
        <Button variant="ghost" class="" size="icon" @click="maxmaize">
            <IconMaximize stroke={2} class="w-5 h-5"/>
        </Button>
        <Button variant="ghost" class="hover:bg-red-500" size="icon" @click="close" >
            <IconX stroke={2} class="w-5 h-5"/>
        </Button>
    </div>
</template>

<style scoped>
    .titlebar{
        -webkit-app-region: drag;
    }
    .titlebar *{
        -webkit-app-region: no-drag;
    }
</style>>