import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x88d2f209236C1645c836E842BEE4486d82E55181");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Immeasurable Void",
        description: "This NFT will give you access to MangaDAO! & the power to binge read manga",
        image: readFileSync("scripts/assets/void.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
