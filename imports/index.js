import initCollections from './api/collections'
import initGlobalVariables from './api/globalVariables'

//Any thing that needs to occur as part of Meteor startup
Meteor.startup(function() {
  initCollections();
  initGlobalVariables();
});
