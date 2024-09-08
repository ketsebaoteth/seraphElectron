<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { IconPlus, IconSearch } from '@tabler/icons-vue';
import projectcard from './projectcard.vue';
import { projectsList } from './structure/seraphProject';
import Button from './ui/button/Button.vue';
import Input from './ui/input/Input.vue';
import { windowstatus } from './windowstate';


function createProjectPageEnable(){
  windowstatus.value.createProjectPage = true;
}

</script>

<template>
    <div v-if="windowstatus.recentProjectsPage" class="w-screen flex flex-col p-5" style="height: calc(100vh - 50px);">
        <div class="actions w-full h-12 flex gap-1">
            <Button variant="outline" @click="createProjectPageEnable">
                <IconPlus stroke={1} class="w-4 h-4 mr-2"/>
                Create Json
            </Button>
            <Select>
                <SelectTrigger class="w-40">
                  <SelectValue placeholder="Sorting style" />
                </SelectTrigger>
                <SelectContent class="bg-[#27272742]">
                  <SelectGroup>
                    <SelectItem value="Date">
                      Modification Date
                    </SelectItem>
                    <SelectItem value="questionCount">
                        Question Count
                    </SelectItem>
                    <SelectItem value="subject">
                        Subject type
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
              <SelectTrigger class="w-32">
                <SelectValue placeholder="order" />
              </SelectTrigger>
              <SelectContent class="bg-[#27272742]">
                <SelectGroup>
                  <SelectItem value="Date">
                    Assending
                  </SelectItem>
                  <SelectItem value="questionCount">
                      Desending
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input class="w-44 ml-auto" variant="outline" placeholder="Search json" />
            <Button variant="outline" size="icon">
                <IconSearch stroke={1} class="w-5 h-5" />
            </Button>
        </div>
        <div class="list flex-grow bg-[#16161654] rounded-lg p-4 flex gap-2">
            <projectcard v-for="p in projectsList" :key="p.id" :projectref="p"/>

        </div>
    </div>
</template>