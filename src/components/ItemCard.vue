<template>
  <div class="card p-3">
    <div class="text-center">
      <img
        class="img-fluid"
        :src="item.logoUrl"
        width="100"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ item.title | capitalize }}</h5>
        <h6 class="card-title">{{ item.description }}</h6>
        <button
          id="show-exemple"
          type="button"
          class="btn btn-secondary"
          @click="showExemple(item.title, item.exemple)"
        >
          Exemple
        </button>
      </div>
      <div>
        <span
          v-for="(group, index) in item.keywords"
          :key="index"
          :class="`badge badge-${tags[group]}`"
          >{{ group }}</span
        >
      </div>
    </div>
    <Modal
      v-show="isExempleVisible"
      @close="closeExemple"
      :header="this.exempleTitle"
      :body="this.exempleBody"
    />
  </div>
</template>
<script>
import Modal from "./Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      // list of tags to giving each stack a different color
      tags: {
        flight: "light",
        train: "dark",
        open: "success",
        proprietary: "danger",
        schedule: "warning",
        record: "secondary",
        passenger: "info"
      },
      isExempleVisible: false,
      exempleTitle: "",
      exempleBody: ""
    };
  },
  methods: {
    showExemple(resource, exemple) {
      this.isExempleVisible = true;
      this.exempleTitle = resource;
      this.exempleBody = JSON.stringify(exemple, null, 2);
    },
    closeExemple() {
      this.isExempleVisible = false;
    }
  },
  filters: {
    // this filter will can be used to capitalize a word
    capitalize: item => {
      return item.toUpperCase();
    }
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
