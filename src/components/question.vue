<script setup>
import {
  IconExclamationMark,
  IconGraph,
  IconPhotoScan,
  IconPlus,
  IconQuestionMark,
  IconTargetArrow,
} from "@tabler/icons-vue";
import { ref } from "vue";
import answer from "./answer.vue";
import ChartGraph from "./ChartGraph.vue";
import richtexteditor from "./richtexteditor.vue";
import Button from "./ui/button/Button.vue";
import Input from "./ui/input/Input.vue";

const tab_context = ref("question");
const isImgDisabled = ref(false);
const showGrid = ref(true);
const showXAxis = ref(true);
const equation = ref("x^2");

const editorOptions = {
  theme: "snow",
};

function openExcalidrawNewTab() {
  window.open("https://excalidraw.com/", "_blank");
}
</script>

<template>
  <div
    class="w-[70%] h-[590px] min-h-[500px] flex flex-col mt-5 p-5 bg-[#16161654] rounded-lg border border-border"
  >
    <div class="tabs w-full h-[40px] flex gap-1">
      <Button
        class="w-7 h-7"
        variant="outline"
        size="icon"
        @click="tab_context = 'question'"
      >
        <IconQuestionMark stroke="{2}" class="w-5 h-5" />
      </Button>
      <Button
        class="w-7 h-7"
        variant="outline"
        size="icon"
        @click="tab_context = 'img'"
      >
        <IconPhotoScan stroke="{2}" class="w-5 h-5" />
      </Button>
      <Button
        class="w-7 h-7"
        variant="outline"
        size="icon"
        @click="tab_context = 'graph'"
      >
        <IconGraph stroke="{2}" class="w-5 h-5" />
      </Button>
      <Button
        class="w-7 h-7"
        variant="outline"
        size="icon"
        @click="tab_context = 'errors'"
      >
        <IconExclamationMark stroke="{2}" class="w-5 h-5" />
      </Button>
      <Button class="w-7 h-7 ml-auto" variant="outline" size="icon">
        <IconTargetArrow stroke="{2}" class="w-5 h-5" />
      </Button>
    </div>
    <div
      v-if="tab_context === 'question'"
      class="flex flex-col w-full gap-2"
      style="height: calc(100% - 40px)"
    >
      <h2>Question Title</h2>
      <richtexteditor />
      <div class="w-full flex place-items-center">
        <h2>Answers</h2>
        <Button variant="outline" class="ml-auto w-8 h-8" size="icon">
          <IconPlus stroke="{2}" class="w-5 h-5" />
        </Button>
      </div>
      <div class="anscoll flex flex-col gap-2 w-full border p-3 border-border rounded">
        <answer option-name="A" />
        <answer option-name="B" />
        <answer option-name="C" />
        <answer option-name="D" />
      </div>
      <h2>Explanation</h2>
      <richtexteditor />
    </div>
    <div
      v-if="tab_context === 'img'"
      class="flex flex-col w-full gap-2"
      style="height: calc(100% - 40px)"
    >
      <div class="flex items-center gap-2 w-full h-8">
        <Switch id="airplane-mode" v-model:checked="isImgDisabled" />
        <Label for="airplane-mode">Include Image</Label>
        <h2 class="text-sm ml-auto text-red-500" v-if="!isImgDisabled">
          Image has been disabled changes will not take effect
        </h2>
      </div>
      <div
        class="imageview w-full h-[140px] border border-border rounded-lg bg-[#16161654] flex place-items-center justify-center"
      >
        <Button class="w-32 h-8" variant="outline">Choose Image</Button>
      </div>
      <p class="text-sm text-gray-400">
        . Images for questions must be created using Excalidraw and should be
        uploaded to here as a png.
      </p>
      <Button variant="outline" @click="openExcalidrawNewTab" class="mt-auto"
        >Open Excalidraw</Button
      >
    </div>
    <div
      v-if="tab_context === 'graph'"
      class="flex flex-col w-full gap-2"
      style="height: calc(100% - 40px)"
    >
      <Input
        type="text"
        v-model="equation"
        placeholder="Enter equation (e.g., x^2)"
        class="p-2 border border-border rounded"
      />
      <ChartGraph :equation="equation" :showGrid="showGrid" :showXAxis="showXAxis" />
      <div class="flex gap-2 mt-2 flex-wrap [&>label]:text-gray-500 [&>label]:text-sm">
        <label class="flex items-center">
          <input type="checkbox" v-model="showGrid" class="mr-2" />
          Show Grid
        </label>
        <label class="flex items-center">
          <input type="checkbox" v-model="showXAxis" class="mr-2" />
          Show X Axis
        </label>
        <label class="flex items-center">
          <input type="checkbox" v-model="showXAxis" class="mr-2" />
          Show Y Axis
        </label>
        <label class="flex items-center">
          <input type="checkbox" v-model="showXAxis" class="mr-2" />
          quadrant 1
        </label>
        <label class="flex items-center">
          <input type="checkbox" v-model="showXAxis" class="mr-2" />
          quadrant 2
        </label>
        <label class="flex items-center">
          <input type="checkbox" v-model="showXAxis" class="mr-2" />
          quadrant 3
        </label>
        <label class="flex items-center">
          <input type="checkbox" v-model="showXAxis" class="mr-2" />
          quadrant 4
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editor:focus {
  outline: none;
}
</style>