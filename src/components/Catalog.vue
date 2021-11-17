<template>
  <div class="container-fluid">
    <div class="search-wrapper">
      <!-- the search bar form -->
      <form v-on:submit="getFilteredData">
        <div class="form-row">
          <div class="col-10">
            <input
              type="text"
              class="form-control"
              placeholder="Enter key word  ..."
              v-model="search"
              v-on:keyup="getFilteredData"
            />
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <!-- check boxes -->
      <div id="checkboxes">
        <div
          v-for="(stack, index) in keywords"
          :key="index"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="checkbox"
            v-model="stack.checked"
            v-on:change="getFilteredData"
          />
          <label class="form-check-label">
            {{ stack.value }}
          </label>
        </div>
      </div>
    </div>
    <!-- end of checkboxes -->
    <div class="card-columns">
      <catalog-entry
        v-for="(asset, index) in filteredData"
        :key="index"
        :asset="asset"
        :consumerUrl="consumerUrl"
      ></catalog-entry>
    </div>
  </div>
</template>
<script>
import { Asset } from "../data/asset";
import CatalogEntry from "./CatalogEntry";
export default {
  name: "Catalog",
  components: {
    "catalog-entry": CatalogEntry,
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFiters = this.keywords.filter((obj) => obj.checked);
      checkedFiters.forEach((element) => {
        filters.push(element.value);
      });
      return filters;
    },
  },
  data() {
    return {
      consumerUrl:
        "http://ion-demo-consumer.westeurope.azurecontainer.io:8181/api/catalog/cached",
      availableData: [],
      filteredData: [],
      search: "",
      keywords: [
        {
          checked: false,
          value: "text/plain",
        },
        {
          checked: false,
          value: "image/pnr",
        },
      ],
    };
  },
  methods: {
    getFilteredData: function() {
      this.filteredData = this.availableData;
      let filteredDataByfilters = [];
      let filteredDataBySearch = [];
      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters = this.filteredData.filter((obj) =>
          this.selectedFilters.every((val) => obj.keywords.indexOf(val) >= 0)
        );
        this.filteredData = filteredDataByfilters;
      }
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== "") {
        filteredDataBySearch = this.filteredData.filter(
          (obj) =>
            JSON.stringify(obj.getName())
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) >= 0
        );
        this.filteredData = filteredDataBySearch;
      }
    },
    async getCatalog() {
      this.error = "";

      fetch(this.consumerUrl, {
        method: "GET",
      })
        .then((response) => {
          response
            .json()
            .then((data) => {
              console.log("Succesful call to " + this.consumerUrl);

              data.forEach((entry) => {
                this.availableData.push(new Asset(entry));
              });
              this.filteredData = this.availableData;
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
  },
  mounted() {
    this.getCatalog();
  },
};
</script>
