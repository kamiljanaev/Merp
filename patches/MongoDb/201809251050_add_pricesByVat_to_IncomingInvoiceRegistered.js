db.getCollection('IncomingInvoiceRegisteredEvent').updateMany({}, { $set: { PricesByVat: [] } });