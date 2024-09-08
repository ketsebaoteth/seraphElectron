<script setup>
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import projectcard from "./projectcard.vue";
import { settings } from './seraphSettings';
import Button from "./ui/button/Button.vue";
import Input from "./ui/input/Input.vue";
import Textarea from "./ui/textarea/Textarea.vue";
import { windowstatus } from "./windowstate";

function undeatils(){
    windowstatus.value.projectDetailsPage = false;
    windowstatus.value.recentProjectsPage = true;
}
function openQuestionEditing(){
    windowstatus.value.projectDetailsPage = false;
    windowstatus.value.questionEditingPage = true;
}
</script>

<template>
    <div v-if="windowstatus.projectDetailsPage" class="w-screen bg-background p-5 flex flex-col" style="height: calc(100vh - 50px);">
        <div class="editing w-full h-[90%] flex gap-5">
            <div class="preview w-60 h-full flex flex-col gap-2">
                <projectcard class="w-full" :projectref="windowstatus.activeProject"/>
                <Button variant="outline" class="w-full">Export to File</Button>
                <Button variant="outline" class="text-red-500 hover:text-red-700">Delete</Button>
            </div>
            <div class="discprition w-full flex-grow flex flex-col gap-1">
                <h1 class="text-sm text-gray-400">Unique id: {{windowstatus.activeProject.id}}</h1>
                <h2>Project Name</h2>
                <Input v-model:model-value="windowstatus.activeProject.name"/>
                <h2>Discprition</h2>
                <Textarea v-model:model-value="windowstatus.activeProject.description"/>
                <h2>Grade</h2>
                <ToggleGroup v-model="windowstatus.activeProject.grade" type="single" class="w-full h-20 border border-border flex justify-start px-5">
                    <ToggleGroupItem variant="ghost" v-for="i in settings.maxGradeCount" :key="i" :value="'Grade'+i">Grade {{i}}</ToggleGroupItem>
                </ToggleGroup>
                <h2>Test Year</h2>
                <ToggleGroup v-model="windowstatus.activeProject.testYear" type="single" class="w-full h-20 border border-border flex justify-start px-5">
                    <ToggleGroupItem variant="ghost" v-for="i in settings.years" :key="i" :value="'Year'+i">{{i}}</ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>
        <div class="actions flex gap-2 flex-grow">
            <Button variant="ghost" class="ml-auto" @click="undeatils">cancel</Button>
            <Button @click="openQuestionEditing" class="bg-white text-black hover:bg-slate-100 hover:text-black">Edit Questions</Button>
        </div>
    </div>
</template>