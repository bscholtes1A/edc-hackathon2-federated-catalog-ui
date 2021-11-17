export class DataRequest {
  constructor(providerAddress, assetId, policyId, dataDestinationType) {
    this.id = "412123341234";
    this.edctype = "dataspaceconnector:datarequest";
    this.connectorAddress = providerAddress;
    this.protocol = "ids-rest";
    this.connectorId = "consumer";
    let asset = new Object();
    asset.id = assetId;
    asset.policyId = policyId;
    this.asset = asset;
    let dataDestination = new Object();
    dataDestination.type = dataDestinationType;
    this.dataDestination = dataDestination;
    if (dataDestinationType === "http") {
      this.isSyncRequest = true;
    }
    this.managedResources = false;
  }

  getAsString() {
    return JSON.stringify(this);
  }
}
