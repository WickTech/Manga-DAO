import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0xCDaDf6EB76eb877bC681f29e964F585125024D66",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "Immeasurable Void",
        description: "This NFT will give you access to MangaDAO!",
        image: readFileSync("scripts/assets/void.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } 
  catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
