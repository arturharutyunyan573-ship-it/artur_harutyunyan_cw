import {
    Users,
    Articles,
    Tags,
    Comments,
    ArticleTags
} from './models/index.js';

(async () => {
    const models = [
        Users,
        Articles,
        Tags,
        Comments,
        ArticleTags
    ];

    for (const model of models) {
        console.log('model ->', model.name);
        await model.sync({ alter: true });
    }

    console.log('Migration finished successfully');
})();