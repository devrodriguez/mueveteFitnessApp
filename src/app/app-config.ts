export class AppConfig {
    private host: string = "api.muevetefitness.com.co";
    //private host: string = "192.168.0.15";
    //private port: string = ':8000';
    private port: string = '';

    public apiUrl : string = `http://${this.host}${this.port}`;
}