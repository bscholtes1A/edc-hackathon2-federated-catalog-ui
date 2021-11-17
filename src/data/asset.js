export class Asset {
  constructor(json) {
    this.properties = new Map(Object.entries(json["properties"]));
    this.keywords = [this.getType(), this.getPolicyId()];
  }

  getAssetId() {
    return this.properties.get("asset:prop:id");
  }

  getName() {
    return this.properties.get("asset:prop:name");
  }

  getOriginator() {
    return this.properties.get("asset:prop:originator");
  }

  getType() {
    return this.properties.get("type");
  }

  getContentType() {
    return this.properties.get("asset:prop:contenttype");
  }

  getPolicyId() {
    return this.properties.get("asset:prop:policy-id");
  }
}
