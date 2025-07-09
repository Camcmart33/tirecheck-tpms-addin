geotab.addin.tirecheckTPMS = function(api, state) {
  return {
    initialize(api, state, callback) {
      console.log("TireCheck TPMS initialized");
      callback();
    },
    focus(api, state) {
      console.log("TireCheck TPMS focused");
    },
    blur() {
      console.log("TireCheck TPMS blurred");
    }
  };
};
