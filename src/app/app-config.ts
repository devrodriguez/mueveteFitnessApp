export class AppConfig {
    private host: string = "192.168.0.24";
    private port: string = ':8000';

    public apiUrl : string = `http://${this.host}${this.port}`;
}