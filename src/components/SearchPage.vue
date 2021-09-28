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
      <!-- iterate data -->
      <item-card
        v-for="(item, index) in filteredData"
        :key="index"
        :item="item"
      ></item-card>
    </div>
  </div>
</template>
<script>
import ItemCard from "./ItemCard";
export default {
  name: "SearchPage",
  components: {
    "item-card": ItemCard
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFiters = this.keywords.filter(obj => obj.checked);
      checkedFiters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    }
  },
  data() {
    return {
      isModalVisible: false,
      availableData: [],
      filteredData: [],
      search: "",
      keywords: [
        {
          checked: false,
          value: "flight"
        },
        {
          checked: false,
          value: "train"
        },
        {
          checked: false,
          value: "schedule"
        },
        {
          checked: false,
          value: "passenger"
        },
        {
          checked: false,
          value: "open"
        },
        {
          checked: false,
          value: "proprietary"
        }
      ]
    };
  },
  methods: {
    getFilteredData: function() {
      this.filteredData = this.availableData;
      let filteredDataByfilters = [];
      let filteredDataBySearch = [];
      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters = this.filteredData.filter(obj =>
          this.selectedFilters.every(val => obj.keywords.indexOf(val) >= 0)
        );
        this.filteredData = filteredDataByfilters;
      }
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== "") {
        filteredDataBySearch = this.filteredData.filter(
          obj =>
            JSON.stringify(obj.exemple)
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) >= 0
        );
        this.filteredData = filteredDataBySearch;
      }
    },
    async getAvailableData() {
      let consumer = "https://gaiax-demo-consumer-connector.azurewebsites.net";
      // let providers = [
      //   "http://192.168.56.1:8182",
      //   "http://192.168.56.1:8183",
      //   "http://192.168.56.1:8184"
      // ];
      let providers = [
        "https://gaiax-demo-provider-connector-afkl.azurewebsites.net",
        "https://gaiax-demo-provider-connector-sncf.azurewebsites.net",
        "https://gaiax-demo-provider-connector-1a.azurewebsites.net"
      ];

      providers.forEach(provider => this.getCatalog(consumer, provider));

      this.filteredData = this.availableData;
    },
    async getCatalog(consumerConnector, providerConnector) {
      this.error = "";

      const uri =
        consumerConnector +
        "/api/demo/catalog?connectorAddress=" +
        providerConnector;
      fetch(uri, { method: "GET" })
        .then(response => {
          response
            .json()
            .then(data => {
              console.log("Succesful call to " + uri);
              data.forEach(entry => this.availableData.push(entry));
            })
            .catch(error => {
              console.log(error);
              this.error = "Failed to fetch body from call response: " + error;
            });
        })
        .catch(error => {
          console.log(error);
          this.error = "Call failed: " + error;
        });
    }
  },
  mounted() {
    this.getAvailableData();
  }
};
</script>
