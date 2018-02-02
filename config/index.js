module.exports = {
    debug: false,
    makeAndCancelOffers: true,
    apiServer: true,
    apiPort: process.env.PORT || 5000,
    useSentry: true,
    sentryAddress: process.env.SENTRY || '',
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
		lowThreshold: 10,
		highThreshold: 18,
	    },
	    currencies: {
		eth: {
		    active: true,
		    minimumRate: 4,
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
		eos: {
		    active: true,
		    minimumRate: 4,
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
		btc: {
		    active: true,
		    minimumRate: 4,
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
		    minimumRate: 4,
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
