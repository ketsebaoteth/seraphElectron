<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IconEye } from '@tabler/icons-vue';
import { toast } from 'vue-sonner';
import { windowstatus } from "./windowstate";

function copy_telegram_username(){
    navigator.clipboard.writeText("@khub880");
    toast('Username was copied', {
        description: 'Telegram username @khub880 was copied to clipboard',
        action: {
          label: 'ok',
          onClick: () => console.log('copying finished'),
        },
    })
}
function register(){
    windowstatus.value.registerscreen = true;
    windowstatus.value.logginscreen = false;
}
function login(){
    windowstatus.value.registerscreen = false;
    windowstatus.value.logginscreen = true;
}
</script>

<template>
    <div v-if="windowstatus.accountPage" class="w-screen bg-transparent flex place-items-center justify-center px-5" style="height: calc(100vh - 50px);">
        <div class="form-cont border-border border w-[550px] h-[80%] bg-[#16161654] rounded-lg backdrop-blur-lg flex flex-col place-items-center p-5 px-12">
            <h1 class="text-[40px] font-bold" v-if="windowstatus.logginscreen">Login</h1>
            <h1 class="text-[40px] font-bold" v-if="windowstatus.registerscreen">Register</h1>
            <h2 class="text-sm text-gray-500 w-60 text-center">login to your account to get started with seraph editor</h2>
            <div class="login flex flex-col w-full mt-auto mb-auto" v-if="windowstatus.logginscreen">
                <h3 class="w-full text-sm text-gray-400 h-6">Email Address</h3>
                <Input type="email" placeholder="Email" class="w-full"></Input>
                <h3 class="w-full text-sm text-gray-400 mt-3 h-6">Password</h3>
                <div class="passwordcollection w-full flex gap-1">
                    <Input type="password" placeholder="Password" class="w-full"></Input>
                    <Button variant="outline" size="icon" class="w-10">
                        <IconEye stroke="1" class="w-5 h-5"></IconEye>
                    </Button>
                </div>
            </div>
            <div class="login flex flex-col w-full mt-auto mb-auto" v-if="windowstatus.registerscreen">
                <h3 class="w-full text-sm text-gray-400 h-6">Full Name</h3>
                <Input type="text" placeholder="Full Name" class="w-full"></Input>
                <h3 class="w-full text-sm text-gray-400 h-6 mt-2">Email Address</h3>
                <Input type="email" placeholder="Email" class="w-full"></Input>
                <h3 class="w-full text-sm text-gray-400 mt-3 h-6">Password</h3>
                <div class="passwordcollection w-full flex gap-1">
                    <Input type="password" placeholder="Password" class="w-full"></Input>
                    <Button variant="outline" size="icon" class="w-10">
                        <IconEye stroke="1" class="w-5 h-5"></IconEye>
                    </Button>
                </div>
            </div>
            <h1 class="text-sm text-gray-500 w-full mb-3 text-center" v-if="windowstatus.logginscreen">If you dont have an account <Span class="Create One text-blue-500 cursor-pointer" @click="register">Create One</Span></h1>
            <h1 class="text-sm text-gray-500 w-full mb-3 text-center" v-if="windowstatus.registerscreen">Already have an account <Span class="Create One text-blue-500 cursor-pointer" @click="login">Login</Span></h1>
            <Button variant="ghost" class="w-full bg-accent-foreground hover:bg-gray-300 text-black hover:text-black">Submit</Button>
            <h2 class="text-sm text-gray-500 w-full mt-1 text-center">
                If you dont have an account or are facing issues on any part of the editor contact me <span class="text-blue-500 cursor-pointer" @click="copy_telegram_username">@khub880</span> on telegram to get it resolved
            </h2>
        </div>
    </div>
</template>

<style scoped>

</style>