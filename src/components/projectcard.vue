<script setup>
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { IconDots } from '@tabler/icons-vue';
import { defineProps } from 'vue';
import { Project } from './structure/seraphProject';
import Button from './ui/button/Button.vue';

const props = defineProps({
    projectref: {
        type: Object,
        default: () => Project
    }
})

</script>

<template>
    <div class="w-[250px] max-h-52 rounded-lg hover:bg-[#27272742] cursor-pointer bg-background border border-border p-2">
        <div class="w-full h-[150px] flex place-items-center justify-center">
            <h1 class="font-bold text-lg">Json</h1>
        </div>
        <div class="disc w-full flex flex-grow pl-2 place-items-center">
            <div class="naming flex flex-col">
                <h1 class="font-bold">{{props.projectref.name}}</h1>
                <h3 class="text-[12px] text-gray-500">22 oct 2019</h3>
            </div>
            
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button class=" ml-auto" variant="outline" size="icon">
                        <IconDots stroke={2} class="w-5 h-5"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56 bg-[#27272742] backdrop-blur-2xl">
                  <DropdownMenuLabel>Json Settings</DropdownMenuLabel>
                  <DropdownMenuItem>Report for Review</DropdownMenuItem>
                  <DropdownMenuItem>Export File</DropdownMenuItem>
                  <DropdownMenuItem class="text-red-500">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
        </div>
    </div>
</template>