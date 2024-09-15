import { ref } from "vue";

export const windowstatus = ref({
    activeProject: null,
    logginscreen: false,
    registerscreen: false,
    accountPage: false,
    recentProjectsPage: true,
    projectDetailsPage: false,
    createProjectPage: false,
    questionEditingPage: false,

});

export const disableAllWindows=()=>{
    for (const key in windowstatus.value) {
        windowstatus.value[key] = false;
    }
}