<script setup>
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import { ref, onMounted } from "vue";
import "grapesjs-preset-webpage";

// const tabs = {
//   TheBlocks,
//   TheLayers,
//   TheStyle,
// };

const currentTab = ref("TheStyle");

const editor = ref(null);

onMounted(() => {
  editor.value = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "100%",
    width: "100%",
    // components: "<h1>Hello World Component!</h1>",
    storageManager: false,
    layerManager: {
      appendTo: "#layering",
    },
    styleManager: {
      appendTo: "#stylus",
    },
    panels: {
      defaults: [
        // ...
      ],
    },
    blockManager: {
      appendTo: "#blocks",
      blocks: [
        {
          category: "Navigation",
          id: "section__4", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
        },
        {
          category: "Headers",
          id: "section", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
        },
        {
          category: "Heroes",
          id: "section__1", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
        },
        {
          category: "Content",
          id: "section__2", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
        },
        {
          category: "Contact Us",
          id: "section__3", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
        },
      ],
    },
    plugins: ["gjs-blocks-basic", "gjs-navbar"],
    pluginsOpts: {
      "gjs-navbar": {},
      "gjs-blocks-basic": {
        category: "Primitives",
        blocks: [
          "column1",
          "column2",
          "column3",
          "text",
          "link",
          "image",
          "video",
        ],
      },
    },
  });

  console.log(editor.value.Commands.getAll());
});

function clearCanvas() {
  if (editor.value) {
    if (confirm("Are you sure you want to clear the canvas")) {
      editor.value.runCommand("core:preview");
    } else return;
  }
}

function undoPreviousAction() {
  if (editor.value) {
    editor.value.runCommand("core:canvas-clear");
  }
}
</script>

<template>
  <div class="w-full text-white font-semibold">
    <nav class="w-full bg-[#001E26] h-[3rem] flex">
      <div
        class="h-full min-w-[13.5rem] max-w-[13.5rem] flex justify-between items-center text-[#00DC82] mr-6 border-r border-black"
      >
        <span
          @click="currentTab = 'TheStyle'"
          class="text-center w-1/3 h-full flex items-center justify-center cursor-pointer text-xl"
          :class="currentTab == 'TheStyle' ? 'bg-[#012A35]' : 'bg-[#001E26]'"
        >
          <svg width="1.13em" height="1em" viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M224 263.3c.2-30 14.4-58.1 38.4-76.1L499.1 9.605c18.6-13.958 44.5-12.57 61.6 3.295c17 15.86 20.1 41.64 7.5 61.17L406.5 324.1c-15.2 23.6-39.9 39.1-67.2 43L224 263.3zM320 400c0 61.9-50.1 112-112 112H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4c-.39-3.8-.59-7.7-.59-11.6c0-60.4 47.9-109.7 107.7-111.9l116.1 104.4c.1 1.6.2 5 .2 7.5z"
            ></path>
          </svg>
        </span>

        <span
          @click="currentTab = 'TheLayers'"
          class="text-center w-1/3 h-full flex items-center justify-center cursor-pointer text-xl"
          :class="currentTab == 'TheLayers' ? 'bg-[#012A35]' : 'bg-[#001E26]'"
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              d="M21.484 7.125l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749z"
              fill="currentColor"
            ></path>
            <path
              d="M12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 15.856z"
              fill="currentColor"
            ></path>
            <path
              d="M12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 19.856z"
              fill="currentColor"
            ></path>
          </svg>
        </span>

        <span
          @click="currentTab = 'TheBlocks'"
          class="text-center w-1/3 h-full flex items-center justify-center cursor-pointer text-xl"
          :class="currentTab == 'TheBlocks' ? 'bg-[#012A35]' : 'bg-[#001E26]'"
        >
          <svg width="1em" height="1em" viewBox="0 0 36 36">
            <path
              fill="currentColor"
              d="m31.42 9.09l-13-6a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V10a1 1 0 0 0-.58-.91ZM18 14.9L7.39 10L18 5.1L28.61 10Zm12 11.46l-11 5.08v-14.8l11-5.08Z"
              class="clr-i-solid clr-i-solid-path-1"
            ></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
        </span>
      </div>
      <!-- Logo -->

      <h2 class="bg-red-500 p-2 rounded cursor-pointer" @click="clearCanvas()">
        clear
      </h2>

      <!-- Responsive Screen -->
    </nav>

    <section
      class="relative flex w-full h-[calc(100vh-3rem)] bg-gray-200 editor-row"
    >
      <aside
        v-show="currentTab == 'TheBlocks'"
        id="blocks"
        class="overflow-y-scroll myblocks h-full bg-[#001E26] w-[16rem] py-4 px-1 flex flex-col border-t border-black scrollbar-hide"
      ></aside>
      <aside
        v-show="currentTab == 'TheStyle'"
        id="stylus"
        class="overflow-y-scroll myblocks h-full bg-[#001E26] w-[16rem] py-4 px-1 flex flex-col border-t border-black scrollbar-hide"
      ></aside>
      <aside
        v-show="currentTab == 'TheLayers'"
        id="layering"
        class="overflow-y-scroll myblocks h-full bg-[#001E26] w-[16rem] py-4 px-1 flex flex-col border-t border-black scrollbar-hide"
      ></aside>

      <main class="w-full p-4 overflow-hidden">
        <div id="gjs" class="scrollbar-hide">
          <h1 class="text-center">Made with love by Jimoh Sodiq</h1>
        </div>
      </main>
    </section>
  </div>
</template>

<style>
#gjs {
  border: 1px solid #109d62;
  height: 100%;
  overflow-y: scroll;
}

.gjs-block {
  width: 100%;
  height: auto;
  min-height: auto;
}

.gjs-cv-canvas {
  top: 0;
  width: 100%;
  height: 100%;
}

.panel__top {
  padding: 0;
  width: 100%;
  display: flex;
  position: initial;
  justify-content: flex-end;
  background-color: white;
  align-items: flex-end;
}
.panel__basic-actions {
  position: initial;
  background: transparent;
  color: #001e26;
  font-weight: bold;
}

.gjs-one-bg {
  background-color: #001e26;
}

/* Secondary color for the text color */
.gjs-two-color {
  color: #00dc82;
}

/* Tertiary color for the background */
.gjs-three-bg {
  background-color: rgb(2, 32, 5);
  color: #00dc82;
}

/* Quaternary color for the text color */
.gjs-four-color,
.gjs-four-color-h:hover {
  color: #00dc82;
}
</style>
