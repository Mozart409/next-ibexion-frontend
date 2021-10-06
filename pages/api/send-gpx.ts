import { NextApiRequest, NextApiResponse } from 'next'

/* [{
    'Fahrergewicht': 75,
    'Bikegewicht': 35,
    'Fahrerleistung': 120,
    'Bikeleistung': 100,
    'GPXDaten': 'xml'
},

{
    'Fahrtdauer': 'datetime'
    'Energiebedarf': 111
    'BilddatenFahrtdauer': [y1,y2,...,y_last]
    'BilddatenEnergiebedarf': [z1,z2,...,z_last]
}] */

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<SendGpxData>) => {
  res.status(200).json({
    Fahrergewicht: 75,
    Bikegewicht: 35,
    Fahrerleistung: 120,
    Bikeleistung: 100,
    GPXDaten: 'xml',
  })
}
