declare module NodeJS {
    interface NodeModule {
        hot?: {
            accept: (path?: string, callback?: () => void) => void;
            dispose: (callback: (data: any) => void) => void;
            addStatusHandler: (callback: (status: string) => void) => void;
            status: () => { errors: string[] };

        }
    }
}
declare var module: NodeJS.NodeModule;