export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://nft-collection-rho-five.vercel.app/cryptodevs/";
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      "id": tokenId,
      name: "Crypto Dev #" + tokenId, // Texas Pass #1
      description: "Crypto Dev is a collection of developers in crypto", // 
      image: image_url + 1 + ".png", // 
      attributes: [
        {
          "trait_type": "PROPERTY",
          "value": "Genesis"
        },
        {
          "trait_type": "REWARDPOOL-01",
          "value": "60%"
        },
        {
          "trait_type": "REWARDPOOL-02",
          "value": "30%"
        },
        {
          "trait_type": "REWARDPOOL-03",
          "value": "10%"
        },
      ]
    });
  }