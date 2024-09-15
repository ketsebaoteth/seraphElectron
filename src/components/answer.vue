<script setup>
import { IconTrash } from "@tabler/icons-vue";
import Button from "./ui/button/Button.vue";
import Checkbox from "./ui/checkbox/Checkbox.vue";
import Input from "./ui/input/Input.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Edit option",
  },
  optionName: {
    type: String,
    default: "A",
  },
});
</script>

<template>
  <div
    class="ans w-full flex gap-2 place-items-center px-2 h-12 border border-border rounded p-1"
  >
    <Checkbox class="border border-border w-7 h-7" />
    <div
      class="questiontitle rounded w-7 h-7 border border-border flex place-items-center justify-center"
    >
      <h2 class="text-sm text-gray-500 font-bold">{{ props.optionName }}</h2>
    </div>
    <Input class="h-7" v-model="props.title"></Input>
    <Button variant="outline" size="icon" class="h-7 w-8">
      <IconTrash stroke="{2}" class="w-5 h-5" />
    </Button>
  </div>
</template>
