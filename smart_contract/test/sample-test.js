/* test/sample-test.js */
describe("WasteMarket", function() {
  it("Should create and execute market sales", async function() {
    /* deploy the marketplace */
    const WasteMarketplace = await ethers.getContractFactory("Waste")
    const waste = await WasteMarketplace.deploy()
    await waste.deployed()

    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    /* create two tokens */
    await waste.createToken("https://www.mytokenlocation.com", auctionPrice)
    await waste.createToken("https://www.mytokenlocation2.com", auctionPrice)

    const [_, buyerAddress] = await ethers.getSigners()

    /* execute sale of token to another user */
    await waste.connect(buyerAddress).createMarketSale(1, { value: auctionPrice })

    /* query for and return the unsold items */
    items = await waste.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await waste.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  })
})
