<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h1>Data transfer panel for asset: {{ assetId }}</h1>
        </slot>
      </header>
      <body>
        <!-- <p>provider url: {{ providerUrl }}</p>
        <p>assetId: {{ assetId }}</p>
        <p>policyId: {{ policyId }}</p>
        <p>type: {{ type }}</p> -->
        <button type="button" class="btn-close" @click="initiateDataTransfer">
          Transfer
        </button>
        <button type="button" class="btn-close" @click="close">
          Close
        </button>
        <section class="modal-body" v-if="data !== ''">
          <slot name="data">
            <textarea v-model="data"></textarea>
          </slot>
        </section>
      </body>
    </div>
  </div>
</template>

<script>
import { DataRequest } from "../data/data-request";

export default {
  name: "DataTransferPanel",
  data() {
    return {
      data: "",
    };
  },
  props: {
    consumerUrl: {
      type: String,
      required: true,
    },
    providerUrl: "",
    assetId: "",
    policyId: "",
    type: "",
  },
  methods: {
    initiateDataTransfer() {
      let dataRequest = new DataRequest(
        this.providerUrl,
        this.assetId,
        this.policyId,
        this.type
      );

      const request = new Request(consumerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataRequest.getAsString(),
      });

      fetch(request)
        .then((response) => {
          response
            .json()
            .then((body) => {
              console.log("Succesful call to " + consumerUrl);
              let tmp = JSON.parse(JSON.stringify(body));
              console.log(tmp);
              let data = tmp["data"];
              if (data !== null) {
                this.data = data;
              }
            })
            .catch((error) => {
              console.log(error);
              this.error = "Failed to fetch body from call response: " + error;
            });
        })
        .catch((error) => {
          console.log(error);
          this.error = "Call failed: " + error;
        });
    },
    close() {
      this.data = "";
      this.$emit("close");
    },
  },
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
