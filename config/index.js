module.exports = {
    debug: true,
    makeAndCancelOffers: true,
    apiServer: false,
    apiPort: 8080,
    loopDelayInMinutes: 5,
    exchanges: {
	'bitfinex': {
	    msDelayBetweenAPICalls: 2000,
	    credentials: {
		key: process.env.BITFINEX_KEY || '',
		secret: process.env.BITFINEX_SECRET || ''
	    },
	    duration: {
		minimum: 2,
		maximum: 30,
		lowThreshold: 15,
		highThreshold: 20,
	    },
	    currencies: {
		eth: {
		    active: true,
		    minimumRate: 0.1,
		    minimumSizeUSD: 50,
		    rateCreationStrategy: {
			name: 'topOfTheBook',
		    },
		    rateUpdateStrategy: {
			name: 'lowerRateWithTime',
			lowerAfterMinutes: 30,
			lowerByPercent: 5
		    }
		},
		xrp: {
		    active: true,
		    minimumRate: 0.1,
		    minimumSizeUSD: 50,
		    rateCreationStrategy: {
			name: 'topOfTheBook',
		    },
		    rateUpdateStrategy: {
			name: 'lowerRateWithTime',
			lowerAfterMinutes: 30,
			lowerByPercent: 5
		    }
		},
	}
    }
}};
