<script setup>
import { IconArrowsDiagonalMinimize2, IconMaximize, IconX } from '@tabler/icons-vue';
import { Button } from "./ui/button";

function maxmaize(){
    window.electron.maximize();
}
function minimize(){
    window.electron.minimize()
}
function close(){
    window.electron.close()
}

</script>

<template>
    <div class="titlebar w-screen h-[50px] bg-transparent flex place-items-center pl-5 [&>Button]:w-12 [&>Button]:rounded-none">
        <h1 class=" text-sm">Seraph Editor</h1>
        <Button variant="ghost" class="ml-auto" size="icon">
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