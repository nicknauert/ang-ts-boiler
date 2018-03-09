// A weird hacky fix for some definitions being uncool

import * as __angular from "angular"
declare global {
    const angular: typeof __angular;
    const require: (filename: string) => any;
} 
