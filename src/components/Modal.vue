<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> Exemple of data for: {{ header }} </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <textarea v-model="body"></textarea>
        </slot>
      </section>

      <footer class="modal-footer">
        <button type="button" class="btn btn-primary" @click="close">
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    header: "",
    body: ""
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4d5352;
  justify-content: space-between;
}

textarea {
  width: 100%;
  min-height: 30rem;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 0.8rem;
  line-height: 1.2;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}
</style>
