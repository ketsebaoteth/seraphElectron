<script setup>
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconArrowBackUp } from "@tabler/icons-vue";
import question from "./question.vue";
import Button from "./ui/button/Button.vue";
import { disableAllWindows, windowstatus } from "./windowstate";

function backToRecents() {
  disableAllWindows();
  windowstatus.value.recentProjectsPage = true;
}
</script>

<template>
  <div
    v-if="windowstatus.questionEditingPage"
    class="w-screen flex"
    style="height: calc(100vh - 50px)"
  >
    <div class="toolsets w-72 h-full p-2 px-4 flex flex-col gap-2">
      <Button @click="backToRecents" variant="outline" size="icon">
        <IconArrowBackUp stroke="{2}" class="w-5 h-5" />
      </Button>
      <div
        class="questiondetails w-52 p-3 rounded-lg  h-60 flex flex-col gap-1"
      >
        <h2 class="text-gray-500">Settings</h2>
        <h2 class="text-sm">Question Count</h2>
        <NumberField
          :default-value="windowstatus.activeProject.questionCount"
          v-model:model-value="windowstatus.activeProject.questionCount"
        >
          <NumberFieldContent class="h-8">
            <NumberFieldDecrement />
            <NumberFieldInput class="h-8" />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
    </div>
    <div class="flex-grow h-full flex justify-center flex-col py-5">
      <ScrollArea class="flex flex-col gap-2">
        <question v-for="q in windowstatus.activeProject.questionCount" :key="q" />
      </ScrollArea>
    </div>
  </div>
</template>
