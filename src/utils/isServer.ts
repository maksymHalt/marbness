const isServer: () => boolean = () => window === undefined;

export default isServer;
