import core from '@actions/core';
import action from './action.js';

(async () => {
    try {
        await action();
    } catch (error) {
        core.setFailed(error.message);
    }
})();
