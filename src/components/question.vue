<script setup>
import {
    IconExclamationMark,
    IconGraph,
    IconPhotoScan,
    IconPlus,
    IconQuestionMark,
} from "@tabler/icons-vue";
import richtexteditor from "./richtexteditor.vue";
import Button from "./ui/button/Button.vue";
import Checkbox from "./ui/checkbox/Checkbox.vue";
import Input from "./ui/input/Input.vue";

const editorOptions = {
  theme: "snow",
};
</script>

<template>
  <div
    class="w-[70%] h-[400px] min-h-[500px] flex flex-col gap-2 mt-5 p-5 bg-[#16161654] rounded-lg border border-border"
  >
    <div class="tabs w-full h-7 flex gap-1">
      <Button class="w-7 h-7" variant="outline" size="icon">
        <IconQuestionMark stroke="{2}" class="w-5 h-5" />
      </Button>
      <Button class="w-7 h-7" variant="outline" size="icon">
        <IconPhotoScan stroke="{2}" class="w-5 h-5" />
      </Button>
      <Button class="w-7 h-7" variant="outline" size="icon">
        <IconGraph stroke="{2}" class="w-5 h-5" />
      </Button>
      <Button class="w-7 h-7" variant="outline" size="icon">
        <IconExclamationMark stroke="{2}" class="w-5 h-5" />
      </Button>
    </div>
    <h2>Question Title</h2>
    <richtexteditor />
    <div class="w-full flex place-items-center">
      <h2>Answers</h2>
      <Button variant="outline" class="ml-auto w-8 h-8" size="icon">
        <IconPlus stroke="{2}" class="w-5 h-5" />
      </Button>
    </div>
    <div class="anscoll flex flex-col gap-2 w-full border p-3 border-border rounded">
      <div
        class="ans w-full flex gap-2 place-items-center px-2 h-12 border border-border rounded p-1"
      >
        <Checkbox class="border border-border w-7 h-7" />
        <div
          class="questiontitle rounded w-7 h-7 border border-border flex place-items-center justify-center"
        >
          <h2 class="text-sm text-gray-500 font-bold">A</h2>
        </div>
        <Input class="h-7"></Input>
      </div>
      <div
        class="ans w-full flex gap-2 place-items-center px-2 h-12 border border-border rounded p-1"
      >
        <Checkbox class="border border-border w-7 h-7" />
        <div
          class="questiontitle rounded w-7 h-7 border border-border flex place-items-center justify-center"
        >
          <h2 class="text-sm text-gray-500 font-bold">B</h2>
        </div>
        <Input class="h-7"></Input>
      </div>
      <div
        class="ans w-full flex gap-2 place-items-center px-2 h-12 border border-border rounded p-1"
      >
        <Checkbox class="border border-border w-7 h-7" />
        <div
          class="questiontitle rounded w-7 h-7 border border-border flex place-items-center justify-center"
        >
          <h2 class="text-sm text-gray-500 font-bold">C</h2>
        </div>
        <Input class="h-7"></Input>
      </div>
      <div
        class="ans w-full flex gap-2 place-items-center px-2 h-12 border border-border rounded p-1"
      >
        <Checkbox class="border border-border w-7 h-7" />
        <div
          class="questiontitle rounded w-7 h-7 border border-border flex place-items-center justify-center"
        >
          <h2 class="text-sm text-gray-500 font-bold">D</h2>
        </div>
        <Input class="h-7"></Input>
      </div>
    </div>
  </div>
</template>

<style></style>
