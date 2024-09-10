<script setup>
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconArrowBackUp } from "@tabler/icons-vue";
import question from "./question.vue";
import Button from "./ui/button/Button.vue";
import { windowstatus } from "./windowstate";
</script>

<template>
  <div
    v-if="windowstatus.questionEditingPage"
    class="w-screen flex"
    style="height: calc(100vh - 50px)"
  >
    <div class="toolsets w-72 h-full p-2 px-4 flex flex-col gap-2">
      <Button variant="outline" size="icon">
        <IconArrowBackUp stroke="{2}" class="w-5 h-5" />
      </Button>
      <h2 class="text-gray-500">Settings</h2>
    </div>
    <div class="flex-grow h-full flex justify-center flex-col py-5">
      <ScrollArea class="flex flex-col gap-2">
        <question />
        <question />
        <question />
        <question />
      </ScrollArea>
    </div>
  </div>
</template>
