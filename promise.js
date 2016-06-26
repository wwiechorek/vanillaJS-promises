var Promise = function Promise(){
    var
        // Internal info
        promiseState,
        promiseArg,

        // Internal functions
        setCallback,
        setPromise,

        // Calbacks
        callbacks = {};

        // Public functions
        Public = {
            resolve : null,
            reject : null,
            done : null,
            fail : null
        };

    setPromise = function(state, arg) {
        // Set information that it is resolved already
        promiseState = state;
        promiseArg = arg;

        // Unset the resolve and reject function to avoid recalls
        Public.resolve = null;
        Public.reject = null;

        // Call the done callback if already informed
        if( typeof callbacks[state] === 'function' ) callbacks[state](arg);

        // Return all functions
        return Public;
    };
    setCallback = function(state, arg) {
        // Escape in case the argument is not a valid function or a different promise was already set
        if (typeof arg !== 'function' ||
            typeof promiseState === 'string' && promiseState !== state) return Public;

        // Set callback info to be used when it's resolved
        callbacks[state] = arg;

        // Execute the callback function it was already resolved
        if(typeof promiseState === 'string') arg(promiseArg);

        // Return the function
        return Public;
    };

    // Functions to set how the callback should be executed
    Public.resolve = function(arg){
        return setPromise('DONE', arg);
    };
    Public.reject = function(arg){
        return setPromise('FAIL', arg);
    };

    // Functions to set the callback functions
    Public.done = function(arg){
        return setCallback('DONE', arg);
    };
    Public.fail = function(arg){
        return setCallback('FAIL', arg);
    };

    return Public;
};
