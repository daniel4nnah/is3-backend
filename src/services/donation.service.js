const donationmodel = require('../models/donation.js');

class DonationService {
    DonationService() { }

    async getDonation() {
        try {
            console.log('aslasdas');
            return await donationmodel.find();
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    async guardarDonation(donation = new donationmodel()) {
        try {
            var donationGuardado;
            await donationmodel.create(donation).then( (value) => {
                donationGuardado =  value;
            });

            return donationGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async eliminarDonation(idc) {
        console.log(idc);
        var donationEliminado;
        try {
            await donationmodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                donationEliminado = value;
            });

            return donationEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarDonation(donamod) {

        var donationModificado;
        try {
            await donationmodel.findOneAndUpdate({
                _id: donamod._id
            }, donamod).then( (value) => {

                donationModificado = donamod;
            });

            return donationModificado;
        } catch (error) {
            console.log(error);

        }
    }

}

module.exports = new DonationService();