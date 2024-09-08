<script setup>
import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-vue";
import { onMounted, ref, watch } from "vue";
import Button from "./ui/button/Button.vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const editor = ref(null);

const format = (command, value = null) => {
  document.execCommand(command, false, value);
};

const updateContent = () => {
  emit("update:modelValue", editor.value.innerHTML);
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (editor.value.innerHTML !== newValue) {
      editor.value.innerHTML = newValue;
    }
  }
);

onMounted(() => {
  if (props.modelValue) {
    editor.value.innerHTML = props.modelValue;
  }
});
</script>

<template>
  <div class="w-full h-60 border border-border max-w-full rounded">
    <div
      class="richnav w-full h-6 flex [&>Button>*]:w-4 [&>Button>*]:h-4 gap-1 place-items-center px-3 border-b border-border"
    >
      <Button
        variant="ghost"
        size="icon"
        class="w-6 h-6 rounded-none"
        @click="format('bold')"
      >
        <IconBold stroke="2" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        class="w-6 h-6 rounded-none"
        @click="format('italic')"
      >
        <IconItalic stroke="2" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        class="w-6 h-6 rounded-none"
        @click="format('underline')"
      >
        <IconUnderline stroke="2" />
      </Button>
    </div>
    <div
      class="editor p-1 px-3 w-full h-full max-w-[715px] overflow-y-auto outline-none text-white bg-transparent font-light underline-offset-2"
      contenteditable="true"
      @input="updateContent"
      ref="editor"
    ></div>
  </div>
</template>

<style scoped>
.editor {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
.editor:focus {
  outline: none;
}
</style>
