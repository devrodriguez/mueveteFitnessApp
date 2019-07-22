export class AppConfig {
    private host: string = "192.168.0.27";
    private port: string = ':8000';

    public apiUrl : string = `http://${this.host}${this.port}`;
}