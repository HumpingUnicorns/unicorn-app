export default class NftFlingdModel {
    constructor(id, dataImage, tokenId, name, favPosition, flingWinner, isClaimed, mamboName) {
      this.id = id;
      this.dataImage = dataImage;
      this.tokenId = tokenId;
      this.name = name;
      this.favPosition = favPosition;
      this.flingWinner = flingWinner;
      this.isClaimed = isClaimed;
      this.mamboName = mamboName;
    }
}