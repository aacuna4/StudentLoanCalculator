import initCollections from './api/collections'
import initGlobalVariables from './api/globalVariables'

//Any thing that needs to occur as part of Meteor startup.
//Meteor startup occurs after DOM has been generated
initCollections();
initGlobalVariables();

Meteor.startup(function() {

});
