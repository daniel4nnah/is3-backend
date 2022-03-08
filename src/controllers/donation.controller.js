const DonationService = require('../services/donation.service.js');

const consultarDonacion = async (req, res) => {
    console.log('gets here');
    res.json({
        donations: await DonationService.getDonation()
    });
}

const saveDonation = async (req, res) => {
    console.log('gets here');
    console.log(req.body);
    res.json({
        donations: await DonationService.guardarDonation(req.body)

    })
}

const elimDona = async(req, res) => {
    res.json({
        donations: await DonationService.eliminarDonation(req.params.id)
    })
}

const modDona = async(req, res) => {
    res.json({
        donations: await DonationService.modificarDonation(req.body)
    })
}

module.exports = { consultarDonacion, saveDonation, elimDona, modDona }