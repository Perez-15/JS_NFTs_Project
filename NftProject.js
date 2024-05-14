// 1. Create a variable to hold NFTs (an array).
const nftCollection = [];

// 2. Define the mintNFT function to create and store NFTs.
function mintNFT(name, description, shirt_color, bling) {
    // Create an object to hold metadata for the NFT
    const newNFT = {
        name: name,
        description: description,
        shirt_color: shirt_color,
        bling: bling
        
    };

    // Store the new NFT object in the collection
    nftCollection.push(newNFT);
}

// 3. Define the listNFTs function to print metadata of all NFTs.
function listNFTs() {
    // Iterate through the array of NFTs
    nftCollection.forEach(nft => {
        // Print metadata to the console
        console.log("Name:\t\t\t\t " + nft.name);
        console.log("Description:\t\t " + nft.description);
        console.log("Shirt Color:\t\t " + nft.shirt_color);
        console.log("Bling:\t\t\t\t " + nft.bling);
    });
}

// 4. Define the getTotalSupply function to return the total number of NFTs.
function getTotalSupply() {
    return nftCollection.length;
}

// Example usage
mintNFT("Mallik", "Monkey", "Yellow", "Gold Chain \n");
mintNFT("Reid", "Tiger", "Orange", "Gold Chain \n");
mintNFT("Mist", "Panda", "White and Black","Gold Chain \n");

listNFTs(); // Print all NFTs' metadata
console.log("Total number of NFTs: " + getTotalSupply()); // Print total number of NFTs
