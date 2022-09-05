const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
    misrepresentedTokens: true,
    methodology: "Factory addresses (0xc08BAEA14C14f25bcafe3e3E05550715505eF3dE for kava) is used to find the LP pairs. TVL is equal to the liquidity on the AMM.",
    kava: {
        tvl: getUniTVL({
            factory: '0xc08BAEA14C14f25bcafe3e3E05550715505eF3dE',
            chain: 'kava',
            useDefaultCoreAssets: true,
        }),
    }
}
