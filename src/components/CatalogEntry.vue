<template>
  <div class="card p-3">
    <div class="text-center">
      <div class="card-body">
        <h3 class="card-title">{{ asset.getName() }}</h3>
        <p class="card-text">
          <i>{{ asset.getOriginator() }}</i>
        </p>
        <div>
          <v-for
            v-for="keyword in getAssetKeywords(asset)"
            :key="keyword"
            :class="`badge badge-${tags[keyword]}`"
            >{{ keyword }}
          </v-for>
        </div>
        <button
          id="show-data-transfer-panel"
          type="button"
          class="btn btn-primary"
          v-if="isDataTransferSupported(asset)"
          @click="showDataTransferPanel(asset)"
        >
          Transfer data
        </button>
        <button
          id="not-supported"
          type="button"
          class="btn btn-secondary"
          v-else
        >
          Transfer data
        </button>
      </div>
    </div>
    <DataTransferPanel
      v-show="isDataTransferPanelVisible"
      @close="closeDataTransferPanel"
      :consumerUrl="this.consumerUrl"
      :providerUrl="this.providerUrl"
      :assetId="this.assetId"
      :policyId="this.policyId"
      :type="this.type"
    />
  </div>
</template>
<script>
import { Asset } from "../data/asset";
import DataTransferPanel from "./DataTransferPanel.vue";

export default {
  data() {
    return {
      // list of tags to giving each stack a different color
      tags: {
        "text/plain": "success",
        "image/png": "danger",
      },
      isDataTransferPanelVisible: false,
      providerUrl: "",
      assetId: "",
      policyId: "",
      type: "",
    };
  },
  methods: {
    showDataTransferPanel(asset) {
      this.isDataTransferPanelVisible = true;
      this.providerUrl = asset.getOriginator();
      this.assetId = asset.getAssetId();
      this.policyId = asset.getPolicyId();
      this.type = asset.getType();
    },
    closeDataTransferPanel() {
      this.isDataTransferPanelVisible = false;
    },
    isDataTransferSupported(asset) {
      return asset.getType() === "http";
    },
    getAssetKeywords(asset) {
      return [asset.getContentType()];
    },
  },
  filters: {
    // this filter will can be used to capitalize a word
    capitalize: (asset) => {
      return asset.getName();
    },
  },
  props: {
    consumerUrl: {
      type: String,
      required: true,
    },
    asset: {
      type: Asset,
      required: true,
    },
  },
  components: { DataTransferPanel },
};
</script>
