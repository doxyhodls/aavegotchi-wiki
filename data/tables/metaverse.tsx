

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "installations",
            tableCaption: "",
            tableData: {
                headers: ["Installation Name", "Description"],
                data: [
                    ["Alchemical Aaltar", "The most important Installation on the Parcel. Initially used for Alchemical Channeling with the Parcel’s linked Aavegotchi. Can also be upgraded to further the tech tree of various other Installations. Included with REALM parcel."],
					["Gotchi Lodge", "The social hub of a Parcel. Can be upgraded to support voice chat within the Parcel or globally for Guild members. Aavegotchis can link to a Guild House to engage in communal channeling, a spectral ritual that lowers kinship but increases the Alchemical channeled to each Aavegotchi for a short period."],
					["Harvesters", "Harvesters allow Parcels to harvest Alchemica from the Parcel without relying on Aavegotchi’s Alchemical channeling. Harvesters are initially not very accurate, and a large portion of the Alchemica extracted from the Realm will be spilled around the premises, for nearby Aavegotchis or Liquidators to capture."],
					["Reservoirs", "Reservoirs store the Alchemica harvested by Harvesters. Initially the storage is quite small, but can be upgraded over time."],
					["Walls", "Walls are defensive structures that can be built to enclose ones’ Parcel and prevent spilled Alchemica from being stolen. Walls can be upgraded to improve their toughness."],
					["Towers", "Towers are offensive structures that can be built to protect against Liquidator raids. They can be upgraded to improve their traits. Towers cannot be built inside the Citaadel premises, except in certain special regions."],
					["Black Hole", "Black Holes are powerful, mystical objects that exert a gravitational pull on all nearby Liquidators, slowly draining their health and bringing them closer towards the Parcel."],
					["NPC as Dapps", "Dapps will be playable directly within the Gotchiverse. An early example of this will be the GotchiDEX dapp, a DEX specially created for providing liquidity for the Gotchus Alchemica. A developer SDK will be created to allow other developers to re-skin their smart contract frontends to work as NPCs within the Gotchiverse."],
					["Antennas", ""],
					["Display Cases", ""]
				]
            }
        }		
    ]
