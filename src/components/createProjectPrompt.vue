<script setup>
import { ref } from 'vue';
import { settings } from './seraphSettings';
import { Project, projectsList } from './structure/seraphProject';
import Button from './ui/button/Button.vue';
import Input from './ui/input/Input.vue';
import Textarea from './ui/textarea/Textarea.vue';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { windowstatus } from './windowstate';

let name = ref("untitled");
let disc = ref("no discprition");
let grade = ref("Grade 1");
let year = ref("Year 2011");

function createProject(){
  let newProject = new Project();
  newProject.name = name.value;
  newProject.description = disc.value;
  newProject.grade = grade.value;
  newProject.testYear = year.value;
  projectsList.value.push(newProject);
  windowstatus.value.createProjectPage = false
}
</script>

<template>
    <div v-if="windowstatus.createProjectPage" class="z-10 absolute w-screen h-screen bg-[#00000054] flex place-items-center justify-center">
        <div class="prompt flex flex-col p-5 w-[60%] h-[80%] gap-2 bg-[#181818] rounded-lg">
            <h1 class="text-lg">Create project</h1>
            <h2>Project Title</h2>
            <Input v-model="name"></Input>
            <h2>Discprition</h2>
            <Textarea v-model="disc"></Textarea>
            <h2>Grade</h2>
            <ToggleGroup v-model:model-value="grade" type="single" class="w-full h-32 border border-border flex justify-start place-items-start px-1 p-2 rounded flex-wrap content-start">
                <ToggleGroupItem :value="'Grade'+i" v-for="i in settings.maxGradeCount" :key="i">Grade {{i}}</ToggleGroupItem>
            </ToggleGroup>
            <h2>Test Year</h2>
            <ToggleGroup v-model:model-value="year" type="single" class="w-full h-20 border border-border flex justify-start px-1 p-2">
                <ToggleGroupItem :value="'Year' + i" v-for="i in settings.years" :key="i">{{i}}</ToggleGroupItem>
            </ToggleGroup>
            <div class="Actions mt-3 gap-2 flex">
                <Button variant="ghost" class="ml-auto" @click="windowstatus.createProjectPage = false">Cancel</Button>
                <Button @click="createProject">Create project</Button>
            </div>
        </div>
    </div>
</template>
